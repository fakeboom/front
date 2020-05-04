import React from 'react';
import { connect } from 'react-redux';

const HeaderDoctor = (props) => {
  return (
    <div>
      <span style={{color: 'white'}}>
        医师编号 {props.identity} 姓名 {props.name}
      </span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    name: state.user.name,
    identity: state.user.identity
  };
};

export default connect(mapStateToProps)(HeaderDoctor);
