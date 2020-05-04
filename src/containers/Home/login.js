import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Input from '../../components/input';
import Button from '../../components/button';
import loginUsername from '../../image/login-username.png'
import loginPassword from '../../image/login-password.png'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      info: '',
    };
  }

  handelChange(event) {
    if (event.target.name === 'username') {
      this.setState({username: event.target.value});
    } else if (event.target.name === 'password') {
      this.setState({password: event.target.value});
    }
  }

  handleLogin(event) {
    event.preventDefault();
    axios.post('/api/auth/?format=json', {
      username: this.state.username,
      password: this.state.password
    }).then(result => {
        this.props.dispatch({
          type: 'LOGIN',
          user: result.data,
        });
    }).catch(error => {
      this.setState({info: '密码错误'});
    });
  }

  render() {
    return (
      <div>
        <h1 style={{color: '#FFFFFF', fontWeight: 'normal', fontSize: '28px'}}>登录</h1>
        <form onSubmit={this.handleLogin.bind(this)}>
          <Input type="text" src={loginUsername} name="username" placeholder="账号"
                 onChange={this.handelChange.bind(this)} required/>
          <Input type="password" src={loginPassword} name="password" placeholder="密码"
                 onChange={this.handelChange.bind(this)} required/>
          <div style={{marginTop: 10, fontSize: 14, color: 'red'}}>{this.state.info}</div>
          <Button content='登录' type='submit' style={{marginTop: 30}}/>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
