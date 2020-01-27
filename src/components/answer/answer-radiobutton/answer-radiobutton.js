import React from "react";
import { connect } from "react-redux";

import FormCheck from "./form-check";

import './answer-radiobutton.css';

const AnswerRadioButton = (props) => {

    const { questionItem, setUserAnswer, userAnswers, isChangeable } = props;
    const { options, id } = questionItem;

    console.log(userAnswers[id]);
    return (
        <form className="form-group col-10 offset-1">
                <label htmlFor={`container-${id}`}>
                    Оберіть одну правильну відповідь
                </label>
                <ul id={`container-${id}`}>
                    {
                        options.map( (option) =>
                            <FormCheck option={option}
                                       id={id}
                                       isChangeable={isChangeable}
                                       setUserAnswer={setUserAnswer}
                                       key={`${id}-${option.id}`}/>)
                    }
                </ul>
        </form>
    )

};

export default connect()(AnswerRadioButton);