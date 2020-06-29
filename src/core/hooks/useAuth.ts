import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { firebaseApp } from '../../firebaseApp'

import { getUser } from '../store/user'

import { ThunkDispatchType } from '../store'

export const useAuth = () => {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch<ThunkDispatchType>()

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          getUser({
            name: user.displayName || 'user',
            email: user.email!,
          })
        )
      }
      setLoading(false)
    })
  }, [dispatch])

  return { loading }
}
