import React, { Component } from 'react'
import _ from 'lodash'

const emojisTypes = [
  'em em-yum',
  'em em-angry',
  'em em-anguished',
  'em em-baby',
  'em em-cold_sweat',
  'em em-weary',
  'em em-triumph',
  'em em-tired_face'
]

class Emojis extends Component {
  static getRandomNumber = () => Math.floor(Math.random() * emojisTypes.length)
  
  render () {
    let emojis = _.range(this.props.numberOfEmojis).map(i =>
      <i key={i} className={emojisTypes[Emojis.getRandomNumber()]}/>
    )

    return (
      <div className='col-5'>
        {emojis}
      </div>
    )
  }
}

export default Emojis
