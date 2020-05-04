import React from 'react';
import axios from 'axios';
import Radium from 'radium';
import {connect} from 'react-redux';
import {Flex, Box} from '@rebass/grid';

import TitleExam from '../../components/title-exam';
import Button from '../../components/button';

class DoctorCard extends React.Component {
  render() {
    return (
      <li style={{borderBottom: 'solid 1px #aaa', padding: '10px 0', listStyleType: 'none'}}>
        <Flex>
          <Box width={1 / 10}>
            {this.props.id}
          </Box>
          <Box width={1 / 10}>
            {this.props.name}
          </Box>
          <Box width={1 / 10}>
            {this.props.title}
          </Box>
          <Box width={3 / 10}>
            {this.props.description}
          </Box>
          <Box width={2 / 10}>
            {this.props.rest} / {this.props.total}
          </Box>
          <Box width={2 / 10}>
            <Button content={'挂号'} onClick={() => {
              const identity = this.props.id;
              const date = this.props.doctors.date;
              let ret = '';
              for (let it in {identity, date}) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent({identity, date}[it]) + '&';
              }
              axios.post('/api/patient/register', ret, {headers: {authorization: `JWT ${this.props.user.token}`}}).then(() => {
                alert('预约成功');
              }).catch(error => {
                alert('预约失败');
                console.log(error);
              });
            }}/>
          </Box>
        </Flex>
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    doctors: state.doctors,
  }
};

DoctorCard = connect(mapStateToProps)(DoctorCard);

class PatientBook extends React.Component {
  constructor(props) {
    super(props);
    this.handleChaneDate(props.doctors.date);
  }

  handleChaneDate(new_date) {
    axios.get(`/api/patient/doctor_list?date=${new_date}`, {headers: {authorization: `JWT ${this.props.user.token}`}}).then(result => {
      this.props.dispatch({
        type: 'DOCTORS-GET-' + new_date,
        doctors: result.data.doctors
      });
    }).catch(error => {
    });
    this.props.dispatch({
      type: 'DOCTORS-DATE',
      date: new_date
    });
  }

  render() {
    return (
      <div>
        <Flex alignItems={'center'}>
          <Box>
            <TitleExam title={'挂号'} text={'医师列表'} picSrc={require('../../image/doctor-icon.png')}/>
          </Box>
        </Flex>
        <Flex mt={3}>
          <Box>
            <Button content={'今天 '} active={this.props.doctors.date === 0} onClick={this.handleChaneDate.bind(this, 0)}/>
          </Box>
          <Box>
            <Button content={'明天'} active={this.props.doctors.date === 1} onClick={this.handleChaneDate.bind(this, 1)}/>
          </Box>
          <Box>
            <Button content={'后天'} active={this.props.doctors.date === 2} onClick={this.handleChaneDate.bind(this, 2)}/>
          </Box>
          <Box>
            <Button content={'大后天'} active={this.props.doctors.date === 3} onClick={this.handleChaneDate.bind(this, 3)}/>
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
                  <Box width={1 / 10}>
                    医师编号
                  </Box>
                  <Box width={1 / 10}>
                    姓名
                  </Box>
                  <Box width={1 / 10}>
                    职称
                  </Box>
                  <Box width={3 / 10}>
                    简介
                  </Box>
                  <Box width={2 / 10}>
                    剩余人数
                  </Box>
                  <Box width={2 / 10}>
                    挂号
                  </Box>
                </Flex>
              </li>
              {this.props.doctors[this.props.doctors.date].map(doctor => {
                return <DoctorCard key={doctor.identity} name={doctor.name} id={doctor.identity} title={doctor.title} description={doctor.description} rest={doctor.rest} total={doctor.total}/>
              })}
            </ul>
          </Box>
        </Flex>
      </div>
    );
  }
}



export default connect(mapStateToProps)(Radium(PatientBook));
