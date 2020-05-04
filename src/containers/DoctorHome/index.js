import React from 'react';
import axios from 'axios';
import Radium from 'radium';
import {connect} from 'react-redux';
import {Flex, Box} from '@rebass/grid';

import Layout from '../../components/layout';
import Button from '../../components/button';
import TitleExam from '../../components/title-exam';
import {Title1, Card1} from './card1';
import {Title2, Card2} from './card2';
import {Title3, Card3} from './card3';
import {Title4, Card4} from './card4';
import {Title5, Card5} from './card5';
import {Title6, Card6} from './card6';

class DoctorHome extends React.Component {
  constructor(props) {
    super(props);
    axios.get('/api/doctor/patient_list?stage=1', {headers: {authorization: `JWT ${this.props.user.token}`}}).then(result => {
      this.props.dispatch({
        type: 'PATIENTS-GET-' + this.props.patients.stage,
        patients: result.data.patients
      });
    }).catch(error => {

    });
  }

  handleChaneStage(new_stage) {
    axios.get(`/api/doctor/patient_list?stage=${new_stage}`, {headers: {authorization: `JWT ${this.props.user.token}`}}).then(result => {
        this.props.dispatch({
          type: 'PATIENTS-GET-' + new_stage,
          patients: result.data.patients
        });
    }).catch(error => {
        alert('您无权限');
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
            <Button content={'已预约'} active={this.props.patients.stage === 1}
                    onClick={this.handleChaneStage.bind(this, 1)}/>
          </Box>
          <Box>
            <Button content={'未分配'} active={this.props.patients.stage === 2}
                    onClick={this.handleChaneStage.bind(this, 2)}/>
          </Box>
          <Box>
            <Button content={'检查中'} active={this.props.patients.stage === 3}
                    onClick={this.handleChaneStage.bind(this, 3)}/>
          </Box>
          <Box>
            <Button content={'检查完毕'} active={this.props.patients.stage === 4}
                    onClick={this.handleChaneStage.bind(this, 4)}/>
          </Box>
          <Box>
            <Button content={'分析中'} active={this.props.patients.stage === 5}
                    onClick={this.handleChaneStage.bind(this, 5)}/>
          </Box>
          <Box>
            <Button content={'分析完毕'} active={this.props.patients.stage === 6}
                    onClick={this.handleChaneStage.bind(this, 6)}/>
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
                {this.props.patients.stage === 1 ? <Title1/> : (
                  this.props.patients.stage === 2 ? <Title2/> : (
                    this.props.patients.stage === 3 ? <Title3/> : (
                      this.props.patients.stage === 4 ? <Title4/> : (
                        this.props.patients.stage === 5 ? <Title5/> : (
                          this.props.patients.stage === 6 ? <Title6/> : (
                            null
                          )
                        )
                      )
                    )
                  )
                )}
              </li>
              {this.props.patients[this.props.patients.stage].map((patient) => {
                return (
                  this.props.patients.stage === 1 ?
                    <Card1 key={patient.identity} id={patient.identity} date={patient.book_date} female={patient.female}
                           male={patient.male} tags={patient.tags} onUpdate={this.handleChaneStage.bind(this, 1)}/> : (
                      this.props.patients.stage === 2 ?
                        <Card2 key={patient.identity} id={patient.identity} date={patient.book_date}
                               female={patient.female} male={patient.male} tags={patient.tags}
                               onUpdate={this.handleChaneStage.bind(this, 2)}/> : (
                          this.props.patients.stage === 3 ?
                            <Card3 key={patient.identity} id={patient.identity} date={patient.book_date}
                                   female={patient.female} male={patient.male} tags={patient.tags} exams={patient.exams}
                                   onUpdate={this.handleChaneStage.bind(this, 3)}/> : (
                              this.props.patients.stage === 4 ?
                                <Card4 key={patient.identity} id={patient.identity} date={patient.book_date}
                                       female={patient.female} male={patient.male} tags={patient.tags}
                                       onUpdate={this.handleChaneStage.bind(this, 4)}/> : (
                                  this.props.patients.stage === 5 ?
                                    <Card5 key={patient.identity} id={patient.identity} date={patient.book_date}
                                           female={patient.female} male={patient.male} tags={patient.tags}
                                           onUpdate={this.handleChaneStage.bind(this, 5)}/> : (
                                      this.props.patients.stage === 6 ?
                                        <Card6 key={patient.identity} id={patient.identity} date={patient.book_date}
                                               female={patient.female} male={patient.male} tags={patient.tags}
                                               onUpdate={this.handleChaneStage.bind(this, 6)}/> : (
                                          null
                                        )
                                    )
                                )
                            )
                        )
                    )
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

export default connect(mapStateToProps)(Radium(DoctorHome));
