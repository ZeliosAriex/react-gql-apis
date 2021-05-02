import { useContext, useEffect } from 'react'
import { CountriesContext } from '../index'
import { actions } from '../actions'

const useFetchCountries = () => {
  const { state, dispatch } = useContext(CountriesContext)

  useEffect(() => {
    dispatch(actions.fetchCountries())
  }, [dispatch])

  return state
}
export default useFetchCountries
