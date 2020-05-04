const patients = (state = {stage: 1, 1: [], 2: [], 3: [], 4: [], 5: [], 6: []}, action) => {
  switch (action.type) {
    case 'PATIENTS-GET-1':
      return {...state, 1: action.patients};
    case 'PATIENTS-GET-2':
      return {...state, 2: action.patients};
    case 'PATIENTS-GET-3':
      return {...state, 3: action.patients};
    case 'PATIENTS-GET-4':
      return {...state, 4: action.patients};
    case 'PATIENTS-GET-5':
      return {...state, 5: action.patients};
    case 'PATIENTS-GET-6':
      return {...state, 6: action.patients};
    case 'PATIENTS-STAGE':
      return {...state, stage: action.stage};
    default:
      return state;
  }
};

export default patients;
