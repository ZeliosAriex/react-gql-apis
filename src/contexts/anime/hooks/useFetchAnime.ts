import { useContext, useEffect } from 'react'
import { AnimeContext } from '../index'
import { actions } from '../actions'

const useFetchAnime = () => {
  const { state, dispatch } = useContext(AnimeContext)

  useEffect(() => {
    dispatch(actions.fetchAnime())
  }, [dispatch])

  return state
}
export default useFetchAnime
