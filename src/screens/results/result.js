import React, { Fragment } from "react";
import { connect } from 'react-redux'
import { compose } from "redux";
import { Link } from "react-router-dom";


import Header from "../../components/header";
import QuestionBox from "../../components/question-list/question-box";
import Question from "../../components/question";
import RightAnswer from '../../components/right-answer'

import {withQuestionsService} from "../../components/hoc";
import { setScore, fetchQuestionList, setUserAnswer, invertIsFinished } from '../../redux/actions'


const Results = (props) => {

    const {score, questionList, setScore, fetchQuestionList, setUserAnswer, invertIsFinished} = props;

    return(
      <Fragment>
          <Header/>
          <h1 className='text-center'>Score: {score}</h1>
          <ul className='Box col-10 offset-1'
              id='question-list'>
              {
                  questionList.map( (questionItem, idx) =>
                      <QuestionBox className='Box col-10 offset-2'
                                   questionItem={questionItem}
                                   index={idx+1}
                                   key={idx}
                                   Question={Question}
                                   Answer={RightAnswer}
                      />)
              }
          </ul>
          <div className={`row justify-content-center`}>
              <Link to={'/'}
                    className={`btn btn-primary`}>
                  Посмотреть свои ответы
              </Link>
              <Link to={'/'}
                    className={`btn btn-primary`}
                    onClick={() => {
                        setScore(0);
                        fetchQuestionList();
                        setUserAnswer(null,null,"restart");
                        invertIsFinished();
                    }}>
                  Пройти еще раз
              </Link>
          </div>


      </Fragment>
    );
};

const mapStateToProps = ({score, questions: {questionList}}) =>{
    return {
        score,
        questionList
    }
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
    connect(mapStateToProps, mapDispatchToProps)
)(Results);