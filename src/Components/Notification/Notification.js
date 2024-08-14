

import React from 'react'
import './Notification.css';
const Notification = ({message}) => {
    return (
      <div className='notBody'>
            <div className='notificationClass'>{message}</div>
            </div>
  )
}

export default Notification