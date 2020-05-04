import { combineReducers } from 'redux';

import user from './user';
import examination from './examination';
import analysis from './analysis';
import patients from './patients';
import doctors from './doctors';
import news from './news';
import currentPatient from './currentPatient';

export default combineReducers({
  user,
  news,

  examination,
  analysis,

  currentPatient,
    patients,
  doctors
});
