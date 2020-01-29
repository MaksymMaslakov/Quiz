const updateScore = (state, action) => {
    if(state === undefined)
        return 0;

    if( action.type === 'INCREMENT_SCORE') {
        return (state.score + 1)
    }

    if(action.type === 'SET_SCORE')
        return action.payload;

    return state.score;

};

export default updateScore;