import React from "react";

import "./answer-select.css";

const AnswerSelect = (props) => {

    const { options, score, rightAnswer, id } = props;

    return (
        <form className="form-group col-10 offset-1">
            <label htmlFor={`select-${id}`}>
                Оберіть одну правильну відповідь
            </label>
            <select size="1" id={`select-${id}`}>
                <option id={`option-0}`}
                        className=''
                        key={0}>
                    -
                </option>
                {
                    options.map( (option,idx) => {
                        return (
                            <option id={`option-${idx+1}`}
                                    className=''
                                    key={idx+1}>
                                {option}
                            </option>)
                    })
                }
            </select>
        </form>

    );
};

export default AnswerSelect;