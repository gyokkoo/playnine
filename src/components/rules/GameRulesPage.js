import React from 'react'
import ReturnMenu from '../menu/ReturnMenu'

import './GameRulesPage.css'
import howToPlayImage from '../../images/how-to-play.png'

const GameRulesPage = (props) => {
  return (
    <div className='text-center rules-page'>
      <h4>Game rules: </h4>
      <p>You must count emoticons and choose the correct number sum.</p>
      <p>You can use each number once and when you use all numbers you win the game. </p>
      <p>You have 5 attempts to generate new emojis and if you cannot select correct numbers you lose the game.</p>
      <img style={{width: 800}} src={howToPlayImage} alt='How to play' />
      <ReturnMenu />
    </div>
  )
}

export default GameRulesPage
