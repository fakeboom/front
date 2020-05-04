import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Flex, Box} from '@rebass/grid';
import Button from '../../components/button';
import {connect} from 'react-redux';


const Title4 = () => {
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
        操作
      </Box>
    </Flex>
  )
};

class Card4 extends React.Component {
  handleStart() {
    let record_id = this.props.id;
    let ret = '';
    for (let it in {record_id}) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent({record_id}[it]) + '&';
    }
    axios.post('/api/doctor/analyse/start', ret, {headers: {authorization: `JWT ${this.props.token}`}})
      .then((res) => {
        alert('AI模型即将开始分析');
        this.props.onUpdate();
      })
      .catch(function (error) {
        console.log(error);
        alert('未知错误');
      })
  }

  render() {
    var {id, date, female, male, tags} = this.props;
    return (
      <li style={{borderBottom: 'solid 1px #aaa', padding: '10px 0', listStyleType: 'none'}}>
        <Flex>
          <Box width={2 / 11}>
            {id}
          </Box>
          <Box width={2 / 11}>
            {date}
          </Box>
          <Box width={2 / 11}>
            <Link to={`/id${id}`} style={{textDecoration: 'none'}}>
              {female} & {male}
            </Link>
          </Box>
          {/*<Box width={3 / 11}>*/}
            {/*{tags}*/}
          {/*</Box>*/}
          <Box width={2 / 11}>
            <Button content="开始分析" onClick={this.handleStart.bind(this)}/>
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
Card4 = connect(mapStateToProps)(Card4);
export {Title4, Card4};