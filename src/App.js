import React, { Component } from 'react'
import './App.css'
import $ from 'jquery'
import Header from './components/Header'
import Routes from './routes'
import Menu from './components/Menu'

class App extends Component {
  componentDidMount () {
    // Attach global AJAX "loading" event handlers
    $(document).on({
      ajaxStart: function () {
        $('#loadingBox').show()
      },
      ajaxStop: function () {
        $('#loadingBox').hide()
      }
    })

    // Attach a global AJAX error handler
    $(document).ajaxError(this.handleAjaxError.bind(this))
    $('#errorBox, #infoBox').click(function () {
      $('#errorBox').hide()
    })
  }

  handleAjaxError (event, response) {
    let errorMsg = JSON.stringify(response)
    if (response.readyState === 0) {
      errorMsg = 'Cannot connect due to network error.'
    }
    if (response.responseJSON && response.responseJSON.description) {
      errorMsg = response.responseJSON.description
    }

    $('#errorBox').text('Error: ' + errorMsg).show()
  }

  render () {
    const currentPath = window.location.pathname
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
        <div id='loadingBox'>Loading ..</div>
        <div id='infoBox'>Info msg</div>
        <div id='errorBox'>Error msg</div>
      </div>
    )
  }
}

export default App
