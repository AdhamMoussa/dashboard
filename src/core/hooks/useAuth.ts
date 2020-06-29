import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { firebaseApp } from '../../firebaseApp'

import { getUser } from '../store/user'

import { ThunkDispatchType } from '../store'

export const useAuth = (): void => {
  const dispatch = useDispatch<ThunkDispatchType>()

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(getUser(user))
      }
    })
  }, [dispatch])
}
