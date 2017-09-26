import React, { Component } from 'react'
import KinveyRequester from '../KinveyRequester'
import ReturnMenu from './ReturnMenu'

class Ranking extends Component {
  constructor (props) {
    super(props)

    this.state = {
      scores: []
    }
  }

  componentWillMount () {
    KinveyRequester.getScores().then(getScoresSuccess.bind(this))
    function getScoresSuccess (data) {
      this.setState({
        scores: data
      })
    }
  }

  render () {
    let scoreRows = this.state.scores.map(score =>
      <tr key={score._id}>
        <td>{score.name}</td>
        <td>{score.lives}</td>
        <td>{score.time}</td>
      </tr>
    )

    return (
      <div className='text-center'>
        <h4>Ranking</h4>
        <table className='ranking-table'>
          <thead>
            <tr>
              <th>Player</th>
              <th>Lives</th>
              <th>Seconds</th>
            </tr>
          </thead>
          <tbody>
            {scoreRows}
          </tbody>
        </table>
        <ReturnMenu />
      </div>
    )
  }
}

export default Ranking
