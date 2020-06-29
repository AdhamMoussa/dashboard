import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatchType, AppState } from 'core/store'
import { useEffect } from 'react'
import { fetchJokes } from 'dashboard/store/jokes/operations'

export const useJokes = () => {
  const dispatch = useDispatch<ThunkDispatchType>()

  const { list, loading, error } = useSelector((state: AppState) => state.jokes)

  useEffect(() => {
    dispatch(fetchJokes())
  }, [dispatch])

  return {
    jokes: list,
    loading,
    error,
  }
}
