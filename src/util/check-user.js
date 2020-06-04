import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

function CheckUser(Component, role=null, change=true) {
  class _CheckUser extends React.Component {
      render() {
      if (role === null && this.props.role === null) {
        return <Component/>;
      } else if (role === 'city' && this.props.role === 'city') {
        return <Component/>;
      } else if (role === 'institution' && this.props.role === 'institution') {
        return <Component/>;
      } else if (role === 'expert' && this.props.role === 'expert' ) {
        return <Component/>;
      } else if (role === 'admin' && this.props.role === 'admin') {
          return <Component />;
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
