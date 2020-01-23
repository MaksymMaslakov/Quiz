import React from "react";

import FormCheck from "./form-check";

import './answer-radiobutton.css';

const AnswerRadioButton = (props) => {

    const { options, score, rightAnswer, type, id } = props;

    return (
        <form>
            <div className="form-group col-10">
                {/*<label htmlFor={`Input${id}`}>*/}
                {/*    Оберіть одну правильну відповідь*/}
                {/*</label>*/}
                {
                    options.map( (option, idx) =>
                        <FormCheck option={option}/>)
                }
            </div>
        </form>
    )

};

export default AnswerRadioButton;