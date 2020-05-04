import React from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import {Box, Flex} from '@rebass/grid';

class HeaderUser extends React.Component {
  render() {
    return(
      <div style={{color: 'white'}}>
        {this.props.user.role === 'doctor' ? (
          <span>
            医师 {this.props.user.identity} {this.props.user.name}
          </span>
        ) : ( this.props.user.role === 'examiner' ? (
          <span>
            检查者 {this.props.user.identity} {this.props.user.name}
          </span>
        ) : (
          <div key='keyForUser' style={{':hover': {}}}>
            {this.props.user.name}
            {Radium.getState(this.state, 'keyForUser', ':hover') ? (
              <div style={{position: 'absolute', borderRadius: 10, background: '#5555FF'}}>
                <Flex>
                  <Box>
                    姓名：{this.props.user.name}
                  </Box>
                </Flex>
                <Flex>
                  <Box>
                    年龄：{this.props.user.age}
                  </Box>
                </Flex>
                <Flex>
                  <Box>
                    证件号码：{this.props.user.identity}
                  </Box>
                </Flex>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Radium(HeaderUser));
