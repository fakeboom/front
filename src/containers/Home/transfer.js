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

class Transfer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marbles: '',
            type: 'patent',
            isloading: false,
            showMessage: 'false',
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        axios.get('/api/read_allmarble/' + this.props.user.id + '?format=json'
        ).then(result => {
            this.setState({ marbles: result.data });
            this.setState({ isLoading: false });
        }).catch(error => {

        });
    }
    handleYes(data, event) {
        
        axios.post('/api/transfer', {
            marbleId: data.marbleId,
            toOwnerId: data.toOwnerId,
        }).then(() => {
            axios.get('/api/able/' + data.id + '?format=json').then(
                () => { this.setState({ showMessage: 'right' }); }
            );
            }
        );
    }
    handleNo(data, event) {
        axios.get('/api/delete/' + data.id + '?format=json').then(
            () => { this.setState({ showMessage: 'wrong' }); }
        );
    }
    handleOwner(data, event) {
        let type = '';
        let res = '';
        switch (data.substr(0, 1)) {
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
        axios.get('/api/' + type + '/' + data + '?format=json'
        ).then(result => {
            this.props.history.push({ pathname: '/detail_zy', state: result.data });
        }).catch(error => {

        });
    }
    render() {
        
        const put = () => {
            let res = [];
            let data = [];
            data = this.state.marbles.transfers;

            for (let i in data) {
                console.log(data);
                if (data[i].able == 'false') {
                    res.push(
                        <tr>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{data[i].marbleId}</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{data[i].toOwnerId}</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <button onClick={this.handleOwner.bind(this, data[i].toOwnerId)}> 查看</button>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <button onClick={this.handleYes.bind(this, data[i])}>同意</button>
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
                        <Message content="已拒绝" onClose={() => { this.setState({ showMessage: 'false' }); }} />
                    );
                case 'right':
                    return (
                        <Message content="已同意" onClose={() => { this.setState({ showMessage: 'false' }); }} />
                    );
            }
        }
        let { isLoading } = this.state
        if (isLoading) {
            return <p>isLoading...</p>

        }
        return (
            <Layout>
                <table cellPadding={'18px'} cellSpacing={'0px'}
                    style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                    <tbody>
                        <tr>
                            <th colSpan={'5'} style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '22px', color: 'black', fontWeight: 'lighter' }}>
                                    -------------------------------------待处理请求---------------------------------------
                                        </span>
                            </th>
                        </tr>
                        <tr>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>数据资源id</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>申请人id</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>查看申请人详情</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>同意</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>拒绝</span>
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
export default connect(mapStateToProps)(Transfer);
