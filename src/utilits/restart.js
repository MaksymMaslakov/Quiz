const restart = (setScore, fetchQuestionList, setUserAnswer, invertIsFinished) => {
    window.localStorage.clear();
    setScore(0);
    fetchQuestionList();
    setUserAnswer(null,null,"restart");
    invertIsFinished();
};

export default restart;