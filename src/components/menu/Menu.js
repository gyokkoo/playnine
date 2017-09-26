import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Menu extends Component {
  render () {
    return (
      <div className='centered'>
        <Link to='/playnine/game'>
          <button className='btn btn-primary'>Play</button>
        </Link>
        <br />
        <Link to='/playnine/ranking'>
          <button className='btn btn-primary'>Ranking</button>
        </Link>
        <br />
        <Link to='/playnine/rules'>
          <button className='btn btn-primary'>Rules</button>
        </Link>
        <br />
        <Link to='/playnine/about'>
          <button className='btn btn-primary'>About</button>
        </Link>
      </div>
    )
  }
}

export default Menu
