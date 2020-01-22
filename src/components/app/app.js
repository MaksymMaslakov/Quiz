import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorIndicator from "../error-indicator";
import Home from "../../screens/home"


import './app.css';

class App extends Component{
    render(){
        return(
            <Switch>
                <Route path='/'
                       render={() => <Home/>}
                       exact/>
                <Route component={ErrorIndicator}  />
            </Switch>
        )
    }
}

export default App;