const setUserAnswer = (dispatch) => (questionId, userAnswer) => {

    dispatch({
        type: 'ANSWERS_SUBMIT',
        payload: {
            questionId,
            userAnswer
        }
    })
};

export {
    setUserAnswer
}