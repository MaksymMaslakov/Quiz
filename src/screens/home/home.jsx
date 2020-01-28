import React, { Fragment, useState } from "react";
import { compose } from "redux";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import Header from "../../components/header";
import QuestionList from "../../components/question-list";
import { ModalWindow } from "../../components/modal-window";

import { withQuestionsService } from '../../components/hoc'
import {fetchQuestionList, invertIsFinished, setScore, setUserAnswer} from '../../redux/actions';


const Home = (props) => {
    const {
        invertIsFinished, isFinished,
        setScore, score,
        questionList, fetchQuestionList,
        userAnswers, setUserAnswer,
        history } = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(userAnswers);
    return(
        <Fragment>
            <Header/>
            <h1 className='text-center'>Score: {score}</h1>
            <QuestionList/>
            <div className='row justify-content-center'>
                <Button variant="primary"
                        className={`btn`}
                        onClick={() => {
                            if(Object.keys(questionList).length === Object.keys(userAnswers).length) {
                                invertIsFinished();
                                history.push('/result');
                                return;
                            }
                        handleShow()}}>
                    Закончить тест
                </Button>
                {isFinished &&
                <Fragment>
                        <Button variant="primary"
                                className={`btn`}
                                onClick={ ()=> {
                                    history.push('/result');
                                }}>
                         К результатам
                        </Button>
                        <Button variant="primary"
                                className={`btn`}
                                onClick={() => {
                                    window.localStorage.clear();
                                    setScore(0);
                                    fetchQuestionList();
                                    setUserAnswer(null,null,"restart");
                                    invertIsFinished();
                            }}>
                            Пройти еще раз
                    </Button>
                </Fragment>
                }
                <ModalWindow show={show}
                             invertIsFinished={invertIsFinished}
                             history={history}
                             handleClose={handleClose}/>
            </div>

        </Fragment>
    )
};

const mapStateToProps = ({score, questions: {questionList}, userAnswers, isFinished}) => {
    return {
        score,
        isFinished,
        userAnswers,
        questionList
    }
};

const mapDispatchToProps = (dispatch, { questionsService }) => {
    return {
        invertIsFinished: invertIsFinished(dispatch),
        setScore: setScore(dispatch),
        fetchQuestionList: fetchQuestionList(dispatch, questionsService),
        setUserAnswer: setUserAnswer(dispatch)
    }
};


export default compose(
    withQuestionsService(),
    connect(mapStateToProps,mapDispatchToProps)
)(Home);
