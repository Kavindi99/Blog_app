import React from 'react'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  return (
    // <div>UserProfile</div>
    <section className="profile">

      <div className="container profile__container">
        <Link to={`myposts/sdfsdf`} className='btn'> My Posts</Link>

        <div className="profile__details">
          
        </div>

      </div>

    </section>
  )
}

export default UserProfile