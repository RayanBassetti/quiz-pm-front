import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import Quiz from '../quiz/Quiz';
import Ending from '../ending/Ending'
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
                    {/* todo : bloquer l'accès de la page "ending, rediriger vers /quiz, accessible seulement si le quiz est fait" */}
                    <Route 
                        exact 
                        path="/ending"
                        render={() => <Ending />}>
                    </Route>
            </Switch>
        </Router>
    )
}

export default RoutingSwitch