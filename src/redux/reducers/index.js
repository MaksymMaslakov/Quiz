import updateScore from './score';
import updateIsFinished from './is-finished';
import updateQuestionList from './question-list';
import updateUserAnswers from './user-answers';

const reducer = (state, action) => {

    return {
        score: updateScore(state, action),
        isFinished: updateIsFinished(state, action),
        questions: updateQuestionList(state, action),
        userAnswers: updateUserAnswers(state,action)
    }
};

export default reducer;