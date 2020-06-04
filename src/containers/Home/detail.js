import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Input from '../../components/input';
import { Flex, Box } from '@rebass/grid';
import Button from '../../components/button';
import Paper from './paper';
import Demand from './demand';
import Layout from '../../components/layout';
import Scheme from './scheme';
import Patent from './patent';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marbles:'',
            type: 'patent',
            isloading: false,
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });
            axios.get('/api/read_allmarble/' + this.props.user.id + '?format=json'
            ).then(result => {
                this.setState({ marbles: result.data });
                this.props.dispatch({
                    type: 'GET_MINE',
                    data: result.data,
                });
                this.setState({ isLoading: false });
            }).catch(error => {

            });
    }
    handelChange(event) {
        if (event.target.name === 'type') {
            this.setState({ type: event.target.value });
        }
    }
    handleDetail(data, event) {
        this.props.dispatch({
            type: 'DETAIL',
            data: data,
        });
        this.props.history.push({ pathname: '/detail_zy',state: data });
    }
    handleHistory(data, event) {
        this.props.history.push({ pathname: '/history', state: data.id });
    }
    render() {
        const list = () => {
            let res = [];
            switch (this.props.user.role) {
                case 'city':
                    res.push(
                        <div>
                            <label>
                                <select name="type" value={this.state.type} onChange={this.handelChange.bind(this)}>
                                    <option value="patent">专利</option>
                                    <option value="demand">项目需求</option>
                                    <option value="scheme">解决方案</option>
                                </select>
                            </label>
                        </div>
                    );
                    break;
                case 'expert':
                    res.push(
                        <div>
                            <label>
                                <select name="type" value={this.state.type} onChange={this.handelChange.bind(this)}>
                                    <option value="patent">专利</option>
                                    <option value="paper">论文</option>
                                    <option value="scheme">解决方案</option>
                                </select>
                            </label>
                        </div>
                    );
                    break;
                case 'institution':
                    res.push(
                        <div>
                            <label>
                                <select name="type" value={this.state.type} onChange={this.handelChange.bind(this)}>
                                    <option value="patent">专利</option>
                                    <option value="demand">项目需求</option>
                                    <option value="scheme">解决方案</option>
                                </select>
                            </label>
                        </div>
                    );
                    break;
                default:
                    break;
            }
            return res;
        }
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
                res.push(
                    <tr>
                        <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                            <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{data[i].id}</span>
                        </th>
                        <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                            <button onClick={this.handleDetail.bind(this,data[i])}> 查看</button>
                        </th>
                        <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                            <button onClick={this.handleHistory.bind(this, data[i])}> 查看</button>
                        </th>
                    </tr>
                );
            } 
            return res;
        }
        let { isLoading } = this.state
        if (isLoading) {
            return <p>isLoading...</p>

        }
        return (
            <Layout>
                {list()}
                <table cellPadding={'18px'} cellSpacing={'0px'}
                    style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                    <tbody>
                        <tr>
                            <th colSpan={'3'} style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '22px', color: 'black', fontWeight: 'lighter' }}>
                                    -------------------------------------我的数据资源---------------------------------------
                                        </span>
                            </th>
                        </tr>
                        <tr>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>id</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>查看详情</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>查看历史信息</span>
                            </th>
                        </tr>
                        {put()}
                        
                    </tbody>
                </table>
                
            </Layout>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
    }
};
export default connect(mapStateToProps)(Detail);
