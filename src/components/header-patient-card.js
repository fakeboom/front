import React from 'react';
import { connect } from 'react-redux';

const HeaderPatientCard = (props) => {
  return (
    <div>
      姓名：{props.name}
      年龄：{props.age}
      {props.identity}
      patient
    </div>
  );
};

const mapStateToProps = state => {
  return {
    name: state.user.name,
    age: state.user.age,
    identity: state.user.identity
  };
};

export default connect(mapStateToProps)(HeaderPatientCard);
