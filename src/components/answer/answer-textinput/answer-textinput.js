import React from "react";

import './answer-textinput.css';


const AnswerTextInput = (props) => {
    const {  questionItem,  setUserAnswer, userAnswers, resultClass, isChangeable } = props;
    const { id } = questionItem;

    return (
        <form>
            <div className="form-group col-10 offset-1">
                <label htmlFor={`input-${id}`}></label>
                <input
                       id={`input-${id}`}
                       className={`form-control ${resultClass}`}
                       value={userAnswers[id] || ''}
                       onChange={(e) => setUserAnswer(id, e.target.value)}
                       placeholder="Введіть правильну відповідь"
                       disabled={isChangeable}/>
            </div>
        </form>
    )

};



export default AnswerTextInput;