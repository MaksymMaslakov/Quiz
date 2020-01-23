const updateIsFinished = (state, action) => {
    if(state === undefined)
        return false;

    switch (action.type) {
        case 'INVERT_IS_FINISHED': return !state.isFinished;
        default: return state.isFinished;
    }
};

export default updateIsFinished;