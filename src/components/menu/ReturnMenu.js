import React from 'react'
import { Link } from 'react-router-dom'

const ReturnMenu = (props) => {
  return (
    <div className='text-center'>
      {
        props.showHowToPlay ? <Link to='/playnine/rules'>
          <button className='btn btn-primary'>How To Play?</button>
        </Link> : <br />
      }
      <br />
      <Link to='/playnine'>
        <button className='btn btn-primary'>Main Menu</button>
      </Link>
    </div>
  )
}

export default ReturnMenu
