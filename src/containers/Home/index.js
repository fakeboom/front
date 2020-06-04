import React from 'react';
import {Flex, Box} from '@rebass/grid';
import Logo from '../../components/logo';
import Login from './login';
import Signup from './signup';
import Button from "../../components/button";
import Back from "../../image/backindex.jpg";

class Home extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          signup: 0
      };
  }

    render() {
        console.log("here5");
    return (
      <div style={{
        height: '100%',
        width: '100%',
        overflow: 'auto',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${Back})` ,
        backgroundPosition: `left top, right bottom, left bottom`,
        backgroundAttachment: 'fixed, fixed, fixed, fixed',
        backgroundSize: `cover`
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
