import React from 'react';
import axios from 'axios';
import Radium from 'radium';
import {connect} from 'react-redux';
// import {Flex, Box} from '@rebass/grid';

import Button from '../../components/button';

class PatientBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {doctor: {}};
    axios.get('/api/patient/register_info', {headers: {authorization: `JWT ${this.props.user.token}`}}).then(result => {
      this.setState({doctor: result.data});
    }).catch(error => {
    });
  }

  handleCancel() {
    // 发送取消预约的请求
      axios.post('/api/patient/cancel', { headers: { authorization: `JWT ${this.props.user.token}` } }).then(() => {
        alert('已取消预约');
      }).catch(error => {
        alert('操作失败');
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        您已经成功预约，以下是您的预约信息：

        请于{this.state.doctor.date}到本医院的{this.state.doctor.address}，寻找{this.state.doctor.name}，请勿错过，错过则需要重新预约。

        如果想取消预约，请至少于前一天取消。

        <Button content='安排有变?点此取消预约' onClick={this.handleCancel.bind(this)}/>
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
