import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {Flex, Box} from '@rebass/grid';
import Layout from '../../components/layout';
import Button from "../../components/button";

class UserNews extends React.Component {
  render() {
    return (
      <Layout>
        <Flex>
          <Box>
            <h1>
              所有消息
            </h1>
          </Box>
        </Flex>
        <Flex>
          <Box>
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
        <ul style={{textAlign: 'center', color: 'rgb(76,76,76)',}}>
          <li style={{
            borderBottom: 'solid 1px #aaa',
            borderTop: 'solid 1px #aaa',
            padding: '10px 0',
            listStyleType: 'none',
            fontWeight: 'bold'
          }}>
            <Flex>
              <Box width={1 / 11}>
                已读
              </Box>
              <Box width={2 / 11}>
                时间
              </Box>
              <Box width={6.5 / 11}>
                内容
              </Box>
              <Box width={1.5 / 11}>
                相关页面
              </Box>
            </Flex>
          </li>
          {this.props.news.map((news) => {
            return (
              <li key={news.id} style={{borderBottom: 'solid 1px #aaa', padding: '10px 0', listStyleType: 'none'}}>
                <Flex>
                  <Box width={1 / 11}>
                    {news.state ? '√' : ''}
                  </Box>
                  <Box width={2 / 11}>
                    {news.time.substr(0, 10) + ' ' + news.time.substr(11, 5)}
                  </Box>
                  <Box width={6.5 / 11} style={{textAlign: 'left'}}>
                    {news.content}
                  </Box>
                  <Box width={1.5 / 11}>
                    {this.props.user.role === 'doctor' ? (
                      <Link to={'/id'+news.record}>
                        <Button content='跳转'/>
                      </Link>
                    ) : (
                      this.props.user.role === 'examiner' ? (
                        <Link to={'/ex'+news.record}>
                          <Button content='跳转'/>
                        </Link>
                      ) : (
                        <Link to={'/'}>
                          <Button content='跳转'/>
                        </Link>
                      )
                    )}
                  </Box>
                </Flex>
              </li>
            );
          })
          }
        </ul>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    news: state.news,
  };
};

export default connect(mapStateToProps)(UserNews);
