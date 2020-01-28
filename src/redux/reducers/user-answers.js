const updateUserAnswers = (state,action) =>{
    if (state === undefined) {
        return {}
    }

    if(action.type === 'ANSWERS_SUBMIT')
        return action.payload.restart ? {} : {
            ...state.userAnswers,
            [action.payload.questionId]: action.payload.userAnswer
        };

    return state.userAnswers
};

export default updateUserAnswers;

