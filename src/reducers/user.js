const user = (state = {token: null, role: null}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    case 'LOGOUT':
      return { token: null, role: null };
    default:
      return state;
  }
};

export default user;
