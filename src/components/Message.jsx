import React from 'react'

import Pers from '../img/olgarepina.jpg'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={Pers} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={Pers} alt="" />
      </div>
    </div>
  )
}

export default Message
