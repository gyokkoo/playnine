import React from 'react'
import _ from 'lodash'

const Emojis = (props) => {
  return (
    <div className='col-5'>
      {_.range(props.numberOfEmojis).map(i => <i key={i} className='em em-yum' />)}
    </div>
  )
}

export default Emojis
