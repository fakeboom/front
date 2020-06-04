import React from 'react';
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

class Judge_u extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marbles: '',
            type: 'city',
            id: '',
            isloading: false,
            showMessage: 'false',
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
    handleYes(data, event) {
        axios.get('/api/able/' + data.id + '?format=json'
        ).then(result => {
            this.setState({ showMessage: 'right' });
            });
        this.componentDidMount();
    }
    handleNo(data, event) {
        axios.get('/api/delete/' + data.id + '?format=json'
        ).then(result => {
            this.setState({ showMessage: 'wrong' });
            });
        this.componentDidMount();
    }
    render() {
        const put = () => {
            let res = [];
            let data = [];
            switch (this.state.type) {
                case 'city':
                    data = this.state.marbles.citys;
                    break;
                case 'institution':
                    data = this.state.marbles.institution;
                    break;
                case 'expert':
                    data = this.state.marbles.experts;
                    break;
                default:
                    data = this.state.marbles.citys;
                    break;
            }

            for (let i in data) {
                if (data[i].able == 'false') {
                    res.push(
                        <tr>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{data[i].id}</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <button onClick={this.handleDetail.bind(this, data[i])}> 查看</button>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <button onClick={this.handleYes.bind(this, data[i])}> 同意</button>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <button onClick={this.handleNo.bind(this, data[i])}> 拒绝</button>
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
                        <Message content="请求已删除" onClose={() => { this.setState({ showMessage: 'false' }); }} />
                    );
                case 'right':
                    return (
                        <Message content="请求已通过" onClose={() => { this.setState({ showMessage: 'false' }); }} />
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
                            <option value="city">城市</option>
                            <option value="institution">单位</option>
                            <option value="expert">专家</option>
                        </select>
                    </label>
                </div>
                <table cellPadding={'18px'} cellSpacing={'0px'}
                    style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                    <tbody>
                        <tr>
                            <th colSpan={'6'} style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '22px', color: 'black', fontWeight: 'lighter' }}>
                                    -----------------------------------待处理注册请求---------------------------------------
                                        </span>
                            </th>
                        </tr>
                        <tr>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>id</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>查看注册请求详情</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>申请通过</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>申请否决</span>
                            </th>
                        </tr>
                        {put()}
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
export default connect(mapStateToProps)(Judge_u);
