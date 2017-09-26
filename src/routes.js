import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SubmitScore from './components/game/SubmitScore'
import Game from './components/game/Game'
import Ranking from './components/ranking/Ranking'
import AboutPage from './components/about/AboutPage'
import GameRulesPage from './components/rules/GameRulesPage'

const Routes = () => (
  <Switch>
    <Route path='/playnine/game' component={Game} />
    <Route path='/playnine/ranking' component={Ranking} />
    <Route path='/playnine/rules' component={GameRulesPage} />
    <Route path='/playnine/about' component={AboutPage} />
    <Route path='/playnine/submit-score' component={SubmitScore} />
  </Switch>
)

export default Routes
