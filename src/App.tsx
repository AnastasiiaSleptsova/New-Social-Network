import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter.tsx'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Samurai Social Network</h1>
        <AppRouter />
      </div>
    </BrowserRouter>
  )
}

export default App
