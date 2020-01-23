import React from "react";

import FormCheck from "./form-check";

import './answer-checkbox.css';

const AnswerCheckbox = (props) => {

    const { options, score, rightAnswer, id } = props;

    return (
        <form className="form-group col-10 offset-1">
                <label htmlFor={`container-${id}`}>
                    Оберіть декілька правильних відповідей
                </label>
                <div id={`container-${id}`}>
                    {
                        options.map( (option, idx) =>
                            <FormCheck option={option}
                                       id={id}
                                       idx={idx}
                                       key={`${id}-${idx}`}/>)
                    }
                </div>
        </form>
    )

};

export default AnswerCheckbox;