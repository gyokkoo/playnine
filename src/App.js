import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Routes from './routes'
import Menu from './components/Menu'

class App extends Component {
  render () {
    const currentPath = window.location.pathname
    console.log(currentPath)
    return (
      <div className='container'>
        <Header />
        {
          currentPath === '/game' ||
          currentPath === '/ranking' ||
          currentPath === '/rules'
          ? null : <Menu />
        }
        <Routes />
      </div>
    )
  }
}

export default App
