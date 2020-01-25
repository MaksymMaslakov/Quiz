import React from "react";
import {connect} from "react-redux";

import AnswerTextInput from "./answer-textinput";
import AnswerRadioButton from './answer-radiobutton';
import AnswerCheckbox from "./answer-checkbox";
import AnswerSelect from "./answer-select";
import ErrorIndicator from "../error-indicator";

import {incrementScore, setUserAnswer} from "../../redux/actions";

import './answer.css'

const Answer = (props) => {

    const { questionItem: {type} } = props;


    let answer;

    switch(type){
        case 'select': answer = <AnswerSelect {...props}/>; break;
        case 'radio-button': answer = <AnswerRadioButton {...props}/>; break;
        case 'textinput': answer = <AnswerTextInput {...props}/>; break;
        case 'checkbox': answer = <AnswerCheckbox {...props}/>; break;
        default: answer = (
            <div>
                <h3>Something wring with question type</h3>
                <ErrorIndicator/>
            </div>);
    }

    return (
        <div className='Box-body'>
            {
                answer
            }
        </div>
    )
};

const mapStateToProps = ({isFinished , userAnswers}) => {
    return {
        isFinished,
        userAnswers
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        incrementScore: incrementScore(dispatch),
        setUserAnswer: setUserAnswer(dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Answer);







