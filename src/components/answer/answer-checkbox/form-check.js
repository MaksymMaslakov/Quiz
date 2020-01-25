import React from "react";

const FormCheck = ({option, id}) => {
    return (
                <li className="form-check d-flex align-items-center ">
                    <input type="checkbox"
                           name={`radio-${option.id}`}
                           className="form-check-input"
                           id={`Check-${id}-${option.id}`}
                           value={option.id}/>

                    <label className="form-check-label border-bottom"
                           htmlFor={`Check-${id}-${option.id}`}>
                        {option.text}
                    </label>
                </li>
            )
};

export default FormCheck;