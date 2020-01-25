import React from 'react';
import { connect } from 'react-redux';

import QuestionBox from "./question-box/question-box";
import Spinner from "../../../components/spinner";

import "./question-list.css"


const QuestionList = (props) => {

    const { questionList, isLoading } = props;

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
                                 key={idx}/>)
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

export default connect(mapStateToProps)(QuestionList);