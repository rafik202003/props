import React from 'react'

const Profile = ({p}) => {
    console.log(p)
  return (
    <div>
        <h1>{p.id}</h1>
        <h1>{p.fullname}</h1>
        <h1>{p.Biblio}</h1>
    </div>
    
  )
}

export default Profile