import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Input from '../../components/input';
import Button from '../../components/button';

class Login extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      type : 'expert',
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
    } else if (event.target.name === 'type') {
        this.setState({ type: event.target.value });
    }
  }

  handleLogin(event) {
    event.preventDefault();
      switch (this.state.type) {
          case 'city':
              this.Login_city();
              break;
          case 'expert':
              this.Login_expert();
              break;
          case 'institution':
              this.Login_ins();
              break;
          case 'admin':
              this.Login_admin();
              break;
          default:
              break;
      }

      this.forceUpdate();
      
    }
    Login_admin() {
        if (this.state.username == 'admin' && this.state.password == 'admin') {
            this.props.dispatch({
                type: 'LOGIN_ADMIN',
                user: '',
            });
        }
        else {
            this.setState({ info: '密码错误' });
        }
    }
    Login_city() {
        axios.post('/api/sign_in', {
            id : 'c' + this.state.username,
            pwd : this.state.password
        }).then(result => {
                axios.get('/api/city/c' + this.state.username + '?format=json'
                ).then(result => {
                    this.props.dispatch({
                        type: 'LOGIN_CITY',
                        user: result.data,
                    });
                }).catch(error => {
                    this.setState({ info: '网络错误' });
                        });
               }
           ).catch(error => {
               this.setState({ info: '密码错误' });
           });
    }
    Login_expert() {
        axios.post('/api/sign_in', {
            id : 'e' + this.state.username,
            pwd : this.state.password
        }).then(result => {
            axios.get('/api/expert/e' + this.state.username + '?format=json'
            ).then(result => {

                    this.props.dispatch({
                        type: 'LOGIN_EXPERT',
                        user: result.data,
                    });

            }).catch(error => {
                this.setState({ info: '网络错误' });
                });
            }
        ).catch(error => {
                this.setState({ info:'密码错误' });
            });
    }
    Login_ins() {
        axios.post('/api/sign_in', {
            id : 'i' + this.state.username,
            pwd : this.state.password
        }).then(result => {
            axios.get('/api/institution/i' + this.state.username + '?format=json'
            ).then(result => {

                    this.props.dispatch({
                        type: 'LOGIN_INS',
                        user: result.data,
                    });

            }).catch(error => {
                this.setState({ info: '网络错误' });
                });
            }
            ).catch(error => {
                this.setState({ info: '密码错误'});
            });
    }
  render() {
    return (
      <div>
            <h1 style={{ color: '#FFFFFF', fontWeight: 'normal', fontSize: '28px' }}>登录</h1>
            <div>
                <label>
                    <select name= "type" value={this.state.type} onChange={this.handelChange.bind(this)}>
                        <option value="expert">专家</option>
                        <option value="city">城市</option>
                        <option value="institution">单位</option>
                        <option value="admin">管理员</option>
                    </select>
                </label>
            </div>
            <form onSubmit={this.handleLogin.bind(this)}>
                  <Input type="text"  name="username" placeholder="账号"
                         onChange={this.handelChange.bind(this)} required/>
                  <Input type="password"  name="password" placeholder="密码"
                         onChange={this.handelChange.bind(this)} required/>
                  <div style={{marginTop: 10, fontSize: 14, color: 'red'}}>{this.state.info}</div>
                  <Button content='登录' type='submit' style={{marginTop: 30}}/>
             </form>
      </div>
    );
  }
}

export default connect()(Login);
