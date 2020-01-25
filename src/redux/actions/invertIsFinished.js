const invertIsFinished = (dispatch) => () => {


    dispatch( {
        type: 'INVERT_IS_FINISHED'
    })
};
export default invertIsFinished;