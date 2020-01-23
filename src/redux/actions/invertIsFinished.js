const invertIsFinished = (dispatch) => () => {
    dispatch( {
        type: 'DECREMENT_SCORE'
    })
};
export default invertIsFinished