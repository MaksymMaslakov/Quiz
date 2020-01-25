const updateIsFinished = (state, action) => {
    if(state === undefined)
        return false;

    if (action.type === 'INVERT_IS_FINISHED'){
        console.log(!state.isFinished);
        return !state.isFinished;
    }


    return state.isFinished;

};

export default updateIsFinished;