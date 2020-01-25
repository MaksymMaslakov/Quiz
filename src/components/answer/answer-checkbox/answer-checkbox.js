import React from "react";

import FormCheck from "./form-check";

import './answer-checkbox.css';

const AnswerCheckbox = (props) => {

    const { options, id } = props.questionItem;

    return (
        <form className="form-group col-10 offset-1">
                <label htmlFor={`container-${id}`}>
                    Оберіть декілька правильних відповідей
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

export default AnswerCheckbox;