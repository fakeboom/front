import React from 'react';
import axios from 'axios';
import Radium from 'radium';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Flex, Box} from '@rebass/grid';
import Layout from '../../components/layout';

import Entry1 from '../../image/DPGeneral.png';
import Entry2 from '../../image/DPPhysical.png';
import Entry3 from '../../image/DPClinical.png';
import Entry4 from '../../image/DPAnalysis.png';

const DoctorEntry = Radium(({img, title, to}) => {
  return (
      <div>
          <Flex justifyContent='center'>
            <Box>
              <img src={img} alt=''/>
            </Box>
          </Flex>
          <Flex justifyContent='center' mt={10}>
            <Box>
              <Link to={window.location.pathname + to} style={{textDecoration: 'none', outline: 'none'}}>
                <div style={{
                  height: '20px',
                  width: '80px',
                  display: 'table-cell',
                  borderRadius: '15px',
                  backgroundColor: '#7C88F7',
                  cursor: 'pointer',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  ':hover': {backgroundColor: '#ff9c88'}
                }}>
                  <span style={{color: 'white', fontWeight: 'lighter', fontSize: 'small'}}>
                    {title}
                  </span>
                </div>
              </Link>
            </Box>
          </Flex>
      </div>

  );
});

const PatientMessage = ({number, name, age, id}) => {
  return (
      <div  style={{color: '#4C4C4C'}}>
        <Flex>
          <Box>
            编号：{number}
          </Box>
        </Flex>
        <Flex>
          <Box>
            姓名：{name}
          </Box>
        </Flex>
        <Flex>
          <Box>
            年龄：{age}
          </Box>
        </Flex>
        <Flex>
          <Box>
            身份证号：{id}
          </Box>
        </Flex>
      </div>

  );
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {patient: {}};
    axios.get('/api/examiner/patient?id='+window.location.pathname.split('/')[1].substr(2), {headers: {authorization: `JWT ${this.props.user.token}`}}).then(result => {
      this.setState({patient: result.data});
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

  render() {
    return (
      <Layout>
        <Flex>
          <Box width={1/2}>
            女士
            <PatientMessage number={window.location.pathname.split('/')[1].substr(2)} name={this.state.patient.female} age={this.state.patient.fage} id={this.state.patient.fid}/>
          </Box>
          <Box width={1/2}>
            男士
            <PatientMessage number={window.location.pathname.split('/')[1].substr(2)} name={this.state.patient.male} age={this.state.patient.mage} id={this.state.patient.mid}/>
          </Box>
        </Flex>
        {/*<Flex mt={50}>*/}
          {/*<Box>*/}
            {/*<span style={{color: '#7C88F7'}}>标签：{this.state.patient.tags}</span>*/}
          {/*</Box>*/}
        {/*</Flex>*/}
        <Flex mt={50}>
          <Box>
            <DoctorEntry img={Entry1} title={'一般情况'} to={'/general'}/>
          </Box>
          <Box ml={100}>
            <DoctorEntry img={Entry2} title={'体格检查'} to={'/physical'}/>
          </Box>
          <Box ml={100}>
            <DoctorEntry img={Entry3} title={'临床检查'} to={'/clinical'}/>
          </Box>
          <Box ml={100}>
              <Flex>
                <Box>
                  <Link to={window.location.pathname + '/analysis'} style={{textDecoration: 'none', outline: 'none'}}>
                    <img src={Entry4} style={{width: '90%', height: 'auto'}} alt=''/>
                  </Link>
                </Box>
              </Flex>
              <Flex mt={'5px'}>
                <Box>
                  <span style={{color: '#4C4C4C'}}> 妊娠分析</span>
                </Box>
              </Flex>
              <Flex mt={'5px'}>
                <Box>
                  <span style={{color: '#4C4C4C'}}> 状态：</span>
                </Box>
                <Box>
                  <span style={{color: '#ff9c88'}}>{
                    this.state.patient.stage === 0 ? '未预约' : (
                      this.state.patient.stage === 1 ? '已预约' : (
                        this.state.patient.stage === 2 ? '未分配' : (
                          this.state.patient.stage === 3 ? '检查中' : (
                            this.state.patient.stage === 4 ? '检查完毕' : (
                              this.state.patient.stage === 5 ? '分析中' : (
                                this.state.patient.stage === 6 ? '分析完毕' : (
                                  '?'
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  }</span>
                </Box>
              </Flex>
          </Box>
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

export default connect(mapStateToProps)(Home);
