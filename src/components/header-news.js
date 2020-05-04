import React from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Flex, Box} from '@rebass/grid';
import Button from "./button";
import messageLeft from '../image/message-left.png';
import axios from "axios";

const NewsElement = Radium(({time, content, record}) => {
  return (
    <div style={[
      {minHeight: 30, padding: '0 10px', cursor: 'pointer', verticalAlign: 'bottom', ':hover': {opacity: 0.7}},
    ]}>
      <p style={{margin: '0 5px', fontSize: 9}}>{time.substr(0, 10) + ' ' + time.substr(11, 5)}</p>
      <p style={{margin: '0 5px', fontSize: 14}}>{content}</p>
    </div>
  );
});

class HeaderNews extends React.Component {
  render() {
    let cnt = 0;
    let nums = 0;
    for (let i = 0; i < this.props.news.length; i++) {
      if (!this.props.news[i].state) {
        cnt++;
      }
    }
    return (
      <div>
        <div key='keyForNews' style={{color: 'white', verticalAlign: 'middle', ':hover': {}}}>
          <img src={messageLeft} alt='' style={{verticalAlign: 'middle'}}/>
          {cnt > 0 ? (
            <div style={{
              display: 'inline-block',
              width: 10,
              height: 10,
              backgroundColor: 'red',
              borderRadius: 10,
              marginLeft: -5,
              verticalAlign: 'top'
            }}/>
          ) : ''}
          <span style={{verticalAlign: 'middle', marginLeft: 5, cursor: 'default'}}>消息</span>
          {Radium.getState(this.state, 'keyForNews', ':hover') ? (
            <div style={{
              position: 'absolute',
              minHeight: 90,
              width: 250,
              padding: 10,
              marginLeft: -100,
              borderRadius: 10,
              background: '#5555FF'
            }}>
              <Flex mb={2}>
                <Box width={1 / 2}>
                  <Link to={'/news'}>
                    <Button content={'查看所有'}/>
                  </Link>
                </Box>
                <Box width={1 / 2}>
                  <Button content={'全部设为已读'} onClick={()=>{
                    axios.post('/api/user/news/read', '', {headers: {authorization: `JWT ${this.props.user.token}`}})
                      .then(() => {
                        this.props.dispatch({type:'NEWS-READ'});
                      })
                      .catch((error)=> {
                        console.log(error);
                      });
                  }}/>
                </Box>
              </Flex>
              {cnt === 0 ? '您没有新的消息。' : (
                <div>
                  {this.props.news.map(news => {
                    if (nums < 5 && !news.state) {
                      nums++;
                      return (
                        <NewsElement key={news.id} time={news.time} content={news.content} record={news.record}/>
                      );
                    } else if (nums === 5 && !news.state) {
                      nums++;
                      return (
                        <div key={'bottom'} style={{fontSize: 9}}>最多显示5条新消息，还有其它未读消息未显示</div>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
                )}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    news: state.news,
  };
};

export default connect(mapStateToProps)(Radium(HeaderNews));
