import React, { Fragment } from "react";
import { connect } from 'react-redux';

import Header from "../../components/header";
import QuestionList from "./question-list";

import { invertIsFinished } from '../../redux/actions';

const Home = (props) => {

    const { invertIsFinished } = props;

    return(
        <Fragment>
            <Header/>
            <QuestionList/>
            <div className='row justify-content-center'>
                <button className='btn btn-lg orange bg-dark'
                        onClick={ invertIsFinished }>Submit</button>
            </div>
        </Fragment>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        invertIsFinished: invertIsFinished(dispatch)
    }
};


export default connect(null,mapDispatchToProps)(Home);
