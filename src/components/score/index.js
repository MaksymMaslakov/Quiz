import React from 'react';
import { connect } from "react-redux";

import "./score.css";

const Score = (props) => {
    const { score, questionList } = props;

    let maxScore = 0;

    questionList.map( (item) => {
        if(typeof item.rightAnswer === 'object'){
            maxScore += 3;
            return;
        }
        maxScore++;
    });

    let scoreColor = '';
    if(score/maxScore <= 0.3 ) scoreColor = 'badge-danger';
    if(score/maxScore > 0.3 && score/maxScore < 0.7 ) scoreColor = 'badge-warning';
    if(score/maxScore >= 0.7 ) scoreColor = 'badge-success';

    return (
        <h2 id="score" className=""><span className={`${scoreColor}`}>Результат: {score}/{maxScore}</span></h2>
    )
};

const mapStateToProps = ({score, questions: { questionList }}) => {
  return { score, questionList }
};

export default connect(mapStateToProps)(Score);

