﻿import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Input from '../../components/input';
import { Flex, Box } from '@rebass/grid';
import Button from '../../components/button';
import Paper from './paper';
import Demand from './demand';
import Layout from '../../components/layout';
import Message from '../../components/message';
import Scheme from './scheme';
import Patent from './patent';

class All_marble extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marbles: '',
            type: 'patent',
            id:'',
            isloading: false,
            search: false,
            showMessage : 'false',
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        axios.get('/api/read_everything'
        ).then(result => {
            this.setState({ marbles: result.data });
            this.setState({ isLoading: false });
        }).catch(error => {

        });
    }
    handelChange(event) {
        if (event.target.name === 'type') {
            this.setState({ type: event.target.value });
        } else if (event.target.name === 'id') {
            this.setState({ id: event.target.value });
        }
    }
    handleDetail(data, event) {
        this.props.history.push({ pathname: '/detail_zy', state: data });
    }
    handleSearch(event) {
        this.setState({ search: true });
    }
    handleOwner(data, event) {
        let type = '';
        let res = '';
        switch (data.substr(0,1)) {
            case 'i':
                type = 'institution';
                break;
            case 'c':
                type = 'city';
                break;
            case 'e':
                type = 'expert';
                break;
        }
        axios.get('/api/'+type+'/'+ data + '?format=json'
        ).then(result => {
            this.props.history.push({ pathname: '/detail_zy', state: result.data });
        }).catch(error => {
            
            });
    }
    handleHistory(data, event) {
        this.props.history.push({ pathname: '/history', state: data.id });
    }
    handleTransfer(data, event) {
        if (data.ownerid == this.props.user.id) {
            this.setState({ showMessage: 'wrong' });
        } else {
            axios.post('/api/change', {
                id: '' + Math.floor(Math.random() * 10000000000),
                ownerid: data.ownerid,
                marbleid: data.id,
                toOwnerid: this.props.user.id,
                able: 'false',
                type: 'transfer',
            }).then(() => { this.setState({ showMessage: 'right'}); }
            );
        }
    }
    render() {
        const put = () => {
            let res = [];
            let data = [];
            switch (this.state.type) {
                case 'paper':
                    data = this.state.marbles.papers;
                    break;
                case 'patent':
                    data = this.state.marbles.patents;
                    break;
                case 'scheme':
                    data = this.state.marbles.schemes;
                    break;
                case 'demand':
                    data = this.state.marbles.demands;
                    break;
                default:
                    data = this.state.marbles.patents;
                    break;
            }

            for (let i in data) {
                res.push(
                    <tr>
                        <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                            <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{data[i].id}</span>
                        </th>
                        <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                            <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{data[i].ownerid}</span>
                        </th>
                        <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                            <button onClick={this.handleOwner.bind(this, data[i].ownerid)}> 查看</button>
                        </th>
                        <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                            <button onClick={this.handleDetail.bind(this, data[i])}> 查看</button>
                        </th>
                        <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                            <button onClick={this.handleHistory.bind(this, data[i])}> 查看</button>
                        </th>
                        <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                            <button onClick={this.handleTransfer.bind(this, data[i])}> 请求交易</button>
                        </th>
                    </tr>
                );
            }
            return res;
        }
        const search = () => {
            let res = [];
            let data = [];
            switch (this.state.type) {
                case 'paper':
                    data = this.state.marbles.papers;
                    break;
                case 'patent':
                    data = this.state.marbles.patents;
                    break;
                case 'scheme':
                    data = this.state.marbles.schemess;
                    break;
                case 'demand':
                    data = this.state.marbles.demands;
                    break;
                default:
                    data = this.state.marbles.patents;
                    break;
            }

            for (let i in data) {
                if (this.state.id == data[i].id) {
                    res.push(
                        <tr>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{data[i].id}</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{data[i].ownerid}</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <button onClick={this.handleOwner.bind(this, data[i].ownerid)}> 查看</button>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <button onClick={this.handleDetail.bind(this, data[i])}> 查看</button>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <button onClick={this.handleHistory.bind(this, data[i])}> 查看</button>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <button onClick={this.handleTransfer.bind(this, data[i])}> 请求交易</button>
                            </th>
                        </tr>
                    );
                }
                
            }
            return res;
        }
        const message = () => {
            switch (this.state.showMessage) {
                case 'false':
                    return null;
                case 'wrong':
                    return (
                        <Message content="不能对已有的数据资源申请交易" onClose={() => { this.setState({ showMessage: 'false' }); }} />
                    );
                case 'right':
                    return (
                        <Message content="交易申请成功" onClose={() => { this.setState({ showMessage: 'false' }); }} />
                    );
            }
        }
        let { isLoading } = this.state
        if (isLoading) {
　　　         return <p>isLoading...</p>

        }
        return (
            <Layout>
                <div>
                    <label>
                        <select name="type" value={this.state.type} onChange={this.handelChange.bind(this)}>
                            <option value="patent">专利</option>
                            <option value="demand">项目需求</option>
                            <option value="scheme">解决方案</option>
                            <option value="paper">论文</option>
                        </select>
                    </label>
                </div>
                <table cellPadding={'18px'} cellSpacing={'0px'}
                    style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                    <tr>
                        <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                            <input type="text" name="id" placeholder="请输入要查询的数字资源id" style={{ fontSize: '23px', height: '28px', width: '400px', borderWidth: 0 }}
                                onChange={this.handelChange.bind(this)} required />
                        </th>
                        <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                            <button onClick={this.handleSearch.bind(this)}> 查询</button>
                        </th>
                    </tr>
                </table>
                <table cellPadding={'18px'} cellSpacing={'0px'}
                    style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                    <tbody>
                        <tr>
                            <th colSpan={'6'} style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '22px', color: 'black', fontWeight: 'lighter' }}>
                                    -------------------------------------查询结果---------------------------------------
                                        </span>
                            </th>
                        </tr>
                        <tr>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>id</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>所有者id</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>查看所有者</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>查看资源详情</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>查看历史信息</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>申请交易</span>
                            </th>
                        </tr>
                        {this.state.search && this.state.id!='' ? search() : put()}
                    </tbody>
                </table>
                {message()}

            </Layout>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
    }
};
export default connect(mapStateToProps)(All_marble);
