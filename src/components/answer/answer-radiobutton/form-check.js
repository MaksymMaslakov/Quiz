import React from "react";

const FormCheck = ({option, id, setUserAnswer, isChangeable, resultClass, checked = false}) => {
    return (
                <li className={`form-check d-flex align-items-center `}>
                    <input type="radio"
                           disabled={isChangeable}
                           name={`radio-${id}`}
                           className={`form-check-input ${checked && resultClass}`}
                           id={`Check-${id}-${option.id}`}
                           checked={checked}
                           value={option.id}
                           onChange={(e) => setUserAnswer(id, Number(e.target.value))}/>
                    <label className="form-check-label border-bottom"
                           htmlFor={`Check-${id}-${option.id}`}>
                        {option.text}
                    </label>
                </li>
            )
};

export default FormCheck;