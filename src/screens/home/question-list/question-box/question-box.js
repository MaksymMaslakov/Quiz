import React from "react";

import Question from "../../../../components/question";
import Answer from "../../../../components/answer";

import './question-box.css';

const QuestionBox = (props) => {
    const { questionItem, index } = props;
    return (
        <li>
            <Question index={index} question={questionItem.question}/>
            <Answer question={questionItem}/>
        </li>
    )
};

export default QuestionBox;








