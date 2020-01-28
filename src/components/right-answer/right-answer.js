import React from "react";

const RightAnswer = (props) => {
    const { rightAnswer } = props.questionItem;

    let answer;

    switch(typeof rightAnswer){
        case 'object':
            answer = (
                <ul>
                    {
                        rightAnswer.map( (item) => {
                            return (
                                <li key={item}>
                                     - {props.questionItem.options.find( (option) => option.id === item).text}
                                </li>
                            )})
                    }
                </ul>); break;
        case 'number': answer = <div className={``}>{props.questionItem.options.find( (option) => option.id === rightAnswer).text}</div>; break;
        default: answer = <div className={`align-center`}>{rightAnswer}</div>
    }


    return (
        <div className={`Box-body`}>{answer}</div>
    )
};

export default RightAnswer