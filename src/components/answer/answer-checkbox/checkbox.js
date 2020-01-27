import React from "react";
import { connect } from 'react-redux'

const Checkbox = ({option, onChange, checked, rightAnswer, isFinished, isChangeable}) => {

    const resultClass = checked &&
                        isFinished &&
                        (rightAnswer.find( id => id === Number(option.id))
                            ? 'is-valid'
                            : 'is-invalid');
    return (
                <li className="form-check d-flex align-items-center ">
                    <label className={`form-check-label border-bottom ${resultClass}`}>
                        <input type="checkbox"
                               className={`form-check-input `}
                               name={option.id}
                               onChange={onChange}
                               checked={checked}
                               disabled={isChangeable}/>
                        {option.text}
                    </label>
                </li>
            )
};

const mapStateToProps = ({isFinished}) => {
  return {
      isFinished
  }
};

export default connect(mapStateToProps)(Checkbox);