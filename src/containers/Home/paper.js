import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Input from '../../components/input';
import { Flex, Box } from '@rebass/grid';
import Button from '../../components/button';
import Layout from '../../components/layout';
class Paper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            ownerid: '',
            paperid: '',
            papertitle: '',
            padstract: '',
            pkeyword: '',
            pdate: '',
            pfile: '',
            domainid: '',
            info: '',
        };
    }
    handelChange(event) {
        if (event.target.name === 'id') {
            this.setState({ id: event.target.value });
            this.setState({ paperid: event.target.value });
        } else if (event.target.name === 'papertitle') {
            this.setState({ papertitle: event.target.value });
        } else if (event.target.name === 'padstract') {
            this.setState({ padstract: event.target.value });
        } else if (event.target.name === 'pkeyword') {
            this.setState({ pkeyword: event.target.value });
        } else if (event.target.name === 'pdate') {
            this.setState({ pdate: event.target.value });
        } else if (event.target.name === 'pfile') {
            this.setState({ pfile: event.target.value });
        } else if (event.target.name === 'domainid') {
            this.setState({ domainid: event.target.value });
        }
    }
    handleSub(event) {
        event.preventDefault();
        axios.post('/api/change', {
            id: this.state.id,
            ownerid: this.props.user.id,
            paperid: this.state.paperid,
            papertitle: this.state.papertitle,
            padstract: this.state.padstract,
            pkeyword: this.state.pkeyword,
            pdate: this.state.pdate,
            pfile: this.state.pfile,
            domainid: this.state.domainid,
            type: 'paper',
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
            let intro = ["论文标题","论文摘要","论文关键词","发表日期","论文连接","领域编号"];
            let name = ["papertitle","padstract","pkeyword","pdate","pfile","domainid"];
            for (let i in intro) {
                res.push(<tr>
                    <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                        <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{intro[i]}</span>
                    </th>
                    <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                        <input type="text" name={name[i]}
                            style={{ height: '22px', width: '500px', borderWidth: '1px', outline: 'none' }} onChange={this.handelChange.bind(this)} required />
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
                                        -------------------------------------论文登记---------------------------------------
                                        </span>
                                </th>
                            </tr>
                            <tr>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>论文id</span>
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

export default connect(mapStateToProps)(Paper);
