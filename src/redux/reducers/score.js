const updateScore = (state, action) => {
    if(state === undefined)
        return 0;

    switch (action.type) {
        case 'INCREMENT_SCORE': { console.log(state.score + 1);return (state.score + 1)};
        case 'DECREMENT_SCORE' : return ((state.score-1) < 0) ? 0 : (state.score-1);
        case 'SET_SCORE': return (action.payload > 0) ? action.payload : 0;
        default: return state.score;
    }
};

export default updateScore;