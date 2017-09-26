import React from 'react'

const GameOverFrame = (props) => {
  return (
    <div className='text-center'>
      <div>
        <h2>{`Game Over! Your times is ${props.seconds} seconds!`}</h2>
        <button className='btn btn-secondary' onClick={props.resetGame}>Play Again</button>
      </div>
    </div>
  )
}

export default GameOverFrame
