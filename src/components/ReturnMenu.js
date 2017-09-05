import React from 'react'
import { Link } from 'react-router-dom'

const ReturnMenu = (props) => {
  return (
    <div className='text-center'>
      <Link to='/'>
        <button className='btn btn-primary'>Main Menu</button>
      </Link>
    </div>
  )
}

export default ReturnMenu
