import React from 'react'

import { useAuth } from './hooks/useAuth'

const App: React.FC = () => {
  useAuth()

  return <h1>Hello</h1>
}

export default App
