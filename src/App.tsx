import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { useAuth } from 'core/hooks/useAuth'

import AppRoutes from 'core/routes'

const App: React.FC = () => {
  useAuth()

  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
