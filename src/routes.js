import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Game from './components/Game'
import Ranking from './components/Ranking'
import GameRules from './components/GameRules'

const Routes = () => (
  <Switch>
    <Route path='/game' component={Game} />
    <Route path='/ranking' component={Ranking} />
    <Route path='/rules' component={GameRules} />
  </Switch>
)

export default Routes
