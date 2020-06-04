import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Input from '../../components/input';
import { Flex, Box } from '@rebass/grid';
import Button from '../../components/button';
import Layout from '../../components/layout';
class Demand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            ownerid: '',
            demandid: '',
            keyword: '',
            budget: '',
            announcementtime: '',
            tendertime: '',
            bidopeningtime: '',
            openingaddress: '',
            projectcontact: '',
            projectphone: '',
            purchasingunit: '',
            purchasingunitadd: '',
            purchasingunitphone: '',
            agency: '',
            agencyadd: '',
            agencyphone: '',
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
            this.setState({ demandid: event.target.value });
        } else if (event.target.name === 'keyword') {
            this.setState({ keyword: event.target.value });
        } else if (event.target.name === 'budget') {
            this.setState({ budget: event.target.value });
        } else if (event.target.name === 'announcementtime') {
            this.setState({ announcementtime: event.target.value });
        } else if (event.target.name === 'tendertime') {
            this.setState({ tendertime: event.target.value });
        } else if (event.target.name === 'bidopeningtime') {
            this.setState({ bidopeningtime: event.target.value });
        } else if (event.target.name === 'openingaddress') {
            this.setState({ openingaddress: event.target.value });
        } else if (event.target.name === 'projectcontact') {
            this.setState({ projectcontact: event.target.value });
        } else if (event.target.name === 'projectphone') {
            this.setState({ projectphone: event.target.value });
        } else if (event.target.name === 'purchasingunit') {
            this.setState({ purchasingunit: event.target.value });
        } else if (event.target.name === 'purchasingunitadd') {
            this.setState({ purchasingunitadd: event.target.value });
        } else if (event.target.name === 'purchasingunitphone') {
            this.setState({ purchasingunitphone: event.target.value });
        } else if (event.target.name === 'agency') {
            this.setState({ agency: event.target.value });
        } else if (event.target.name === 'agencyadd') {
            this.setState({ agencyadd: event.target.value });
        } else if (event.target.name === 'agencyphone') {
            this.setState({ agencyphone: event.target.value });
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
            demandid: this.state.demandid,
            keyword: this.state.keyword,
            budget: this.state.budget,
            announcementtime: this.state.announcementtime,
            tendertime: this.state.tendertime,
            bidopeningtime: this.state.bidopeningtime,
            openingaddress: this.state.openingaddress,
            projectcontact: this.state.projectcontact,
            projectphone: this.state.projectphone,
            purchasingunit: this.state.purchasingunit,
            purchasingunitadd: this.state.purchasingunitadd,
            purchasingunitphone: this.state.purchasingunitphone,
            agency: this.state.agency,
            agencyadd: this.state.agencyadd,
            agencyphone: this.state.agencyphone,
            resources: this.state.resources,
            description: this.state.description,
            file: this.state.file,
            note: this.state.note,
            type: 'demand',
            able: 'false'
        }).then(result => {
            this.setState({
                info: '申请提交成功  交易号为：' + result.data.txId
            });
        }).catch(error => {
                this.setState({ info: error.response.data.msg });
            }
        );
    }
    render(){
        const list = () => {
            let res = [];
            let intro = ["关键词", "预算", "公示时间", "招标时间", "开标时间", "开标地点", "项目联系人", "项目联系人电话",
                "采购单位", "采购单位地址", "采购单位电话", "代理机构", "代理机构地址", "代理机构电话", "资源", "描述", "文件存放地址", "备注"];
            let name = ["keyword", "budget", "announcementtime", "tendertime", "bidopeningtime", "openingaddress", "projectcontact", "projectphone",
                "purchasingunit", "purchasingunitadd", "purchasingunitphone", "agency", "agencyadd", "agencyphone", "resources", "description", "file", "note"];
            for (let i in intro) {
                res.push(
                <tr>
                    <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                        <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{intro[i]}</span>
                    </th>
                    <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                            <input type="text" name={name[i]} style={{ height: '22px', width: '500px', borderWidth: '1px', outline: 'none' }} onChange={this.handelChange.bind(this)} required />
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
                                        -------------------------------------项目需求登记---------------------------------------
                                        </span>
                                </th>
                            </tr>
                            <tr>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>项目需求id</span>
                                </th>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <input type="text" name="id" placeholder="只能为数字" style={{ height: '22px', width: '500px', borderWidth:'1px', outline: 'none' }}
                                        onChange={this.handelChange.bind(this)} required />
                                </th>
                            </tr>
                            {list()}
                            <tr>
                            <th colSpan={'3'}style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
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

export default connect(mapStateToProps)(Demand);
