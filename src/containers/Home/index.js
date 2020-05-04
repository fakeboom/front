import React from 'react';
import {Flex, Box} from '@rebass/grid';
import Logo from '../../components/logo';
import Login from './login';
import Signup from './signup';
import backTop from '../../image/home-auth-background-top.png';
import backBottom from '../../image/home-auth-background-bottom.png';
import backChild from '../../image/home-auth-background-child.png';
import Button from "../../components/button";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {signup: 0};
  }

  render() {
    return (
      <div style={{
        height: '100%',
        width: '100%',
        overflow: 'auto',
        backgroundImage: `url(${backTop}), url(${backBottom}), url(${backChild}), linear-gradient(180deg,#402cff,#7a8aff)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `left top, right bottom, left bottom`,
        backgroundAttachment: 'fixed, fixed, fixed, fixed',
        backgroundSize: `auto 45%, auto 50%, auto 80%, cover`
      }}>
        <Flex>
          <Box style={{marginTop: '5vh', marginLeft: 'auto', marginRight: '150px'}}>
            <Logo/>
          </Box>
        </Flex>
        <Flex>
          <Box style={{marginTop: '10px', marginLeft: 'auto', marginRight: '150px'}}>
            {this.state.signup ? (
              <Button content='已有账号?点我登录' onClick={() => this.setState({signup: 0})}/>
            ) : (
              <Button content='没有账号?点我注册' onClick={() => this.setState({signup: 1})}/>
            )}
          </Box>
        </Flex>
        <Flex>
          {this.state.signup ? <Box style={{marginTop: '5vh', marginLeft: 'auto', marginRight: '20%'}}><Signup/></Box> :
            <Box style={{marginTop: '15vh', marginLeft: 'auto', marginRight: '20%'}}><Login/></Box>}
        </Flex>
      </div>
    );
  }
}

export default Home;
