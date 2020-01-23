import updateScore from './score';
import updateIsFinished from './is-finished';
import updateQuestionList from './question-list';

const reducer = (state, action) => {
    return {
        score: updateScore(state, action),
        isFinished: updateIsFinished(state, action),
        questionList: updateQuestionList(state, action)
    }
};

export default reducer;