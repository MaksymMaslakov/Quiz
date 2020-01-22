import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";

import App from '../src/components/app';
import ErrorBoundary from "./components/error-boundary";
import store from './store'
ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <Router>
                <App/>
            </Router>
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));

