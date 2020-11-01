import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import Quiz from '../quiz/Quiz';
import Leaderboard from '../leaderboard/Leaderboard'

function RoutingSwitch() {
    return(
        <Router>
            <Switch>
                    <Route 
                        exact 
                        path="/"
                        render={() => <Home />}>
                    </Route>
                    <Route 
                        exact 
                        path="/leaderboard"
                        render={() => <Leaderboard />}>
                    </Route>
                    <Route 
                        exact 
                        path="/quiz"
                        render={() => <Quiz />}>
                    </Route>
            </Switch>
        </Router>
    )
}

export default RoutingSwitch