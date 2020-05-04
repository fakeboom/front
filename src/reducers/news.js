const news = (state = [], action) => {
  switch (action.type) {
    case 'NEWS-GET':
      return action.news;
    case 'NEWS-ADD':
      return [action.news, ...state];
    case 'NEWS-READ':
      const new_state = [...state];
      for (let i = 0; i < new_state.length; i++) {
        new_state[i].state = true;
      }
      return new_state;
    default:
      return state;
  }
};

export default news;
