import React from "react";

import "./answer-select.css";
import {validation} from "../../../utilits";

const AnswerSelect = (props) => {

    const {  questionItem, isFinished, incrementScore, setUserAnswer, userAnswers } = props;
    const { options, rightAnswer, id } = questionItem;

    let resultClass = '';
    // console.log(userAnswers);
    if(isFinished){
        const isValid = validation(userAnswers[id], rightAnswer, incrementScore);
        isValid ? (resultClass = 'is-valid') : (resultClass = 'is-invalid');
    }
    console.log(resultClass);
    return (
        <form className={`form-group col-10 offset-1 ${resultClass}`}>
            <label htmlFor={`select-${id}`}>
                Оберіть одну правильну відповідь
            </label>
            <select
                    size="1"
                    id={`select-${id}`}
                    value={userAnswers[id] || ''}
                    onChange={ (e) => setUserAnswer(id, e.target.value)}>

                <option id={0}
                        key={0}
                        value=''>
                    -
                </option>
                {
                    options.map( (option,) => {
                        return (
                            <option id={`option-${option.id}`}
                                    key={option.id}
                                    value={option.id}>
                                {option.text}
                            </option>)
                    })
                }
            </select>
        </form>

    );
};

export default AnswerSelect;