import React from 'react'
import './profile.scss'
import List from '../../components/list/List'
import Chat from '../../components/chat/Chat'

const Profile = () => {
  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update profile</button>
          </div>
          <div className="info">
            <span>Avatar : <img src="/logo.png" alt="" /></span>
            <span>UserName: <b>Ismail barka</b></span>
            <span>Email: <b>johne@gmail.com</b></span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat></Chat>
        </div>
      </div>
    </div>
  )
}

export default Profile
