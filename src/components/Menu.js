import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Menu extends Component {
  render () {
    return (
      <div className='centered'>
        <Link to='/game'>
          <button className='btn btn-primary'>Play</button>
        </Link>
        <br />
        <Link to='/ranking'>
          <button className='btn btn-primary'>Ranking</button>
        </Link>
        <br />
        <Link to='/rules'>
          <button className='btn btn-primary'>Rules</button>
        </Link>
      </div>
    )
  }
}

export default Menu
