import React, { Component } from 'react'
import Menu from './components/Menu'
import Header from './components/Header'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <Menu />
      </div>
    )
  }
}

export default App
