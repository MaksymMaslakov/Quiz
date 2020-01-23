const updateQuestionList = (state, action) => {

    if (state === undefined) {
        return {
            questions: [],
            loading: true,
            error: null
        }
    }

    switch(action.type){
        case 'FETCH_QUESTIONS_LIST_REQUEST':
            return {
                questions: [],
                loading: true,
                error: null
            };

        case 'FETCH_QUESTIONS_LIST_SUCCESS':
            return {
                questions: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_QUESTIONS_LIST_FAILURE':
            return {
                questions: [],
                loading: false,
                error: action.payload
            };

        default: return state.questionList;
    }
};

export default updateQuestionList;