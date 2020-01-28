const setUserAnswer = (dispatch) => (questionId, userAnswer, restart = false) => {

    dispatch({
        type: 'ANSWERS_SUBMIT',
        payload: {
            questionId,
            userAnswer,
            restart
        }
    })
};

export {
    setUserAnswer
}