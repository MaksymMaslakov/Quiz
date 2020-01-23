import React from "react";

import AnswerTextInput from "./answer-textinput";
import AnswerRadioButton from './answer-radiobutton';
import AnswerCheckbox from "./answer-checkbox";
import AnswerSelect from "./answer-select";

import './answer.css'
import ErrorIndicator from "../error-indicator";


const Answer = (props) => {

    const { question, score } = props;
    const { type } = question;

    let answer;

    switch(type){
        case 'select': answer = <AnswerSelect {...question} score={score}/>; break;
        case 'radio-button': answer = <AnswerRadioButton {...question} score={score}/>; break;
        case 'textinput': answer = <AnswerTextInput {...question} score={score}/>; break;
        case 'checkbox': answer = <AnswerCheckbox {...question} score={score}/>; break;
        default: answer = (
            <div>
                <h3>Something wring with question type</h3>
                <ErrorIndicator/>
            </div>);
        }

    return (
        <div className='Box-body'>
            {
                answer
            }
        </div>
    )
};

export default Answer;







