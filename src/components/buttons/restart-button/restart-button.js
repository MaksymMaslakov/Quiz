import React from 'react'
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from 'react-redux';

import { setScore,fetchQuestionList,setUserAnswer,invertIsFinished} from "../../../redux/actions";
import {restart} from "../../../utilits";
import {withQuestionsService} from "../../hoc";


const RestartButton = (props) => {

    const { setScore, fetchQuestionList, setUserAnswer, invertIsFinished } = props;
    return (
        <Link to={'/'}
              className={`btn btn-success`}
              onClick={() => restart(setScore, fetchQuestionList, setUserAnswer, invertIsFinished)}>
            Пройти еще раз
        </Link>
    )
};

const mapDispatchToProps = (dispatch, { questionsService }) =>{
    return {
        setScore: setScore(dispatch),
        fetchQuestionList: fetchQuestionList(dispatch, questionsService),
        setUserAnswer: setUserAnswer(dispatch),
        invertIsFinished: invertIsFinished(dispatch)
    }
};

export default compose(
    withQuestionsService(),
    connect(null, mapDispatchToProps)
)(RestartButton)