import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from 'dashboard/pages/Dashboard'
import Settings from 'dashboard/pages/Settings'
import DashboardLayout from 'dashboard/components/Layout'

const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Switch>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>

        <Route path="/dashboard/settings">
          <Settings />
        </Route>
      </Switch>
    </DashboardLayout>
  )
}

export default DashboardRoutes
