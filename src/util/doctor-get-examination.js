import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

function DoctorGetExamination(Component) {
  class _DoctorGetExamination extends React.Component {
    componentWillMount() {
      const id = window.location.pathname.split('/')[1].substr(2);
      axios.get(`/api/doctor/condition/${id}/`, {headers: {authorization: `JWT ${this.props.token}`}}).then(result => {

          this.props.getExamination(result.data);

      }).catch(error => {

      });
    }
    render() {
      return <Component/>;
    }
  }
  _DoctorGetExamination.displayName = 'DoctorGetExamination';

  const mapStateToProps = state => {
    return {
      token: state.user.token
    }
  };

  const mapDispatchToProps = dispatch => {
    return {
      getExamination: examination => {
        dispatch({
          type: 'GET-EXAMINATION',
          examination
        })
      }
    }
  };
  return connect(mapStateToProps, mapDispatchToProps)(_DoctorGetExamination);
}

export default DoctorGetExamination;
