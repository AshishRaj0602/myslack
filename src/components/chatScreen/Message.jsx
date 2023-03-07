import React from 'react'
import './message.css'
const Message = (props) => {
  const {message,user,userImage,timestamp}=props
  // console.log("timestamp",timestamp)
  return (
    <div className='message'>
      <img src={userImage} alt="Avtar" />
      <div className="message_info">
        <h4>
            {user} <span className='message_timestamp'>
              {new Date(timestamp?.toDate()).toUTCString()}
            </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message
