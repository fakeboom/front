import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

function CheckUser(Component, role=null, change=true) {
  class _CheckUser extends React.Component {
    render() {
      if (role === null && this.props.role === null) {
        return <Component/>;
      } else if (role === 'user' && this.props.role !== null) {
        return <Component/>;
      } else if (role === 'doctor' && this.props.role === 'doctor') {
        return <Component/>;
      } else if (role === 'examiner' && this.props.role === 'examiner') {
        return <Component/>;
      } else if (role === 'patient' && (this.props.role === 'female' || this.props.role === 'male')) {
        return <Component/>;
      } else if (change) {
        return <Redirect to={'/'}/>;
      } else {
        return null;
      }
    }
  }
  _CheckUser.displayName = 'CheckUser';

  const mapStateToProps = state => {
    return state.user;
  };
  return connect(mapStateToProps)(_CheckUser);
}

export default CheckUser;
