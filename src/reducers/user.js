const user = (state = { token: null, role: null }, action) => {
  switch (action.type) {
      case 'LOGIN_CITY':
          return { ...action.user, role: 'city' };
      case 'LOGIN_INS':
          return { ...action.user, role: 'institution' };
      case 'LOGIN_EXPERT':
          return { ...action.user, role: 'expert' };
      case 'LOGIN_ADMIN':
          return { ...action.user, role: 'admin' };
    case 'LOGOUT':
      return { token: null, role: null };
    default:
      return state;
  }
};

export default user;
