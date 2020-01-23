import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import { QuizContextProvider } from "./components/quiz-context";

import App from '../src/components/app';
import ErrorBoundary from "./components/error-boundary";

import { QuestionsService } from '../src/services';
import store from './store'

const questionsService = new QuestionsService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <QuizContextProvider value={questionsService}>
                <Router>
                    <App/>
                </Router>
            </QuizContextProvider>
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));

