import React from "react";

import './question-box.css';

const QuestionBox = (props) => {

    const { questionItem, index, Question, Answer} = props;

    return (
        <li>
            <Question index={index} question={questionItem.question}/>
            <Answer questionItem={questionItem}/>
        </li>
    )
};

export default QuestionBox;








