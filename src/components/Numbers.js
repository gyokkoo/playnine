import React from 'react'
import _ from 'lodash'

const Numbers = (props) => {
  const numberClassName = (number) => {
    if (props.usedNumbers.indexOf(number) >= 0) {
      return 'used'
    }
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected'
    }
  }

  Numbers.list = _.range(1, 10)
  return (
    <div className='card text-center'>
      <div>
        {Numbers.list.map((number, i) =>
          <span key={i} onClick={() => props.selectNumber(number)} className={numberClassName(number)}>
            {number}
          </span>)}
      </div>
    </div>
  )
}

export default Numbers
