import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Flex, Box} from '@rebass/grid';
import {connect} from 'react-redux';
import messageLeft from '../../image/message-left.png';
import messageRight from '../../image/message-right.png';
import Button from '../../components/button';

const Title2 = () => {
  return (
    <Flex>
      <Box width={2 / 11}>
        档案编号
      </Box>
      <Box width={2 / 11}>
        预约日期
      </Box>
      <Box width={2 / 11}>
        双方姓名
      </Box>
      {/*<Box width={3 / 11}>*/}
        {/*标签*/}
      {/*</Box>*/}
      <Box width={2 / 11}>
        分配检查者
      </Box>
    </Flex>
  )
};

class Arrange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: {},
      examiners_1: [],
      examiners_2: [],
      examiners_3: [],
      exam_kind: '1',
      examiner_id: '',
      info: ''
    };
    this.handleUpdate();
    axios.get('/api/doctor/examiner_list?kind=1', {headers: {authorization: `JWT ${this.props.token}`}})
      .then((res) => {
        this.setState({
          examiners_1: res.data.examiners,
          examiner_id: res.data.examiners[0].identity
        });
      });
    axios.get('/api/doctor/examiner_list?kind=2', {headers: {authorization: `JWT ${this.props.token}`}})
      .then((res) => {
        this.setState({examiners_2: res.data.examiners});
      });

    axios.get('/api/doctor/examiner_list?kind=3', {headers: {authorization: `JWT ${this.props.token}`}})
      .then((res) => {
        this.setState({examiners_3: res.data.examiners});
      });
  }
  handleUpdate() {
    axios.get('/api/doctor/patient_list?stage=2', {headers: {authorization: `JWT ${this.props.token}`}})
      .then((res) => {
          for (let i = 0; i < res.data.patients.length; i++) {
            if (this.props.id === res.data.patients[i].identity) {
              this.setState({patient: res.data.patients[i]});
            }
          }
      })
      .catch(function (error) {
      })
  }

  handleChangekind(event) {
    this.setState({exam_kind: event.target.value});
    switch (event.target.value) {
      case '1':
        this.setState({examiner_id: this.state.examiners_1[0].identity});
        break;
      case '2':
        this.setState({examiner_id: this.state.examiners_2[0].identity});
        break;
      case '3':
        this.setState({examiner_id: this.state.examiners_3[0].identity});
        break;
      default:
        break;
    }
  }

  handleArray() {
    let record_id = this.props.id;
    let kind = this.state.exam_kind;
    let examiner_id = this.state.examiner_id;
    let ret = '';
    for (let it in {record_id, kind, examiner_id}) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent({record_id, kind, examiner_id}[it]) + '&';
    }
    axios.post('/api/doctor/exam/arrange', ret, {headers: {authorization: `JWT ${this.props.token}`}})
      .then((res) => {
        if (res.status === 200) {
          this.handleUpdate();
          this.setState({info: '分配成功'});
        }
      })
      .catch(error => {
        console.log(error.response);
        this.setState({info: error.response.data.msg});
      });
  }

  handleEnd() {
    const record_id = this.props.id;
    let ret = '';
    for (let it in {record_id}) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent({record_id}[it]) + '&';
    }
    axios.post('/api/doctor/exam/finish', ret, {headers: {authorization: `JWT ${this.props.token}`}})
      .then((res) => {
        if (res.status === 200) {
          this.props.onUpdate();
          this.props.onClose();
        } else if (res.status === 400) {
          alert(res.msg);
        }
      })
      .catch(function (error) {
        console.log(error);
        alert('未知错误');
      })
  }

  handleCanel(i, event) {
    let record_id = this.props.id;
    console.log(this.state.patient.exams[i]);
    let examiner_id = this.state.patient.exams[i].examiner.identity;
    let ret = '';
    let _this = this;
    for (let it in {record_id, examiner_id}) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent({record_id, examiner_id}[it]) + '&';
    }
    axios.post('/api/doctor/exam/cancel', ret, {headers: {authorization: `JWT ${this.props.token}`}})
      .then((res) => {
        if (res.status === 200) {
          this.setState({info: '取消分配成功'});
          this.handleUpdate();
        }
      })
      .catch(function (error) {

        console.log(error.response);
        _this.setState({info: error.response.data.msg});
      });
  }

  render() {
    const list = (examiners) => {
      const res = [];
      for (let i = 0; i < examiners.length; i++) {
        res.push(<option key={i} value={examiners[i].identity}>{examiners[i].name + examiners[i].identity}</option>)
      }
      return res;
    };
    const list_1 = (exams) => {
      const res = [];
      if (exams) {
        for (let i = 0; i < exams.length; i++) {
          switch (exams[i].kind) {
            case 1:
              res.push("一般情况：");
              break;
            case 2:
              res.push("体格检查：");
              break;
            case 3:
              res.push("临床检查：");
              break;
            default:
              break;
          }
          res.push(exams[i].examiner.name);
          res.push(<Button content="删除" onClick={this.handleCanel.bind(this, i)}/>);
          res.push(<br/>)
        }
      }
      return res;
    };


    return (
      <Flex style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        backgroundColor: 'rgba(0,0,0,0.3)',
        top: 0,
        left: 0,
        zIndex: 100
      }}>
        <Box style={{width: 400, height: 270, borderRadius: 15, margin: '20vh auto 0', backgroundColor: '#5555FF'}}>
          <Flex mt={1}>
            <Box ml={2}>
              <img src={messageLeft} alt='' style={{width: 15}}/>
            </Box>
            <Box ml={1}>
              <span style={{color: 'white', fontSize: 'small'}}>分配检查者</span>
            </Box>
            <Box ml={'auto'} mr={2} style={{cursor: 'pointer'}} onClick={this.props.onClose}>
              <img src={messageRight} alt='' style={{width: 15}}/>
            </Box>
          </Flex>
          <Flex justifyContent={'center'} mt={30}>
            <Box width={300} style={{color: 'white'}}>
              已经分配的项目有
              <br/>
              {list_1(this.state.patient.exams)}
              检查项目:
              <select required onChange={this.handleChangekind.bind(this)}>
                <option value={1}>一般情况</option>
                <option value={2}>体格检查</option>
                <option value={3}>临床检查</option>
              </select>
              <br/>
              检查者:
              <select required onChange={event => this.setState({examiner_id: event.target.value})}>
                {this.state.exam_kind === '1' ? list(this.state.examiners_1) : (
                  this.state.exam_kind === '2' ? list(this.state.examiners_2) : (
                    this.state.exam_kind === '3' ? list(this.state.examiners_3) : null))}
              </select>
              <br/>
              <div style={{marginTop: 10, fontSize: 14, color: 'red'}}>{this.state.info}</div>
              <Button content="分配" onClick={this.handleArray.bind(this)}/>
              <br/>
              <Button content="分配完成" onClick={this.handleEnd.bind(this)}/>
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  }
}

class Card2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
  }

  render() {
    return (
      <li style={{borderBottom: 'solid 1px #aaa', padding: '10px 0', listStyleType: 'none'}}>
        {this.state.visible ? <Arrange id={this.props.id} token={this.props.token} onUpdate={this.props.onUpdate} onClose={() => this.setState({visible: false})}/> : null}
        <Flex>
          <Box width={2 / 11}>
            {this.props.id}
          </Box>
          <Box width={2 / 11}>
            {this.props.date}
          </Box>
          <Box width={2 / 11}>
            <Link to={`/id${this.props.id}`} style={{textDecoration: 'none'}}>
              {this.props.female} & {this.props.male}
            </Link>
          </Box>
          {/*<Box width={3 / 11}>*/}
            {/*{this.props.tags}*/}
          {/*</Box>*/}
          <Box width={2 / 11}>
            <Button content='分配' onClick={() => this.setState({visible: true})}/>
          </Box>
        </Flex>
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.user.token
  };
};

Card2 = connect(mapStateToProps)(Card2);
export {Title2, Card2};
