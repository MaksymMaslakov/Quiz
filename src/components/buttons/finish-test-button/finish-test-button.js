import React from 'react'
import { Button } from "react-bootstrap";
import { compose } from "redux";
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import { incrementScore, invertIsFinished } from "../../../redux/actions";
import { computeScore } from "../../../utilits";


const FinishTestButton = (props) => {
    const { userAnswers, questionList, invertIsFinished, incrementScore, handleShow, history } = props;

    const isAllAnswered = Object.keys(questionList).length === Object.keys(userAnswers).length;

    return (
        <Button variant="primary"
                className={`btn`}
                onClick={() => {
                    if(isAllAnswered){
                        computeScore(userAnswers, questionList, incrementScore);
                        invertIsFinished();
                        history.push('/result')
                    }else handleShow()}}>
            Закончить тест
        </Button>
    )
};

const mapStateToProps = ({ questions, userAnswers}) => {
    const { questionList } = questions;

    return {
        userAnswers,
        questionList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        invertIsFinished: invertIsFinished(dispatch),
        incrementScore: incrementScore(dispatch)
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(FinishTestButton)