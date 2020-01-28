import React from "react";

import "./answer-select.css";

const AnswerSelect = (props) => {

    const {  questionItem, setUserAnswer, userAnswers, resultClass, isChangeable } = props;
    const { options, id } = questionItem;


    return (
        <form className={`form-group col-10 offset-1 `}>
            <label htmlFor={`select-${id}`}>
                Оберіть одну правильну відповідь
            </label>
            <select className={`${resultClass}`}
                    size="1"
                    disabled={isChangeable}
                    id={`select-${id}`}
                    value={userAnswers[id] || ''}
                    onChange={ (e) => setUserAnswer(id, Number(e.target.value))}>

                <option id={0}
                        key={0}
                        value=''>
                    -
                </option>
                {
                    options.map( (option) => {
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