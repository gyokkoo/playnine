import React from 'react'

const MenuButtons = (props) => {
  let buttons = <div />
  if (props.menuStatus === 'MAIN_MENU') {
    buttons =
      <div>
        <button className='btn btn-primary' onClick={props.onPlayClick}>Play</button> <br />
        <button className='btn btn-primary' onClick={props.onRankingClick}>Show Ranking</button> <br />
        <button className='btn btn-primary' onClick={props.onRulesClick}>Rules</button>
      </div>
  }

  return (
    buttons
  )
}

export default MenuButtons
