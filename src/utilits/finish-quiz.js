import React from "react";

const finishQuiz = (questionsCount, answersCounts, invertIsFinished = () => {}, history) => () => {
    if(questionsCount === answersCounts) {
        history.push('/result');
        return false
    }
    else {
        invertIsFinished();
        history.push('/result');
    }
};

export { finishQuiz };