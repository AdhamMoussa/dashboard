import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from 'dashboard/pages/Dashboard'
import Settings from 'dashboard/pages/Settings'

const DashboardRoutes = () => {
  return (
    <Switch>
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>

      <Route path="/dashboard/settings">
        <Settings />
      </Route>
    </Switch>
  )
}

export default DashboardRoutes
