import React from 'react';
import { Link } from 'react-router-dom';
import Button from "./button";
import Radium from 'radium';
import { connect } from 'react-redux';

class Headers_1 extends React.Component {

    render() {
        let level = 0;
        if (this.props.user.role == 'admin') {
            level = 1;
        }
        const link = () => {
            let res = [];
            if (this.props.user.role == 'admin') {
                res.push(<Link to={'/search'}><Button content={'查看数据资源'} active={level === 1} /></Link>);
                res.push(<Link to={'/judge_u'}><Button content={'审核用户申请'} active={level === 1} /></Link>);
                res.push(<Link to={'/judge_m'}><Button content={'审核数据资源'} active={level === 1} /></Link>)
                return res;
            } else {
                res.push(<Link to={'/'}><Button content={'用户信息'} active={level === 0} /></Link>);
                res.push(<Link to={'/detail'}><Button content={'查看数据资源'} active={level === 0} /></Link>);
                res.push(<Link to={'/write'}><Button content={'登记数据资源'} active={level === 0} /></Link>);
                res.push(<Link to={'/search'}><Button content={'查询数据资源'} active={level === 0} /></Link>);
                res.push(<Link to={'/transfer'}><Button content={'待处理交易'} active={level === 0} /></Link>);
                return res;
            } 
        }
        return (
            <div style={{ color: 'white' }}>
                {link()}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Radium(Headers_1));