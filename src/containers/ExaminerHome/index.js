import React from 'react';
import axios from 'axios';
import Radium from 'radium';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Flex, Box} from '@rebass/grid';

import Layout from '../../components/layout';
import Button from '../../components/button';
import TitleExam from '../../components/title-exam';
import messageLeft from "../../image/message-left.png";
import messageRight from "../../image/message-right.png";

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {info: ''};
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    data.append('file', this.fileInput.current.files[0]);
    data.append('record_id', this.props.id);
    axios.post('/api/examiner/upload', data, {headers: {authorization: `JWT ${this.props.token}`}}).then((res) => {
      if (res.status === 200) {
        this.setState({info: "上传成功"});
      }
    }).catch(error => {
      this.setState({info: "操作失败"});
      console.log(error);
    });
  }

  handleFinish(event) {
    let record_id = this.props.id;
    let ret = '';
    for (let it in {record_id}) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent({record_id}[it]) + '&';
    }
    axios.post('/api/examiner/finish', ret, {headers: {authorization: `JWT ${this.props.token}`}})
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

  render() {
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
              <span style={{color: 'white', fontSize: 'small'}}>上传检查结果</span>
            </Box>
            <Box ml={'auto'} mr={2} style={{cursor: 'pointer'}} onClick={this.props.onClose}>
              <img src={messageRight} alt='' style={{width: 15}}/>
            </Box>
          </Flex>
          <Flex justifyContent={'center'} mt={30}>
            <Box width={300} style={{color: 'white'}}>
              {!this.props.uploaded ? (<p>选择该患者对应的excel文件:</p>) : (<p>您已上传，请核对数据是否正确。</p>)}
              <input type="file" ref={this.fileInput}/>
              <br/>
              {!this.props.uploaded ? (<Button content="上传" onClick={this.handleSubmit.bind(this)}/>) :
                (<Button content="重新上传" onClick={this.handleSubmit.bind(this)}/>)}
              <div style={{marginTop: 10, fontSize: 14, color: 'red'}}>{this.state.info}</div>
              <br/>
              点击确认后，您将无法修改您的检查结果，请核对数据后点击确认。
              <br/>
              <Button content="确认" active={true} onClick={this.handleFinish.bind(this)}/>
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  }
}


class Reexam extends React.Component {

  handleUnFinish(event) {
    let record_id = this.props.id;
    let ret = '';
    for (let it in {record_id}) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent({record_id}[it]) + '&';
    }
    axios.post('/api/examiner/unfinish', ret, {headers: {authorization: `JWT ${this.props.token}`}})
      .then((res) => {
        this.props.onUpdate();
        this.props.onClose();
      })
      .catch(function (error) {
        console.log(error);
        alert('未知错误');
      })
  }

  render() {
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
              <span style={{color: 'white', fontSize: 'small'}}>重新检查</span>
            </Box>
            <Box ml={'auto'} mr={2} style={{cursor: 'pointer'}} onClick={this.props.onClose}>
              <img src={messageRight} alt='' style={{width: 15}}/>
            </Box>
          </Flex>
          <Flex justifyContent={'center'} mt={30}>
            <Box width={300} style={{color: 'white'}}>

              重新检查后，您可以重新上传excel文件来更新患者的数据。
              但是如果医生已经开始用此数据进行AI分析，您无法执行此操作。
              您确定要重新检查吗？
              <Button content="确认" active={true} onClick={this.handleUnFinish.bind(this)}/>
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  }
}

class PatientCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showBox: 0};
  }

  render() {
    return (
      <li style={{borderBottom: 'solid 1px #aaa', padding: '10px 0', listStyleType: 'none'}}>
        {this.state.showBox === 1 ? (
          <Upload onUpdate={this.props.onUpdate} id={this.props.id} uploaded={this.props.uploaded} token={this.props.token} onClose={() => this.setState({showBox: 0})}/>
        ) : (this.state.showBox === 2 ? (
          <Reexam onUpdate={this.props.onUpdate} id={this.props.id} token={this.props.token} onClose={() => this.setState({showBox: 0})}/>
        ) : null)}
        <Flex>
          <Box width={2 / 11}>
            {this.props.id}
          </Box>
          <Box width={2 / 11}>
            {this.props.date}
          </Box>
          <Box width={2 / 11}>
            <Link to={`/ex${this.props.id}`} style={{textDecoration: 'none'}}>
              {this.props.female} & {this.props.male}
            </Link>
          </Box>
          {/*<Box width={3 / 11}>*/}
            {/*{this.props.tags}*/}
          {/*</Box>*/}
          <Box width={2 / 11}>
            {this.props.stage === 3 ? (
              <Button content='上传' onClick={() => this.setState({showBox: 1})}/>
            ) : (
              <Button content='重新上传' onClick={() => this.setState({showBox: 2})}/>
            )}
          </Box>
        </Flex>
      </li>
    );
  }
}

