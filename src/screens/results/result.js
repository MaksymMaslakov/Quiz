import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Question from "../../components/question";
import RightAnswer from '../../components/answer/right-answer'
import RestartButton from "../../components/buttons/restart-button/restart-button";
import Score from "../../components/score";

import QuestionList from "../../components/question-list/question-list";


const Results = () => {

    return(
      <Fragment>
          <Header/>
          <Score/>
          <QuestionList Question={Question} Answer={RightAnswer} />
          <div className={`row justify-content-center`}>
              <Link to={'/'} className={`btn btn-primary`}>
                  Посмотреть свои ответы
              </Link>
              <RestartButton/>
          </div>
      </Fragment>
    );
};

export default Results;