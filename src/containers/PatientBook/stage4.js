import React from 'react';
import axios from 'axios';
import Radium from 'radium';
import {connect} from 'react-redux';
// import {Flex, Box} from '@rebass/grid';

class PatientBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {doctor: {}};
    axios.get('/api/patient/register_info', {headers: {authorization: `JWT ${this.props.user.token}`}}).then(result => {
      this.setState({doctor: result.data});
    }).catch(error => {
    });
  }

  render() {
    return (
      <div>
        您已经完成所有检查。

        请到本医院的{this.state.doctor.address}，寻找{this.state.doctor.name}，做出妊娠风险判断。

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
};


export default connect(mapStateToProps)(Radium(PatientBook));
