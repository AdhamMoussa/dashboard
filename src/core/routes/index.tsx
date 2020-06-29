import React from 'react'
import { Switch } from 'react-router-dom'

// routes
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import DashboardRoutes from 'dashboard/routes'

// components
import Login from 'core/pages/Login'

const AppRoutes = () => {
  return (
    <Switch>
      <PublicRoute path="/" exact>
        <h1>Home</h1>
      </PublicRoute>

      <PublicRoute path="/login">
        <Login />
      </PublicRoute>

      <PrivateRoute path="/dashboard">
        <DashboardRoutes />
      </PrivateRoute>
    </Switch>
  )
}

export default AppRoutes
