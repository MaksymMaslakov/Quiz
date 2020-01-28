import React, { Fragment, useState } from "react";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import Header from "../../components/header";
import QuestionList from "../../components/question-list";
import { ModalWindow } from "../../components/modal-window";

import { invertIsFinished } from '../../redux/actions';
import { finishQuiz } from '../../utilits'

const Home = (props) => {
    const { invertIsFinished, score, questionList, userAnswers, history } = props;

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
                <Button variant="primary" onClick={() => {
                    if(Object.keys(questionList).length === Object.keys(userAnswers).length) {
                        invertIsFinished();
                        history.push('/result');
                        return;
                    }
                    handleShow()}
                }>
                    Закончить тест
                </Button>
                <ModalWindow show={show}
                             invertIsFinished={invertIsFinished}
                             history={history}
                             handleClose={handleClose}/>
            </div>

        </Fragment>
    )
};

const mapStateToProps = ({score, questions: {questionList}, userAnswers}) => {
    return {
        score,
        userAnswers,
        questionList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        invertIsFinished: invertIsFinished(dispatch)
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Home);
