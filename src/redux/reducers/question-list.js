import { COUNT_QUESTIONS } from "../../constants/config";

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



        case 'FETCH_QUESTIONS_LIST_SUCCESS':{

            const beginSlice = Math.round(Math.random()*(action.payload.length - COUNT_QUESTIONS));
            const endSlice = beginSlice + COUNT_QUESTIONS;
            console.log('beginSlice', beginSlice, "\nendSlice", endSlice);
            return {
                questionList: action.payload.slice(beginSlice,endSlice),
                isLoading: false,
                error: null
            };
        }
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