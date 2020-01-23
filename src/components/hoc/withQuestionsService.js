import React from 'react'
import { QuizContextConsumer } from "../quiz-context";


const withQuestionsService = () => (Wrapped) => {

    return (props) => {
        return (
            <QuizContextConsumer>
                {
                    (questionsService) => {

                        return (<Wrapped {...props}
                                         questionsService={questionsService}/>)
                    }
                }
            </QuizContextConsumer>
        );
    }
};

export default withQuestionsService;