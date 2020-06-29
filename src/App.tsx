import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { CssBaseline, Backdrop, CircularProgress } from '@material-ui/core'

import { useAuth } from 'core/hooks/useAuth'

import AppRoutes from 'core/routes'

const App: React.FC = () => {
  const { loading: authLoading } = useAuth()

  return (
    <Router>
      <CssBaseline />

      {authLoading ? (
        <Backdrop open>
          <CircularProgress color="primary" size={70} />
        </Backdrop>
      ) : (
        <AppRoutes />
      )}
    </Router>
  )
}

export default App
