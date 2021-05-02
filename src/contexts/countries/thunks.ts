import { AsyncActionHandlerType } from './types'
import { ALL_COUNTRIES_NAMES_QUERY } from '../../graphql/countries/queries/allCountriesNames'
import { countryQuery } from '../../graphql/countries/client'

export const asyncActionHandlers: AsyncActionHandlerType = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  FETCH_COUNTRIES: ({ dispatch, signal }) => async action => {
    dispatch({ type: 'START_FETCH_COUNTRIES' })
    try {
      const { data } = await countryQuery(ALL_COUNTRIES_NAMES_QUERY)
      if (!signal.aborted)
        dispatch({ type: 'FINISH_FETCH_COUNTRIES', payload: data.countries })
    } catch (e) {
      if (!signal.aborted)
        dispatch({ type: 'ERROR_FETCH_COUNTRIES', payload: e.message })
    }
  },
}
