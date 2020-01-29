import React from "react";
import {connect} from "react-redux";

import AnswerTextInput from "./answer-textinput";
import AnswerRadioButton from './answer-radiobutton';
import AnswerCheckboxContainer from "./answer-checkbox";
import AnswerSelect from "./answer-select";
import ErrorIndicator from "../error-indicator";

import { setUserAnswer} from "../../redux/actions";
import {validation} from "../../utilits";

import './answer.css'


const Answer = (props) => {

    const {  questionItem, isFinished,  userAnswers, setUserAnswer } = props;
    const  {type, rightAnswer, id} = questionItem;

    let resultClass = '';
    let isChangeable = false;

    if(isFinished){
        const isValid = validation(userAnswers[id], rightAnswer, () => {});
        isValid ? (resultClass = 'is-valid') : (resultClass = 'is-invalid');
        isChangeable = true;
    }

    const propsToChild = {
        questionItem,
        userAnswers,
        resultClass,
        setUserAnswer,
        isChangeable
    };

    let answer;

    switch(type){
        case 'select': answer = <AnswerSelect {...propsToChild}/>; break;
        case 'radio-button': answer = <AnswerRadioButton {...propsToChild}/>; break;
        case 'textinput': answer = <AnswerTextInput {...propsToChild}/>; break;
        case 'checkbox': answer = <AnswerCheckboxContainer {...propsToChild} rightAnswer={rightAnswer}/>; break;
        default: answer = (
            <div>
                <h3>Something wring with question type</h3>
                <ErrorIndicator/>
            </div>);
    }

    return (
        <div className={`Box-body `}>
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
        setUserAnswer: setUserAnswer(dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Answer);







