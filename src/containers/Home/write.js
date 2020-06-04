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

class Write extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type :'patent'
        };
    }
    handelChange(event) {
        if (event.target.name === 'type') {
            this.setState({ type: event.target.value });
        }
    }
    render() {
        const list =() => {
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
        const select = () => {
            switch (this.state.type) {
                case 'paper':
                    return <Paper />;
                case 'patent':
                    return <Patent />;
                case 'scheme':
                    return <Scheme />;
                case 'demand':
                    return <Demand/>;
                default:
                    return <Demand />;
            }
        }

        return (
            <Layout>
                {list()}
                {select()}
            </Layout>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
    }
};
export default connect(mapStateToProps)(Write);
