import React from "react";

const FormCheck = (option, id, idx) => {
    return (
                <div className="form-check col-5">
                    <input type="checkbox" className="form-check-input" id={`Check-${id}-${idx}`}/>
                    <label className="form-check-label" htmlFor={`Check-${id}-${idx}`}>{option}</label>
                </div>
            )
};

export default FormCheck;