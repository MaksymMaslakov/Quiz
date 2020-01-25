const questionsRequested = () =>{
    return {
        type: 'FETCH_QUESTIONS_LIST_REQUEST'
    }
};

const questionsLoaded = (questionList) => {
    return {
        type: 'FETCH_QUESTIONS_LIST_SUCCESS',
        payload: questionList
    }
};

const questionsError = (error) => {
    return {
        type: 'FETCH_QUESTIONS_LIST_SUCCESS',
        payload: error
    }
};

const fetchQuestionList = (dispatch, questionsService) => {
    dispatch(questionsRequested());
    questionsService.getAllQuestions()
        .then( (questions) => dispatch(questionsLoaded(questions)))
        .catch( (error) => dispatch(questionsError(error)));
};

export default fetchQuestionList;