import React from "react";

import Question from "../../../../components/question";
import Answer from "../../../../components/answer";


import './question-box.css';

const QuestionBox = (props) => {

    const { index } = props;

    return (
        <li className=''
            >
            <Question index={index}/>
            <Answer/>
        </li>
    )
};

export default QuestionBox;








