import React from 'react';
import axios from 'axios';
import Radium from 'radium';
import {connect} from 'react-redux';

import Layout from '../../components/layout';
import Stage0 from './stage0';
import Stage1 from './stage1';
import Stage3 from './stage3';
import Stage4 from './stage4';
import Stage6 from './stage6';

class Patient extends React.Component {
  constructor(props) {
    super(props);
    axios.get('/api/user/info/', {headers: {authorization: `JWT ${this.props.user.token}`}}).then(result => {
      props.dispatch({
        type: 'LOGIN',
        user: result.data,
      });
    }).catch(() => {
      localStorage.clear();
      window.location.href = '/';
    });
  }

  render() {
    return (
      <Layout>
        {this.props.user.stage === 0 ? <Stage0/> : (
          this.props.user.stage === 1 ? <Stage1/> : (
            this.props.user.stage === 3 ? <Stage3/> : (
              this.props.user.stage === 4 ? <Stage4/> : (
                this.props.user.stage === 5 ? <Stage4/> : (
                  this.props.user.stage === 6 ? <Stage6/> : (
                    null
                  )
                )
              )
            )
          )
        )
        }
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps)(Radium(Patient));
