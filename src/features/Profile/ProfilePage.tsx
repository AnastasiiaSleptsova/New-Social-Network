import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProfileQuery } from '@shared/api/api'

const ProfilePage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>()
  const id = Number(userId)
  const { data, error, isLoading } = useGetProfileQuery(id)

  if (isLoading) return <p>Loading profile...</p>
  if (error) return <p>Error loading profile</p>

  return (
    <div>
      <h2>{data?.fullName}</h2>
      <p>About me: {data?.aboutMe}</p>
      <img src={data?.photos.large} alt="Profile" width={200} />
    </div>
  )
}

export default ProfilePage