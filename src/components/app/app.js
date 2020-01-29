import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { compose } from "redux";
import { connect } from 'react-redux';

import ErrorIndicator from "../error-indicator";
import Home from "../../screens/home"
import Result from '../../screens/results'

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
                       // component={Result}
                       render={() => {
                           if(!this.props.isFinished)
                               return <Redirect to="/" />;
                           else
                                return <Result/>;
                       }}
                       exact/>
                <Route component={ErrorIndicator}  />
            </Switch>

        )
    }
}

const mapStateToProps = ({isFinished}) => {
  return {
      isFinished
  }
};

const mapDispatchToProps = (dispatch, { questionsService }) => {
    return {
        fetchQuestionList: fetchQuestionList(dispatch, questionsService)
    }
};

export default compose(
    withQuestionsService(),
    connect(mapStateToProps,mapDispatchToProps))(App);