import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";

import QuestionBox from "./question-box/question-box";
import Spinner from "../spinner";

import { withErrorBoundary } from "../hoc";

import "./question-list.css"


const QuestionList = (props) => {

    const { questionList = [{}], isLoading, Question, Answer } = props;

    if(isLoading)
        return <Spinner/>;

    return (
        <ul className='Box col-10 offset-1'
            id='question-list'>
            {
                questionList.map( (questionItem, idx) =>
                    <QuestionBox className='Box col-10 offset-2'
                                 questionItem={questionItem}
                                 index={idx+1}
                                 key={idx}
                                 Question={Question}
                                 Answer={Answer}
                    />)
            }
        </ul>
    );
};

const mapStateToProps = ({questions: {questionList, isLoading}}) => {
    return {
        questionList,
        isLoading
    }
};

export default compose(
    withErrorBoundary,
    connect(mapStateToProps)
)(QuestionList);