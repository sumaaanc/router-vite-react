import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid, name} = useParams()

  return (
    <div>
      User ID: {userid}
      Name: {name}
    </div>
  )
}

export default User
