const updateQuestionList = (state, action) => {

    if (state === undefined) {
        return {
            questionList: [],
            isLoading: true,
            error: null
        }
    }

    switch(action.type){
        case 'FETCH_QUESTIONS_LIST_REQUEST':
            return {
                questionList: [],
                isLoading: true,
                error: null
            };

        case 'FETCH_QUESTIONS_LIST_SUCCESS':
            return {
                questionList: action.payload,
                isLoading: false,
                error: null
            };

        case 'FETCH_QUESTIONS_LIST_FAILURE':
            return {
                questionList: [],
                isLoading: false,
                error: action.payload
            };

        default: return state.questions;
    }
};

export default updateQuestionList;