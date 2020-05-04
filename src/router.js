import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './containers/Home';
import UserNews from './containers/UserNews';
import PatientHome from './containers/PatientHome';
import PatientBook from './containers/PatientBook';
import PatientGeneral from './containers/PatientGeneral';
import PatientPhysical from './containers/PatientPhysical';
import PatientClinical from './containers/PatientClinical';
import PatientAnalysis from './containers/PatientAnalysis';
import DoctorHome from './containers/DoctorHome';
import DoctorPatientHome from './containers/DoctorPatientHome';
import DoctorPatientGeneral from './containers/DoctorPatientGeneral';
import DoctorPatientPhysical from './containers/DoctorPatientPhysical';
import DoctorPatientClinical from './containers/DoctorPatientClinical';
import DoctorPatientAnalysis from './containers/DoctorPatientAnalysis';
import ExaminerHome from './containers/ExaminerHome';
import ExaminerPatientHome from './containers/ExaminerPatientHome';
import ExaminerPatientGeneral from './containers/ExaminerPatientGeneral';
import ExaminerPatientPhysical from './containers/ExaminerPatientPhysical';
import ExaminerPatientClinical from './containers/ExaminerPatientClinical';
import ExaminerPatientAnalysis from './containers/ExaminerPatientAnalysis';

import Ws from './websocket';
import CheckUser from './util/check-user';

class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <PersistGate loading={null} persistor={this.props.persistor}>
          <Router>
            <Ws/>
            <Route path="/" exact={true} component={CheckUser(Home, null, false)}/>

            <Route path="/news" exact={true} component={CheckUser(UserNews, 'user')}/>

            <Route path="/" exact={true} component={CheckUser(PatientHome, 'patient', false)}/>
            <Route path="/book" exact={true} component={CheckUser(PatientBook, 'patient')}/>
            <Route path="/general" exact={true} component={CheckUser(PatientGeneral, 'patient')}/>
            <Route path="/physical" exact={true} component={CheckUser(PatientPhysical, 'patient')}/>
            <Route path="/clinical" exact={true} component={CheckUser(PatientClinical, 'patient')}/>
            <Route path="/analysis" exact={true} component={CheckUser(PatientAnalysis, 'patient')}/>

            <Route path="/" exact={true} component={CheckUser(DoctorHome, 'doctor', false)}/>
            <Route path="/id:id" exact={true} component={CheckUser(DoctorPatientHome, 'doctor')}/>
            <Route path="/id:id/general" exact={true} component={CheckUser(DoctorPatientGeneral, 'doctor')}/>
            <Route path="/id:id/physical" exact={true} component={CheckUser(DoctorPatientPhysical, 'doctor')}/>
            <Route path="/id:id/clinical" exact={true} component={CheckUser(DoctorPatientClinical, 'doctor')}/>
            <Route path="/id:id/analysis" exact={true} component={CheckUser(DoctorPatientAnalysis, 'doctor')}/>

            <Route path="/" exact={true} component={CheckUser(ExaminerHome, 'examiner', false)}/>
            <Route path="/ex:id" exact={true} component={CheckUser(ExaminerPatientHome, 'examiner')}/>
            <Route path="/ex:id/general" exact={true} component={CheckUser(ExaminerPatientGeneral, 'examiner')}/>
            <Route path="/ex:id/physical" exact={true} component={CheckUser(ExaminerPatientPhysical, 'examiner')}/>
            <Route path="/ex:id/clinical" exact={true} component={CheckUser(ExaminerPatientClinical, 'examiner')}/>
            <Route path="/ex:id/analysis" exact={true} component={CheckUser(ExaminerPatientAnalysis, 'examiner')}/>

          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default Root;
