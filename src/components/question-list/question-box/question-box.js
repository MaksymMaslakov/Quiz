import React from "react";

import Question from "../../question";
import Answer from "../../answer";

import './question-box.css';

const QuestionBox = (props) => {

    const { questionItem, index } = props;

    return (
        <li>
            <Question index={index} question={questionItem.question}/>
            <Answer questionItem={questionItem}/>
        </li>
    )
};

export default QuestionBox;








