import React from "react";

const FormCheck = ({option, id, idx}) => {
    return (
                <li className="form-check d-flex align-items-center">
                    <input type="checkbox"
                           name={`radio-${idx}`}
                           className="form-check-input"
                           id={`Check-${id}-${idx}`}/>

                    <label className="form-check-label"
                           htmlFor={`Check-${id}-${idx}`}>
                        {option}
                    </label>
                </li>
            )
};

export default FormCheck;