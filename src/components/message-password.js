import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Flex, Box} from '@rebass/grid';

import Input from './input';
import Button from './button';
import messageLeft from '../image/message-left.png';
import messageRight from '../image/message-right.png';
import loginPassword from '../image/login-password.png';


class MessagePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {oldPassword: '', password: '', newPassword: ''};
  }
  handlePassword(event) {
      if (this.state.password !== this.state.newPassword) {
          alert('两次密码不一致');
          return;
      }
      let old_password = this.state.oldPassword;
      let new_password = this.state.password;
      let ret = '';
      for (let it in { old_password, new_password }) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent({ old_password, new_password }[it]) + '&';
      }
      console.log(ret);
      axios.post('/api/user/password/', ret, { headers: { authorization: `JWT ${this.props.token}` } })
          .then((res) => {
              if (res.status === 200) {
                  alert('修改成功');
                  localStorage.clear();
                  window.location.href = "/";
              } else {
                  alert('未知错误');
              }
          })
          .catch(function (error) {
              if (error.response.status === 400) {
                  alert('密码错误');
              } else {
                  console.log(error);
                  alert('未知错误');
              }
          })
      this.props.onClose();
  }
  render() {
    return (
      <Flex style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        backgroundColor: 'rgba(0,0,0,0.3)',
        top: 0,
        left: 0,
        zIndex: 100
      }}>
        <Box style={{width: 400, height: 270, borderRadius: 15, margin: '20vh auto 0', backgroundColor: '#5555FF'}}>
          <Flex mt={1}>
            <Box ml={2}>
              <img src={messageLeft} alt='' style={{width: 15}}/>
            </Box>
            <Box ml={1}>
              <span style={{color: 'white', fontSize: 'small'}}>修改密码</span>
            </Box>
            <Box ml={'auto'} mr={2} style={{cursor: 'pointer'}} onClick={this.props.onClose}>
              <img src={messageRight} alt='' style={{width: 15}}/>
            </Box>
          </Flex>
          <form onSubmit={this.handlePassword.bind(this)}>
            <Flex justifyContent={'center'} mt={3}>
              <Box>
                <input type="hidden" name="username" value={this.props.identity}/>
                <Input type="password" src={loginPassword} name="old_password" placeholder="输入旧密码" required onChange={event => this.setState({oldPassword: event.target.value})}/>
                <Input type="password" src={loginPassword} name="password" placeholder="输入新密码" required onChange={event => this.setState({password: event.target.value})}/>
                <Input type="password" src={loginPassword} name="new_password" placeholder="确认新密码" required onChange={event => this.setState({newPassword: event.target.value})}/>
              </Box>
            </Flex>
            <Flex justifyContent={'space-around'} mt={4} mx={5}>
              <Box>
                <Button content='确认' type='submit' active={true}/>
              </Box>
              <Box>
                <Button content='取消' active={true} onClick={this.props.onClose}/>
              </Box>
            </Flex>
          </form>
        </Box>
      </Flex>
    );
  }
}

const mapStateToProps = state => {
  return {
      identity: state.user.identity,
      token: state.user.token
  };
};

export default connect(mapStateToProps)(MessagePassword);
