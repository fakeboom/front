const doctors = (state = {date: 0, 1: [], 2: [], 3: [], 0: []}, action) => {
  switch (action.type) {
    case 'DOCTORS-GET-0':
      return {...state, 0: action.doctors};
    case 'DOCTORS-GET-1':
      return {...state, 1: action.doctors};
    case 'DOCTORS-GET-2':
      return {...state, 2: action.doctors};
    case 'DOCTORS-GET-3':
      return {...state, 3: action.doctors};
    case 'DOCTORS-DATE':
      return {...state, date: action.date};
    default:
      return state;
  }
};

export default doctors;
