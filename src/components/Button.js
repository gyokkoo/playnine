import React from 'react'

const Button = (props) => {
  let button
  switch (props.answerIsCorrect) {
    case true:
      button =
        <button className='btn btn-outline-success' onClick={props.acceptAnswer}>
          <i className='fa fa-check-square' />
        </button>
      break
    case false:
      button =
        <button className='btn btn-outline-danger'>
          <i className='fa fa-times' />
        </button>
      break
    default:
      button =
        <button
          className='btn'
          onClick={props.checkAnswer}
          disabled={props.selectedNumbers.length === 0}>
          =
        </button>
      break
  }
  return (
    <div className='col-2 text-center'>
      {button}
      <br />
      <br />
      <button className='btn btn-outline-warning' onClick={props.redraw} disabled={props.redraws === 0}>
        <i className='fa fa-refresh' /> {props.redraws}
      </button>
    </div>
  )
}

export default Button
