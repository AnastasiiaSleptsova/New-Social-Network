import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'widgets/Navbar/ui/Navbar'

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Link to="/login">Login</Link> | <Link to="/users">Users</Link>
    </div>
  )
}

export default HomePage