import React from 'react'

const Answer = (props) => {
  return (
    <div className='col-5'>
      {props.selectedNumbers.map((number, i) =>
        <span key={i} onClick={() => props.unselectNumber(number)}>
          {number}
        </span>)}
    </div>
  )
}

export default Answer
