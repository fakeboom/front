import { combineReducers } from 'redux';

import user from './user';
import getmymarbles from './getmymarbles';
import detail from './detail';


export default combineReducers({
  user,
    getmymarbles,
    detail,
});
