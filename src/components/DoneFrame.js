import React from 'react'
import SubmitScore from './SubmitScore'

const WinFrame = (props) => {
  return (
    <div className='text-center'>
      <div>
        <h2>{`Congratulations, you finished the game with ${props.redraws} lives in ${props.seconds} seconds!`}</h2>
        <SubmitScore lives={props.redraws} time={props.seconds} />
      </div>
    </div>
  )
}

export default WinFrame
