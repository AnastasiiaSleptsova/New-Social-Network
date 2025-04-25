import React from 'react'
import { User } from '../types'
import { useFollowUserMutation, useUnfollowUserMutation } from '../app/api.ts'
import { Link } from 'react-router-dom'

interface Props {
  user: User
}

const UserCard: React.FC<Props> = ({ user }) => {
  const [followUser] = useFollowUserMutation()
  const [unfollowUser] = useUnfollowUserMutation()

  const handleFollow = () => {
    if (user.followed) {
      unfollowUser(user.id)
    } else {
      followUser(user.id)
    }
  }

  return (
    <div style={{ border: '1px solid gray', marginBottom: 10, padding: 10 }}>
      <Link to={`/profile/${user.id}`}>
        <h3>{user.name}</h3>
      </Link>
      <p>{user.status}</p>
      <button onClick={handleFollow}>
        {user.followed ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  )
}

export default UserCard