import React from "react";

import FormCheck from "./form-check";

import './answer-radiobutton.css';

const AnswerRadioButton = (props) => {

    const { options, score, rightAnswer, id } = props;

    return (
        <form className="form-group col-10 offset-1">
                <label htmlFor={`container-${id}`}>
                    Оберіть одну правильну відповідь
                </label>
                <div id={`container-${id}`}></div>
                {
                    options.map( (option, idx) =>
                        <FormCheck option={option}
                                   id={id}
                                   idx={idx}
                                   key={`${id}-${idx}`}/>)
                }
        </form>
    )

};

export default AnswerRadioButton;