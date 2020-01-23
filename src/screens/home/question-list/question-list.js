import React from 'react';

import QuestionBox from "./question-box/question-box";

import "./question-list.css"

const QuestionList = (props) => {

    // const { questions } = props;

    const questions = ['1','2','3','4'];
    return (
        <ul className='Box col-10 offset-1'
            id='question-list'>
            {
                questions.map( (question, index) =>
                    <QuestionBox className='Box col-10 offset-2'
                                 {...question}
                                 index={index+1}/>)
            }
        </ul>
    );
};

export default QuestionList;