import React from 'react'
import SubmitScore from './SubmitScore'

const DoneFrame = (props) => {
  const getDoneFrame = (gameWon) => {
    if (gameWon) {
      return (
        <div>
          <h2>{`Congratulations, you finished the game with ${props.redraws} lives in ${props.seconds} seconds!`}</h2>
          <SubmitScore lives={props.redraws} time={props.seconds} />
        </div>
      )
    } else {
      return (
        <div>
          <h2>{`You failed, Game Over! Your times is ${props.seconds} seconds!`}</h2>
          <button className='btn btn-secondary' onClick={props.resetGame}>Play Again</button>
        </div>
      )
    }
  }

  return (
    <div className='text-center'>
      {getDoneFrame(props.gameWon)}
    </div>
  )
}

export default DoneFrame
