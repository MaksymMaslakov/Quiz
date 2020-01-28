import React from "react";

import FormCheck from "./form-check";

import './answer-radiobutton.css';

const AnswerRadioButton = (props) => {

    const { questionItem, setUserAnswer, userAnswers, isChangeable, resultClass } = props;
    const { options, id } = questionItem;

    return (
        <form className="form-group col-10 offset-1">
                <label htmlFor={`container-${id}`}>
                    Оберіть одну правильну відповідь
                </label>
                <ul id={`container-${id}`}>
                    {
                        options.map( (option) =>
                            <FormCheck option={option}
                                       isChangeable={isChangeable}
                                       setUserAnswer={setUserAnswer}
                                       checked={userAnswers[id] === option.id}
                                       resultClass={resultClass}
                                       id={id}
                                       key={`${id}-${option.id}`}/>)
                    }
                </ul>
        </form>
    )

};

export default AnswerRadioButton;