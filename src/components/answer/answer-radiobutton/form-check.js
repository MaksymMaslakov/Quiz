import React from "react";

const FormCheck = ({option, id, idx}) => {
    return (
                <li className="form-check">
                    <input type="checkbox" className="form-check-input" id={`Check-${id}-${idx}`}/>
                    <label className="form-check-label" htmlFor={`Check-${id}-${idx}`}>{option}</label>
                </li>
            )
};

export default FormCheck;