import React from "react";

import { validation } from '../../../utilits';

import './answer-textinput.css';


const AnswerTextInput = (props) => {
    const {  questionItem, isFinished, incrementScore, setUserAnswer, userAnswers } = props;
    const { rightAnswer, id } = questionItem;

    let resultClass = '';
    // console.log(userAnswers);
    if(isFinished){
       const isValid = validation(userAnswers[id], rightAnswer, incrementScore);
       isValid ? (resultClass = 'is-valid') : (resultClass = 'is-invalid');
    }


    return (
        <form>
            <div className="form-group col-10 offset-1">
                <label htmlFor={`input-${id}`}></label>
                <input
                       id={`input-${id}`}
                       className={`form-control ${resultClass}`}
                       value={userAnswers[id] || ''}
                       onChange={(e) => setUserAnswer(id, e.target.value)}
                       placeholder="Введіть правильну відповідь"/>
            </div>
        </form>
    )

};



export default AnswerTextInput;