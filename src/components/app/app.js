import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorIndicator from "../error-indicator";
import Home from "../../screens/home"

import './app.css';

import { withQuestionsService } from '../hoc';

class App extends Component{
    render(){
        this.props.questionsService.getQuestions()
            .then( (body) => console.log(body));
        return(
            <Switch>
                <Route path='/'
                       render={() => <Home/> }
                       exact/>
                <Route component={ErrorIndicator}  />
            </Switch>

        )
    }
}

export default withQuestionsService()(App);