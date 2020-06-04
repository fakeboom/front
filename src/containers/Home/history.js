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

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
            isloading: false,
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        axios.get('/api/gethistory/' + this.props.location.state + '?format=json'
        ).then(result => {
            this.setState({ history: result.data });
            this.setState({ isLoading: false });
        }).catch(error => {

        });
    }
    render() {
        let { isLoading } = this.state
        if (isLoading) {
            return <p>isLoading...</p>

        }
        const list = () => {
            let res = [];
            for (var i in this.state.history){
                    res.push(
                        <tr>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{this.state.history[i].value.ownerid}</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{this.state.history[i].txId}</span>
                            </th>
                        </tr>
                    );
                
            }
            return res;
        };

        return (
            <Layout>
                <Flex alignItems={'center'}>
                    <table cellPadding={'18px'} cellSpacing={'0px'}
                        style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                        <tbody>
                            <tr>
                                <th colSpan={'3'} style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '22px', color: 'black', fontWeight: 'lighter' }}>
                                        数据资源id:{this.props.location.state}
                                        </span>
                                </th>
                            </tr>
                            <tr>
                                <th colSpan={'3'} style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '22px', color: 'black', fontWeight: 'lighter' }}>
                                        -------------------------------------历史信息---------------------------------------
                                        </span>
                                </th>
                            </tr>
                            <tr>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>所有者id</span>
                                </th>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>区块链交易号</span>
                                </th>
                            </tr>
                            {list()}
                        </tbody>
                    </table>

                </Flex>

            </Layout>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
        data: state.detail,
    }
};
export default connect(mapStateToProps)(History);
