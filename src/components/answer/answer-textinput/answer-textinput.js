import React from "react";

import './answer-textinput.css';

const AnswerTextInput = (props) => {

    // const { options, score, rightAnswer, type, id } = props;
    const { id } = props;
    return (
        <form>
            <div className="form-group col-10">
                <label htmlFor={`Input${id}`}>
                    Введіть правильну відповідь
                </label>
                <input type="text" className="form-control" id={`Input${id}`} aria-describedby="emailHelp"
                       placeholder="Enter email"/>
            </div>
        </form>
    )

};

export default AnswerTextInput;