import React from 'react';
import axios from 'axios';
import {Flex, Box} from '@rebass/grid';
import commonTips from '../image/common-tips.png';
import Button from "./button";
import {connect} from 'react-redux';

class ItemAdvice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editing: false, text: props.text};
  }

  handleSave(event) {
    event.preventDefault();
    const fd = new FormData();
    fd.append('advice', this.state.text);
    fd.append('sex', this.props.sex);
    fd.append('kind', this.props.kind);
    fd.append('record_id', window.location.pathname.split('/')[1].substr(2));
    axios.post('/api/doctor/advice', fd, {
      headers: {authorization: `JWT ${this.props.token}`},
      'Content-Type': 'multipart/form-data'
    })
      .then(() => {
        this.props.dispatch({type: 'EXAMINATION-ADVICE', kind: this.props.kind, sex: this.props.sex, advice: this.state.text});
      });
    this.setState({editing: false});
  }

  render() {
    return (
      <Flex mt={4} mb={3}>
        <Box>
          <Flex marginLeft={20}>
            <Box>
              <img src={commonTips} alt='' width={'30px'}/>
            </Box>
            <Box ml={2}>
              <span style={{fontSize: '25px', color: '#8C8C8C'}}>医生小贴士</span>
            </Box>
          </Flex>
          <form onSubmit={this.handleSave.bind(this)}>
            <Flex ml={'60px'} mt={2} mb={1}>
              <Box>
                <span style={{fontSize: '23px', color: '#95A3F4'}}>{this.props.sex ? '男方' : '女方'}</span>
              </Box>
            </Flex>
            <Flex ml={'60px'} mt={1} mb={1} mr={'20px'}>
              <Box style={{fontSize: '14px', color: '#8C8C8C'}}>
                {this.state.editing ? (
                  <textarea value={this.state.text} onChange={event => this.setState({text: event.target.value})}
                            style={{
                              width: '370px',
                              height: '150px',
                              fontSize: '14px',
                              color: '#8C8C8C',
                              fontFamily: '微软雅黑, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                              resize: 'vertical'
                            }}/>
                ) : (
                  <div style={{padding: '3px'}}>{this.props.text}</div>
                )}
              </Box>
            </Flex>
            {this.props.editable ? (
              <Flex ml={'60px'} mt={3}>
                {this.state.editing ? (
                  <Box ml={'auto'} mr={3}>
                    <Button content={'取消'} onClick={() => {
                      this.setState({editing: false, text: this.props.text});
                    }}/>
                    <Button type={'submit'} content={'保存'} active={true}/>
                  </Box>
                ) : (
                  <Box ml={'auto'} mr={3}>
                    <Button content={'编辑'} onClick={() => {
                      this.setState({editing: true, text: this.props.text});
                    }}/>
                  </Box>
                )}
              </Flex>
            ) : null}
          </form>
        </Box>
      </Flex>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.user.token
  }
};

export default connect(mapStateToProps)(ItemAdvice);
