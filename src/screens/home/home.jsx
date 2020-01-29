import React, { Fragment, useState } from "react";
import { compose } from "redux";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import Header from "../../components/header";
import QuestionList from "../../components/question-list";
import Question from "../../components/question";
import Answer from "../../components/answer/answer";
import { ModalWindow } from "../../components/modal-window";
import { RestartButton, FinishTestButton } from "../../components/buttons";

import { withQuestionsService } from '../../components/hoc';


const Home = (props) => {
    const { isFinished, history } = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Fragment>
            <Header/>
            <QuestionList Question={Question} Answer={Answer}/>
            <div className='row justify-content-center'>
                {
                    !isFinished
                        ?<FinishTestButton handleShow={handleShow}/>
                        :<Fragment>
                            <Link to='/result' className={`btn btn-primary`}>
                                К результатам
                            </Link>
                            <RestartButton/>
                         </Fragment>
                }
                <ModalWindow show={show}
                             history={history}
                             handleClose={handleClose}/>
            </div>
        </Fragment>
    )
};

const mapStateToProps = ({ isFinished }) => {
    return { isFinished }
};

export default compose(
    withQuestionsService(),
    connect(mapStateToProps)
)(Home);
