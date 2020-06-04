const detail = (state = {}, action) => {
    switch (action.type) {
        case 'DETAIL':
            return { ...action.data };
        default:
            return state;
    }
};

export default detail;