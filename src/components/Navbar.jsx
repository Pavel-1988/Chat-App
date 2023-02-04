import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Pasha Chat</span>
      <dic className="user">
        <img src="img/addAvatar" alt="" />
        <span>John</span>
        <button>logout</button>
      </dic>
      
    </div>
  )
}

export default Navbar
