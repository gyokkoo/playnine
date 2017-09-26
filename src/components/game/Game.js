import React from 'react'
import Emojis from './Emojis'
import Button from './Button'
import Answer from './Answer'
import Numbers from './Numbers'
import WinFrame from './DoneFrame'
import GameOverFrame from './GameOverFrame'
import ReturnMenu from '../menu/ReturnMenu'
import _ from 'lodash'

let possibleCombinationSum = function(arr, n) {
  if (arr.indexOf(n) >= 0) { 
    return true
  }
  if (arr[0] > n) { 
    return false
  }
  if (arr[arr.length - 1] > n) {
    arr.pop()
    return possibleCombinationSum(arr, n)
  }
  var listSize = arr.length, combinationsCount = (1 << listSize)
  for (var i = 1; i < combinationsCount ; i++ ) {
    var combinationSum = 0
    for (var j = 0 ; j < listSize ; j++) {
      if (i & (1 << j)) { 
        combinationSum += arr[j]
      }
    }
    if (n === combinationSum) { 
      return true
    }
  }
  return false
}

const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
  ':' +
  ('0' + sec % 60).slice(-2)

class Game extends React.Component {
  static getRandomNumber = () => 1 + Math.floor(Math.random() * 9)

  static getInitialState = () => ({
      selectedNumbers: [],
      numberOfEmojis: Game.getRandomNumber(),
      usedNumbers: [],      
      // usedNumbers: [1, 2, 3, 4, 5, 6, 7, 9],
      answerIsCorrect: null,
      redraws: 5,
      gameEnd: false,
      gameWon: false,
      secondsElapsed: 0,
      lastClearedIncrementer: null
  })
  
  constructor (props) {
    super(props)
    this.state = Game.getInitialState()
    this.incrementer = setInterval(() => {
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      })
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer
    })
  }

  handleReset () {
    clearInterval(this.incrementer)
    this.setState({
      secondsElapsed: 0
    })
  }

  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
      return
    }
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  }

  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }))
  }

  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.numberOfEmojis === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }))
  }

  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      numberOfEmojis: Game.getRandomNumber()
    }), this.updateStatus)
  }

  resetGame = () => { 
    this.setState(Game.getInitialState())
    this.incrementer = setInterval(() => {
      this.setState({
        gameWon: false,
        secondsElapsed: this.state.secondsElapsed + 1
      })
    }, 1000)
  }

  redraw = () => {
    if (this.state.redraws === 0) {
      this.setState({
        gameEnd: true
      })
      return
    }
    this.setState(prevState => ({
      numberOfEmojis: Game.getRandomNumber(),
      answerIsCorrect: null,
      selectedNumbers: [],
      redraws: prevState.redraws - 1
    }), this.updateStatus)
  }

  possibleSolutions = ({numberOfEmojis, usedNumbers}) => {
    const possibleNumbers = _.range(1, 10).filter(number => usedNumbers.indexOf(number) === -1)

    return possibleCombinationSum(possibleNumbers, numberOfEmojis)
  }

  updateStatus = () => {
    this.setState(prevState => {
      if (prevState.usedNumbers.length === 9) {
        this.stopTimer()
        return {gameEnd: true, gameWon: true}
      }
      if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
        this.stopTimer()
        return {gameEnd: true, gameWon: false}
      }
    })
  }

  render () {
    const { selectedNumbers, numberOfEmojis, answerIsCorrect, usedNumbers, redraws, gameWon, gameEnd } = this.state

    return (
      <div className='container'>
        <div className='row'>
          <Emojis numberOfEmojis={numberOfEmojis} />
          <Button selectedNumbers={selectedNumbers} 
                  redraws={redraws}
                  checkAnswer={this.checkAnswer}
                  acceptAnswer={this.acceptAnswer}
                  redraw={this.redraw}
                  answerIsCorrect={answerIsCorrect} />
          <Answer selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber} />
        </div>
        <br />
          {gameEnd ?
            gameWon ?
              <WinFrame 
                resetGame={this.resetGame} 
                redraws={this.state.redraws}
                seconds={this.state.secondsElapsed} /> :
              <GameOverFrame 
                seconds={this.state.secondsElapsed}
                resetGame={this.resetGame} />
            :
            <Numbers selectedNumbers={selectedNumbers} 
                selectNumber={this.selectNumber}
                usedNumbers={usedNumbers}/>
          }
        <br/>
        <br/>
        <div className="centered">
          {gameEnd ? 
            null :
            <h2 className="stopwatch-timer">{formattedSeconds(this.state.secondsElapsed)}</h2>
          }
        </div>
        <ReturnMenu showHowToPlay={true} />
      </div>
    )
  }
}

export default Game
