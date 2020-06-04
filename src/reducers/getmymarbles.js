const getmymarbles = (state = {}, action) => {
    switch (action.type) {
        case 'GET_MINE':
            return {...action.data };
        default:
            return state;
    }
};

export default getmymarbles;