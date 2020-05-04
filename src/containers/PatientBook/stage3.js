import React from 'react';
import axios from 'axios';
import Radium from 'radium';
import {connect} from 'react-redux';
// import {Flex, Box} from '@rebass/grid';

class PatientBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {exams: []};
    axios.get('/api/patient/exam_list', {headers: {authorization: `JWT ${this.props.user.token}`}}).then(result => {
      this.setState({exams: result.data.exams});
    }).catch(error => {
    });
  }

  render() {
      return (
        <div>
          您的医师已经为您分配检查任务：
          {this.state.exams.map(exam =>
            <p key={exam.kind}>{exam.state ? '【已完成】' : '【未完成】'}请到本医院的{exam.examiner.address}，寻找{exam.examiner.name}，进行{['', '一般情况检查', '体格检查', '临床检查'][exam.kind]}</p>
          )}
        </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps)(Radium(PatientBook));
