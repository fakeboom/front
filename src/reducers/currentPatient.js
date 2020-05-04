const currentPatient = (state = {identity: null}, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        identity: null
      };
    default:
      return state;
  }
};

export default currentPatient;
