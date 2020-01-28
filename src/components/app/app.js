import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { compose } from "redux";
import { connect } from 'react-redux';

import ErrorIndicator from "../error-indicator";
import Home from "../../screens/home"

import './app.css';

import { withQuestionsService } from '../hoc';
import { fetchQuestionList } from "../../redux/actions";


class App extends Component{
    render(){



        return(
            <Switch>
                <Route path='/'
                       component={Home}
                       exact/>
                <Route path='/result'
                       // component={Home}
                       render={() => <h1>Hello</h1>}
                       exact/>
                <Route component={ErrorIndicator}  />
            </Switch>

        )
    }
}

const mapDispatchToProps = (dispatch, { questionsService }) => {
    return {
        fetchQuestionList: fetchQuestionList(dispatch, questionsService)
    }
};

export default compose(
    withQuestionsService(),
    connect(null,mapDispatchToProps))(App);