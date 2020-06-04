import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Input from '../../components/input';
import { Flex, Box } from '@rebass/grid';
import Button from '../../components/button';
import Layout from '../../components/layout';
import Expert from './expert';
class Institution_home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    render() {
        return (
            <Layout>
                <Flex alignItems={'center'}>
                    <table cellPadding={'18px'} cellSpacing={'0px'} 
                        style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                        <tbody>
                            <tr>
                                <th colSpan={'3'} style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '22px', color: 'black', fontWeight: 'lighter' }}>
                                        -------------------------------------用户详细信息---------------------------------------
                                        </span>
                                </th>
                            </tr>
                            <tr>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>用户类型</span>
                                </th>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>单位</span>
                                </th>
                            </tr>
                            <tr>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>单位id</span>
                                </th>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{this.props.user.id}</span>
                                </th>
                            </tr>
                            <tr>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>单位名</span>
                                </th>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{this.props.user.institutionname}</span>
                                </th>
                            </tr>
                            <tr>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>简介</span>
                                </th>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{this.props.user.introduction}</span>
                                </th>
                            </tr>
                            <tr>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>地址</span>
                                </th>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{this.props.user.address}</span>
                                </th>
                            </tr>
                            <tr>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>邮箱地址</span>
                                </th>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{this.props.user.email}</span>
                                </th>
                            </tr>
                            <tr>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>手机号</span>
                                </th>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{this.props.user.telephone}</span>
                                </th>
                            </tr>
                            <tr>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>传真</span>
                                </th>
                                <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                    <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{this.props.user.fax}</span>
                                </th>
                            </tr>
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
    }
};

export default connect(mapStateToProps)(Institution_home);
