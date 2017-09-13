import React, { Component } from 'react'
import { Redirect, Switch } from 'react-router-dom'
import KinveyRequester from '../KinveyRequester'

class SubmitScore extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      isSubmitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    KinveyRequester
      .submitScore(this.state.value, this.props.lives, this.props.time)
      .then(submitScoreSuccess.bind(this))
    function submitScoreSuccess () {
      this.setState({
        isSubmitted: true
      })
    }
  }

  render () {
    return (
      <div className='text-center'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Your Name:
            <input type='text' onChange={this.handleChange} />
          </label>
          <input type='submit' value='Submit' />
        </form>

        {
          this.state.isSubmitted ? (<Switch>
            <Redirect to='/ranking' />
          </Switch>)
          : null
        }
      </div>
    )
  }
}

export default SubmitScore
