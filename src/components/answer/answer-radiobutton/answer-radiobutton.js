import React from "react";
import { connect } from "react-redux";

import FormCheck from "./form-check";

import './answer-radiobutton.css';

const AnswerRadioButton = (props) => {

    const { options, id } = props.questionItem;



    return (
        <form className="form-group col-10 offset-1">
                <label htmlFor={`container-${id}`}>
                    Оберіть одну правильну відповідь
                </label>
                <div id={`container-${id}`}>
                    {
                        options.map( (option) =>
                            <FormCheck option={option}
                                       id={id}
                                       key={`${id}-${option.id}`}/>)
                    }
                </div>
        </form>
    )

};

export default connect()(AnswerRadioButton);