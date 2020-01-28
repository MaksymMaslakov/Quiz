import React, { Fragment, useState } from "react";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Header from "../../components/header";
import QuestionList from "../../components/question-list";
import { ModalWindow } from "../../components/modal-window";

import { invertIsFinished } from '../../redux/actions';


const Home = (props) => {
    const { invertIsFinished, score,isFinished, questionList, userAnswers, history } = props;

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
                    handleShow()}
                }>
                    Закончить тест
                </Button>
                {isFinished && <Button variant="primary"
                                       className={`btn`}
                                       onClick={ ()=> history.push('/result')}>
                    К результатам</Button>}
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

const mapDispatchToProps = (dispatch) => {
    return {
        invertIsFinished: invertIsFinished(dispatch)
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Home);
