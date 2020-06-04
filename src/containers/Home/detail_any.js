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

class Detail_any extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'patent'
        };
    }
    render() {
        const list = () => {
            let res = [];
            Object.keys(this.props.location.state).map(key => {
                if (key != 'pwd'&& key != 'able') {
                    res.push(
                        <tr>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{key}</span>
                            </th>
                            <th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                                <span style={{ fontSize: '23px', color: 'black', fontWeight: 'lighter' }}>{this.props.location.state[key]}</span>
                            </th>
                        </tr>
                    );
                }
            });
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
                                        -------------------------------------详细信息---------------------------------------
                                        </span>
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
        data:state.detail,
    }
};
export default connect(mapStateToProps)(Detail_any);
