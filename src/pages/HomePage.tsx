import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  return (
    <div>
      <Link to="/login">Login</Link> | <Link to="/users">Users</Link>
    </div>
  )
}

export default HomePage