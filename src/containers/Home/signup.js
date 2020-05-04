import React from 'react';
import axios from 'axios';
import Input from '../../components/input';
import Button from '../../components/button';
import loginUsername from '../../image/login-username.png';
import loginPassword from '../../image/login-password.png';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      male_name: '',
      female_name: '',
      male_identity: '',
      female_identity: '',
      male_password: '',
      female_password: '',
      male_password_2: '',
      female_password_2: '',
      info: '',
    };
  }

  handelChange(event) {
    if (event.target.name === 'male_name') {
      this.setState({male_name: event.target.value});
    } else if (event.target.name === 'female_name') {
      this.setState({female_name: event.target.value});
    } else if (event.target.name === 'male_identity') {
      this.setState({male_identity: event.target.value});
    } else if (event.target.name === 'female_identity') {
      this.setState({female_identity: event.target.value});
    } else if (event.target.name === 'male_password') {
      this.setState({male_password: event.target.value});
    } else if (event.target.name === 'female_password') {
      this.setState({female_password: event.target.value});
    } else if (event.target.name === 'male_password_2') {
      this.setState({male_password_2: event.target.value});
    } else if (event.target.name === 'female_password_2') {
      this.setState({female_password_2: event.target.value});
    }
  }

  handleLogin(event) {
    event.preventDefault();
    if (this.state.male_password !== this.state.male_password_2) {
      this.setState({info: '男方两次输入的密码不一致'});
    }
    if (this.state.female_password !== this.state.female_password_2) {
      this.setState({info: '女方两次输入的密码不一致'});
    } else {
      axios.post('/api/patient/signup', {
        male_name: this.state.male_name,
        female_name: this.state.female_name,
        male_identity: this.state.male_identity,
        female_identity: this.state.female_identity,
        male_password: this.state.male_password,
        female_password: this.state.female_password,
      }).then(result => {
        this.setState({info: '注册成功'});
      }).catch(error => {
        this.setState({info: error.response.data.msg});
      });
    }
  }

  render() {
    return (
      <div>
        <h1 style={{color: '#FFFFFF', fontWeight: 'normal', fontSize: '28px'}}>注册</h1>
        <form onSubmit={this.handleLogin.bind(this)}>
          <Input type="text" src={loginUsername} name="male_name" placeholder="姓名(男)"
                 onChange={this.handelChange.bind(this)} required/>
          <Input type="text" src={loginUsername} name="male_identity" placeholder="身份证号(男)"
                 onChange={this.handelChange.bind(this)} required/>
          <Input type="password" src={loginPassword} name="male_password" placeholder="密码(男)"
                 onChange={this.handelChange.bind(this)} required/>
          <Input type="password" src={loginPassword} name="male_password_2" placeholder="密码确认(男)"
                 onChange={this.handelChange.bind(this)} required/>
          <Input type="text" src={loginUsername} name="female_name" placeholder="姓名(女)"
                 onChange={this.handelChange.bind(this)} required/>
          <Input type="text" src={loginUsername} name="female_identity" placeholder="身份证号(女)"
                 onChange={this.handelChange.bind(this)} required/>
          <Input type="password" src={loginPassword} name="female_password" placeholder="密码(女)"
                 onChange={this.handelChange.bind(this)} required/>
          <Input type="password" src={loginPassword} name="female_password_2" placeholder="密码确认(女)"
                 onChange={this.handelChange.bind(this)} required/>
          <div style={{marginTop: 10, fontSize: 14, color: 'red'}}>{this.state.info}</div>
          <Button content='注册' type='submit' style={{marginTop: 20}}/>
        </form>
      </div>
    );
  }
}

export default Signup;
