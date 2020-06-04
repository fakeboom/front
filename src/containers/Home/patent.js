import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Input from '../../components/input';
import { Flex, Box } from '@rebass/grid';
import Button from '../../components/button';
import Layout from '../../components/layout';
class Patent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            ownerid: '',
            patentid: '',
            patentnumber: '',
            ptype: '',
            pname: '',
            pdate: '',
            popen: '',
            popendate: '',
            pstate: '',
            applyid: '',
            domainid: '',
            info: '',
        };
    }
    handelChange(event) {
        if (event.target.name === 'id') {
            this.setState({ id: event.target.value });
            this.setState({ patentid: event.target.value });
        } else if (event.target.name === 'patentnumber') {
            this.setState({ patentnumber: event.target.value });
        } else if (event.target.name === 'ptype') {
            this.setState({ ptype: event.target.value });
        } else if (event.target.name === 'pname') {
            this.setState({ pname: event.target.value });
        } else if (event.target.name === 'pdate') {
            this.setState({ pdate: event.target.value });
        } else if (event.target.name === 'popen') {
            this.setState({ popen: event.target.value });
        } else if (event.target.name === 'popendate') {
            this.setState({ popendate: event.target.value });
        } else if (event.target.name === 'pstate') {
            this.setState({ pstate: event.target.value });
        } else if (event.target.name === 'applyid') {
            this.setState({ applyid: event.target.value });
        } else if (event.target.name === 'domainid') {
            this.setState({ domainid: event.target.value });
        } 
    }
    handleSub(event) {
        event.preventDefault();
        axios.post('/api/change', {
            id: this.state.id,
            ownerid: this.props.user.id,
            patentid: this.state.patentid,
            patentnumber: this.state.patentnumber,
            ptype: this.state.ptype,
            pname: this.state.pname,
            pdate: this.state.pdate,
            popen: this.state.popen,
            popendate: this.state.popendate,
            pstate: this.state.pstate,
            applyid: this.state.applyid,
            domainid: this.state.domainid,
            type: 'patent',
            able: 'false'
        }).then(result => {
            this.setState({
                info: '申请提交成功  交易号为：' + result.data.txId
            });
        }).catch(error => {
            this.setState({ info: error.response.data.msg });
        });
    }
    render() {
        const list = () => {
            let res = [];
            let intro = ["专利标号","专利类型","专利名称","申请日期","公开号","公开日","法律状态","申请人编号","领域编号"];
            let name = ["patentnumber","ptype","pname","pdate","popen","popendate","pstate","applyid","domainid"];
            for (let i in intro) {
                res.push(<tr>
                    <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                        <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{intro[i]}</span>
                    </th>
                    <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                        <input type="text" name={name[i]} style={{ height: '22px', width: '500px', borderWidth: '1px', outline: 'none' }}
                            onChange={this.handelChange.bind(this)} required />
                    </th>
                </tr>);
            }
            return res;
        }
        return (
                <Flex alignItems={'center'}>
                    <table cellPadding={'18px'} cellSpacing={'0px'}
                        style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                        <tbody>
                            <tr>
                                <th colSpan={'3'} style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '22px', color: 'black', fontWeight: 'lighter' }}>
                                        -------------------------------------专利登记---------------------------------------
                                        </span>
                                </th>
                            </tr>
                            <tr>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>专利id</span>
                                </th>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <input type="text" name="id" placeholder="只能为数字" style={{ height: '22px', width: '500px', borderWidth: '1px', outline: 'none' }}
                                        onChange={this.handelChange.bind(this)} required />
                                </th>
                            </tr>
                            {list()}
                            <tr>
                            <th colSpan={'3'} style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <button onClick={this.handleSub.bind(this)}> 提交</button>
                                    <div style={{ marginTop: 10, fontSize: 14, color: 'red' }}>
                                        {this.state.info}</div>
                                </th>
                            </tr>

                        </tbody>
                    </table>
                </Flex>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
    }
};

export default connect(mapStateToProps)(Patent);
