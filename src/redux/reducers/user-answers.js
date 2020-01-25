const updateUserAnswers = (state,action) =>{
    if (state === undefined) {
        return {}
    }

    if(action.type === 'ANSWERS_SUBMIT' )
        return {
            ...state.userAnswers,
            [action.payload.questionId]: action.payload.userAnswer
        };

    return state.userAnswers
};

export default updateUserAnswers;