class ExaminerHome extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch({
      type: 'PATIENTS-STAGE',
      stage: 3
    });
    axios.get('/api/examiner/patient_list?stage=3', {headers: {authorization: `JWT ${this.props.user.token}`}}).then(result => {
      if (result.status === 200) {
        this.props.dispatch({
          type: 'PATIENTS-GET-' + this.props.patients.stage,
          patients: result.data.patients
        });
      } else {
        alert('未知错误');
      }
    }).catch(error => {
      if (error.status === 403) {
        alert('您无权限');
      } else if (error.status === 401) {
        alert('您尚未登录');
      } else {
        alert('服务器内部错误');
      }
    });
  }

  handleChaneStage(new_stage) {
    axios.get(`/api/examiner/patient_list?stage=${new_stage}`, {headers: {authorization: `JWT ${this.props.user.token}`}}).then(result => {
      if (result.status === 200) {
        this.props.dispatch({
          type: 'PATIENTS-GET-' + new_stage,
          patients: result.data.patients
        });
      } else {
        alert('未知错误');
      }
    }).catch(error => {
      alert('错误');
    });
    this.props.dispatch({
      type: 'PATIENTS-STAGE',
      stage: new_stage
    });
  }

  render() {
    return (
      <Layout>
        <Flex alignItems={'center'}>
          <Box>
            <TitleExam title={'患者'} text={'档案列表'} picSrc={require('../../image/doctor-icon.png')}/>
          </Box>
          {/*<Box ml={'auto'}>*/}
          {/*<div style={{*/}
          {/*width: '550px',*/}
          {/*borderRadius: '18px',*/}
          {/*textAlign: 'right',*/}
          {/*border: 'solid 1px rgb(124,136,247)',*/}
          {/*outline: 'none',*/}
          {/*}}>*/}
          {/*<input type={'text'} placeholder='患者姓名、证件号码、档案编号、标签关键词等'*/}
          {/*style={{width: 550 - 85, borderWidth: 0, outline: 'none'}}/>*/}
          {/*<button style={{*/}
          {/*borderRadius: '18px',*/}
          {/*backgroundColor: 'rgb(124,136,247)',*/}
          {/*color: 'white',*/}
          {/*border: 'none',*/}
          {/*outline: 'none',*/}
          {/*padding: '2px 25px 0',*/}
          {/*cursor: 'pointer',*/}
          {/*verticalAlign: 'middle',*/}
          {/*}}>*/}
          {/*<img alt='' src={require('../../image/doctor-find.png')} height={20}/>*/}
          {/*</button>*/}
          {/*</div>*/}
          {/*</Box>*/}
        </Flex>
        <Flex mt={3}>
          <Box>
            <Button content={'检查中'} active={this.props.patients.stage === 3}
                    onClick={this.handleChaneStage.bind(this, 3)}/>
          </Box>
          <Box>
            <Button content={'检查完毕'} active={this.props.patients.stage === 4}
                    onClick={this.handleChaneStage.bind(this, 4)}/>
          </Box>
        </Flex>
        <Flex mt={3} style={{width: '100%'}}>
          <Box style={{width: '100%'}}>
            <ul style={{textAlign: 'center', color: 'rgb(76,76,76)',}}>
              <li style={{
                borderBottom: 'solid 1px #aaa',
                borderTop: 'solid 1px #aaa',
                padding: '10px 0',
                listStyleType: 'none',
                fontWeight: 'bold'
              }}>
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
                    {this.props.patients.stage === 3 ? '上传检查结果' : '操作'}
                  </Box>
                </Flex>
              </li>
              {this.props.patients[this.props.patients.stage].map((patient) => {
                let exam;
                for (exam in patient.exams) {
                  if (exam.kind === this.props.user.kind) {
                    break;
                  }
                }
                return (
                  <PatientCard key={patient.identity} token={this.props.user.token} uploaded={exam.uploaded} stage={this.props.patients.stage}
                               id={patient.identity} date={patient.book_date} female={patient.female}
                               male={patient.male} tags={patient.tags} onUpdate={this.handleChaneStage.bind(this, this.props.patients.stage)}/>
                );
              })}
            </ul>
          </Box>
        </Flex>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    patients: state.patients
  }
};

export default connect(mapStateToProps)(Radium(ExaminerHome));
