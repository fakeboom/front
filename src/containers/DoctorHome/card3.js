import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Flex, Box} from '@rebass/grid';
import Button from '../../components/button';
import messageLeft from '../../image/message-left.png';
import messageRight from '../../image/message-right.png';
import {connect} from 'react-redux';

const Title3 = () => {
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
        检查进度
      </Box>
    </Flex>
  )
};

class Rate extends React.Component {
  handleRearrage() {
    var n = 0;
    for (var i = 0; i < this.props.exams.length; i++) {
      if (this.props.exams[i].state === true) {
        n++;
      }
    }
    if (n !== 0) {
      alert("已经开始检查不能重新分配")
    } else {
      let record_id = this.props.id;
      let ret = '';
      for (let it in {record_id}) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent({record_id}[it]) + '&';
      }
      axios.post('/api/doctor/exam/unfinish', ret, {headers: {authorization: `JWT ${this.props.token}`}})
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
  }

  render() {
    const list = (exams) => {
      const res = [];
      for (var i = 0; i < exams.length; i++) {
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
        if (exams[i].state === true) {
          res.push("已完成");
        } else {
          res.push("未完成");
        }
        res.push(<br/>)
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
              <span style={{color: 'white', fontSize: 'small'}}>具体进度</span>
            </Box>
            <Box ml={'auto'} mr={2} style={{cursor: 'pointer'}} onClick={this.props.onClose}>
              <img src={messageRight} alt='' style={{width: 15}}/>
            </Box>
          </Flex>
          <Flex justifyContent={'center'} mt={30}>
            <Box width={300} style={{color: 'white'}}>
              {list(this.props.exams)}
              <Button content="重新分配" onClick={this.handleRearrage.bind(this)}/>
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  }
}

class Card3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
  }

  render() {
    var {id, date, female, male, tags, exams} = this.props;
    var checked = () => {
      var n = 0;
      for (var i = 0; i < exams.length; i++) {
        if (exams[i].state === true) {
          n++;
        }
      }
      return "" + n + "/3";
    };
    return (
      <li style={{borderBottom: 'solid 1px #aaa', padding: '10px 0', listStyleType: 'none'}}>
        {this.state.visible ? <Rate id={id} token={this.props.token} exams={exams} onUpdate={this.props.onUpdate} onClose={() => this.setState({visible: false})}/> : null}
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
            <Button content={checked()} onClick={() => this.setState({visible: true})}/>
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
Card3 = connect(mapStateToProps)(Card3);
export {Title3, Card3};