import React from 'react';

import QuestionBox from "./question-box/question-box";

import "./question-list.css"

const QuestionList = (props) => {

    // const { questions } = props;

    const questions = ['1'];
    return (
        <ul className='Box col-10 offset-1'
            id='question-list'>
            {
                questions.map( (question, idx) =>
                    <QuestionBox className='Box col-10 offset-2'
                                 {...question}
                                 index={idx+1}
                                 key={idx}/>)
            }
        </ul>
    );
};

export default QuestionList;