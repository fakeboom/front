import React from 'react';
import axios from 'axios';
import Input from '../../components/input';
import Button from '../../components/button';

class Expert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            expertid:'',
            expername: '',
            introduction: '',
            affiliation: '',
            email: '',
            telephone: '',
            fax: '',
            pwd: '',
            pwd_2: '',
            info: '',
        };
    }

    handelChange(event) {
        if (event.target.name === 'id') {
            this.setState({ id: event.target.value });
            this.setState({ expertid: event.target.value });
            this.setState({ telephone: event.target.value });
        } else if (event.target.name === 'expername') {
            this.setState({ expername: event.target.value });
        } else if (event.target.name === 'pwd') {
            this.setState({ pwd: event.target.value });
        } else if (event.target.name === 'pwd_2') {
            this.setState({ pwd_2: event.target.value });
        } else if (event.target.name === 'introduction') {
            this.setState({ introduction: event.target.value });
        } else if (event.target.name === 'affiliation') {
            this.setState({ affiliation: event.target.value });
        } else if (event.target.name === 'fax') {
            this.setState({ fax: event.target.value });
        } else if (event.target.name === 'email') {
            this.setState({ email: event.target.value });
        }
    }

    handleLogin(event) {
        event.preventDefault();
        if (this.state.pwd !== this.state.pwd_2) {
            this.setState({ info: '两次输入的密码不一致' });
        } else {
            axios.post('/api/sign_up', {
                id: this.state.id,
                expertid: this.state.expertid,
                expername: this.state.expername,
                introduction: this.state.introduction,
                affiliation: this.state.affiliation,
                email: this.state.email,
                telephone: this.state.telephone,
                fax: this.state.fax,
                pwd: this.state.pwd,
                type: 'expert',
                able: 'false'
            }).then(result => {
                this.setState({ info: '注册成功' });
            }).catch(error => {
                this.setState({ info: error.response.data.msg });
            });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleLogin.bind(this)}>
                    <Input type="text" name="id" placeholder="手机号"
                        onChange={this.handelChange.bind(this)} required />
                    <Input type="text" name="expername" placeholder="专家姓名"
                        onChange={this.handelChange.bind(this)} required />
                    <Input type="password" name="pwd" placeholder="密码"
                        onChange={this.handelChange.bind(this)} required />
                    <Input type="password" name="pwd_2" placeholder="密码确认"
                        onChange={this.handelChange.bind(this)} required />
                    <Input type="text" name="introduction" placeholder="简介"
                        onChange={this.handelChange.bind(this)} required />
                    <Input type="text" name="affiliation" placeholder="职称"
                        onChange={this.handelChange.bind(this)} required />
                    <Input type="text" name="email" placeholder="邮箱"
                        onChange={this.handelChange.bind(this)} required />
                    <Input type="text" name="fax" placeholder="传真"
                        onChange={this.handelChange.bind(this)} required />
                    <div style={{ marginTop: 10, fontSize: 14, color: 'red' }}>{this.state.info}</div>
                    <Button content='注册' type='submit' style={{ marginTop: 20 }} />
                </form>
            </div>
        );
    }
}

export default Expert;
