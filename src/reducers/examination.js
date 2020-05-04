const examination = (state = {}, action) => {
  switch (action.type) {
    case 'GET-EXAMINATION':
      return action.examination;
    case 'EXAMINATION-ADVICE':
      if (action.kind === 1 && action.sex === 1) {
        return {...state, general_care_h: action.advice};
      } else if (action.kind === 1 && action.sex === 0) {
        return {...state, general_care_w: action.advice};
      }  else if (action.kind === 2 && action.sex === 1) {
        return {...state, physical_care_h: action.advice};
      } else if (action.kind === 2 && action.sex === 0) {
        return {...state, physical_care_w: action.advice};
      } else if (action.kind === 3 && action.sex === 1) {
        return {...state, clinical_care_h: action.advice};
      } else if (action.kind === 3 && action.sex === 0) {
        return {...state, clinical_care_w: action.advice};
      } else if (action.kind === 4 && action.sex === 1) {
        return {...state, analysis_care_h: action.advice};
      } else if (action.kind === 4 && action.sex === 0) {
        return {...state, analysis_care_w: action.advice};
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default examination;
