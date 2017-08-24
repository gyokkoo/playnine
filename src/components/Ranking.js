import React from 'react'

const Ranking = (props) => {
  if (props.menuStatus === 'RANKING') {
    return (
      <div className='text-center'>
        <h4>TODO:</h4>
        <div>Display ranking here!</div>
      </div>
    )
  } else {
    return (
      <div />
    )
  }
}

export default Ranking
