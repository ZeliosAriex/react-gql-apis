import { AsyncActionHandlerType } from './types'
import { getAllCountries } from '../../graphql/countries/queries/allCountries'
import { countryQuery } from '../../graphql/countries/client'
import { CountriesQueryResult } from '../../graphql/countries/types'

export const asyncActionHandlers: AsyncActionHandlerType = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  FETCH_COUNTRIES: ({ dispatch, signal }) => async action => {
    dispatch({ type: 'START_FETCH_COUNTRIES' })
    try {
      const { data } = await countryQuery<CountriesQueryResult>(
        getAllCountries()
      )
      if (!signal.aborted)
        dispatch({ type: 'FINISH_FETCH_COUNTRIES', payload: data.countries })
    } catch (e) {
      if (!signal.aborted)
        dispatch({ type: 'ERROR_FETCH_COUNTRIES', payload: e.message })
    }
  },
}
