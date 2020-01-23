const setScore = (dispatch) => (score) => {
    dispatch( {
        type: 'SET_SCORE',
        payload: score
    })
};

const incrementScore = (dispatch) => () => {
    dispatch( {
        type: 'INCREMENT_SCORE'
    })
};

const decrementScore = (dispatch) => () => {
    dispatch( {
        type: 'DECREMENT_SCORE'
    })
};


export {
    setScore,
    incrementScore,
    decrementScore
};