import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SubmitScore from './components/SubmitScore'
import Game from './components/Game'
import Ranking from './components/Ranking'
import GameRules from './components/GameRules'

const Routes = () => (
  <Switch>
    <Route path='/game' component={Game} />
    <Route path='/ranking' component={Ranking} />
    <Route path='/rules' component={GameRules} />
    <Route path='/submit-score' component={SubmitScore} />
  </Switch>
)

export default Routes
