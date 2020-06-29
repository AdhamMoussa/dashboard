import React from 'react'
import { useSelector } from 'react-redux'
import { Route, RouteProps, Redirect } from 'react-router-dom'

import { AppState } from 'core/store'

const PrivateRoute: React.FC<RouteProps> = ({ children, ...props }) => {
  const userData = useSelector((state: AppState) => state.user.data)

  return (
    <Route
      {...props}
      render={() =>
        userData ? children : <Redirect to={{ pathname: '/login' }} />
      }
    />
  )
}

export default PrivateRoute
