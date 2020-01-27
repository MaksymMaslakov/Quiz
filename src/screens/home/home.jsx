import React, { Fragment } from "react";
import { connect } from 'react-redux';

import Header from "../../components/header";
import QuestionList from "./question-list";

import { invertIsFinished } from '../../redux/actions';

const Home = (props) => {

    const { invertIsFinished, score } = props;

    return(
        <Fragment>
            <h1>Score: {score}</h1>
            <Header/>
            <QuestionList/>
            <div className='row justify-content-center'>
                <button className='btn btn-lg orange bg-dark'
                        onClick={ invertIsFinished }>Submit</button>
            </div>
        </Fragment>
    )
};

const mapStateToProps = ({score}) => {
    return {score}
};

const mapDispatchToProps = (dispatch) => {
    return {
        invertIsFinished: invertIsFinished(dispatch)
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Home);
