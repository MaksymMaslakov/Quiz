const updateScore = (state, action) => {
    if(state === undefined)
        return 0;

    switch (action.type) {
        case 'INCREMENT_SCORE': return state.score+1;
        case 'DECREMENT_SCORE' :
            if((state.score-1) < 0)
                return 0;
            else
                return state.score-1;
        case 'SET_SCORE': return action.payload;
        default: return state.score;
    }
};

export default updateScore;