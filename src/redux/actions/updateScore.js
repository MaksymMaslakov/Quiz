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



export {
    setScore,
    incrementScore
};