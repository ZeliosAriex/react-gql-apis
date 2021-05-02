import { useContext, useEffect } from 'react'
import { actions } from '../actions'
import { RickAndMortyContext } from '../index'

const useFetchCharacters = () => {
  const { state, dispatch } = useContext(RickAndMortyContext)

  useEffect(() => {
    dispatch(actions.fetchCharacters())
  }, [dispatch])

  return state
}
export default useFetchCharacters
