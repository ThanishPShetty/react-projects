import React, { useContext } from 'react'
import Usercontext from '../context/Usercontext'

function Profile() {
    const {user}=useContext(Usercontext)
  return (
    <>
    <h1>Welcome {user.username}</h1>
    </>
  )
}

export default Profile