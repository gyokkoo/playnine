import React from 'react'
import _ from 'lodash'

const Stars = (props) => {
  return (
    <div className='col-5'>
      {_.range(props.numberOfStars).map(i => <i key={i} className='em em-yum' />)}
    </div>
  )
}

export default Stars
