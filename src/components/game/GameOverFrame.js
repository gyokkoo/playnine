import React from 'react'

import sadFace from '../../images/sad-face.png'

const GameOverFrame = (props) => {
  return (
    <div className='text-center'>
      <div>
        <h2>{`Game Over! Your times is ${props.seconds} seconds!`}</h2>
        <img style={{width: 250}} src={sadFace} alt='Sad Face' />
        <br />
        <button className='btn btn-secondary' onClick={props.resetGame}>Play Again</button>
      </div>
    </div>
  )
}

export default GameOverFrame
