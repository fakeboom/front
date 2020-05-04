import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

function GetExamination(Component) {
  class _GetExamination extends React.Component {
    componentWillMount() {
      axios.get('/api/patient/condition/', {headers: {authorization: `JWT ${this.props.token}`}}).then(result => {
        this.props.getExamination(result.data);
      }).catch(error => {
      });
    }
    render() {
      return <Component/>;
    }
  }
  _GetExamination.displayName = 'GetExamination';

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
  return connect(mapStateToProps, mapDispatchToProps)(_GetExamination);
}

export default GetExamination;
