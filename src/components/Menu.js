import React, { Component } from 'react'

import Game from './Game'
import MenuButtons from './MenuButtons'
import GameRules from './GameRules'
import Ranking from './Ranking'

class Menu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      menuStatus: 'MAIN_MENU'
    }
  }

  onPlayClick () {
    this.setState({
      menuStatus: 'PLAYING'
    })
  }

  onRankingClick () {
    this.setState({
      menuStatus: 'RANKING'
    })
  }

  onRulesClick () {
    this.setState({
      menuStatus: 'RULES'
    })
  }

  render () {
    return (
      <div className='centered'>
        <MenuButtons
          menuStatus={this.state.menuStatus}
          onPlayClick={this.onPlayClick.bind(this)}
          onRankingClick={this.onRankingClick.bind(this)}
          onRulesClick={this.onRulesClick.bind(this)} />
        <Game menuStatus={this.state.menuStatus} />
        <Ranking menuStatus={this.state.menuStatus} />
        <GameRules menuStatus={this.state.menuStatus} />
      </div>
    )
  }
}

export default Menu
