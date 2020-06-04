import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Input from '../../components/input';
import { Flex, Box } from '@rebass/grid';
import Button from '../../components/button';
import Layout from '../../components/layout';
class Scheme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            ownerid: '',
            schemeid: '',
            schemetitle: '',
            keyword: '',
            application: '',
            period: '',
            supplier: '',
            budget: '',
            projectcontact: '',
            projectphone: '',
            resources: '',
            description: '',
            file: '',
            note: '',
            info:'',
        };
    }
    handelChange(event) {
        if (event.target.name === 'id') {
            this.setState({ id: event.target.value });
            this.setState({ schemeid: event.target.value });
        } else if (event.target.name === 'keyword') {
            this.setState({ keyword: event.target.value });
        } else if (event.target.name === 'schemetitle') {
            this.setState({ schemetitle: event.target.value });
        } else if (event.target.name === 'application') {
            this.setState({ application: event.target.value });
        } else if (event.target.name === 'period') {
            this.setState({ period: event.target.value });
        } else if (event.target.name === 'supplier') {
            this.setState({ supplier: event.target.value });
        } else if (event.target.name === 'budget') {
            this.setState({ budget: event.target.value });
        } else if (event.target.name === 'projectcontact') {
            this.setState({ projectcontact: event.target.value });
        } else if (event.target.name === 'projectphone') {
            this.setState({ projectphone: event.target.value });
        } else if (event.target.name === 'resources') {
            this.setState({ resources: event.target.value });
        } else if (event.target.name === 'description') {
            this.setState({ description: event.target.value });
        } else if (event.target.name === 'file') {
            this.setState({ file: event.target.value });
        } else if (event.target.name === 'note') {
            this.setState({ note: event.target.value });
        }
    }
    handleSub(event) {
        event.preventDefault();
        axios.post('/api/change', {
            id: this.state.id,
            ownerid: this.props.user.id,
            schemeid: this.state.schemeid,
            schemetitle: this.state.schemetitle,
            keyword: this.state.keyword,
            application: this.state.application,
            period: this.state.period,
            supplier: this.state.supplier,
            budget: this.state.budget,
            projectcontact: this.state.projectcontact,
            projectphone: this.state.projectphone,
            resources: this.state.resources,
            description: this.state.description,
            file: this.state.file,
            note: this.state.note,
            type: 'scheme',
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
            let intro = ["标题","关键词","用途", "预算", "履行期","供应方", "项目联系人", "项目联系人电话",
                 "资源", "描述", "文件存放地址", "备注"];
            let name = ["schemetitle","keyword","application", "budget","period","supplier", "projectcontact", "projectphone",
                 "resources", "description", "file", "note"];
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
                                        -------------------------------------解决方案登记---------------------------------------
                                        </span>
                                </th>
                            </tr>
                            <tr>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>解决方案id</span>
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

export default connect(mapStateToProps)(Scheme);
