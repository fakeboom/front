import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router-dom';
import {Box, Flex} from '@rebass/grid';
import { connect } from 'react-redux';
import Logo from '../../components/logo';
import HeaderUser from '../../components/header-user';
import HeaderMore from '../../components/header-more';
import backgroundTop from '../../image/home-auth-background-top.png';
import backgroundBottom from '../../image/home-auth-background-bottom.png';
import backgroundHeart from '../../image/background-heart.png'
import Entry1 from '../../image/icon-condition1.png';
import Entry2 from '../../image/icon-condition2.png';
import Entry3 from '../../image/icon-condition3.png';
// import Entry4 from '../../image/icon-condition4.png';

const PatientEntry = Radium(({img, title, to}) => {
  return (
    <Link to={to} style={{textDecoration: 'none', outline: 'none'}}>
      <div style={{
        height: '210px',
        width: '180px',
        borderRadius: '30px',
        backgroundColor: '#4743ff',
        cursor: 'pointer',
        ':hover': {backgroundColor: '#ff9c88'},
      }}>
        <Flex justifyContent='center'>
          <Box mt={3}>
            <img height='130px' src={img} alt=''/>
          </Box>
        </Flex>
        <Flex justifyContent='center' mt={10}>
          <Box>
          <span style={{color: 'white', fontSize: 'medium', fontWeight: 'lighter', lineHeight: '30px'}}>
            {title}
          </span>
          </Box>
        </Flex>

      </div>
    </Link>
  );
});

class PatientHome extends React.Component {
  render() {
    return (
      <div style={{
        height: '100%', width: '100%',
        backgroundImage: `url(${backgroundTop}),url(${backgroundBottom}), url(${backgroundHeart}),
      linear-gradient(to bottom,#402cff,#7a8aff)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-520px -120px, right bottom, right top, 0 0',
        backgroundSize: 'auto, auto 54%, auto 20%, cover',
        overflow: 'auto',
      }}>
        <Flex alignItems='center' style={{height: 100}} mx={5}>
          <Box>
            <Logo/>
          </Box>
          <Box ml='auto'>
            <HeaderUser/>
          </Box>
          <Box ml={4}>
            <HeaderMore/>
          </Box>
        </Flex>
        <Flex justifyContent='center' mt={6}>
          <Box mr={15}>
            <PatientEntry img={Entry1} title={'一般情况'} to={'/general'}/>
          </Box>
          <Box>
            <PatientEntry img={Entry2} title={'体格检查'} to={'/physical'}/>
          </Box>
          <Box ml={15}>
            <PatientEntry img={Entry3} title={'临床检查'} to={'/clinical'}/>
          </Box>
        </Flex>
        <Flex justifyContent='center' mt={4}>
          <Box>
            <Link to={'/book'} style={{textDecoration: 'none', outline: 'none'}}>
              <div key='div' style={{
                height: '50px',
                width: '360px',
                display: 'table-cell',
                borderRadius: '15px',
                backgroundColor: '#4743ff',
                cursor: 'pointer',
                textAlign: 'center',
                verticalAlign: 'middle',
                ':hover': {backgroundColor: '#ff9c88'}
              }}>
            <span style={{color: 'white', fontWeight: 'lighter'}}>
              {this.props.user.stage === 0 ? '您尚未预约医师，点此进入预约界面' : (
                this.props.user.stage === 1 ? '您已经预约医师，点此查看预约详情' : (
                    this.props.user.stage === 3 ? '医师已为您分配检查任务，点此查看' : (
                      this.props.user.stage === 4 ? '您已完成检查任务，请联系医师，点此查看' : (
                        this.props.user.stage === 5 ? 'AI分析模块正在为您分析，请稍等' : (
                          this.props.user.stage === 6 ? '点此查看您的妊娠分析报告' : '异常'
                        )
                      )
                    )
                  )
                )
              }

              {/*<img height='14px' width='20px' src={Entry4} alt=''/>*/}
            </span>
              </div>
            </Link>
          </Box>
        </Flex>
        {/*<Flex mt={100} ml={100}>*/}
        {/*<Box>*/}
        {/*<Button content='下载' type='submit' active={true}/>*/}
        {/*</Box>*/}
        {/*<Box ml={20}>*/}
        {/*<span style={{*/}
        {/*color: 'white',*/}
        {/*fontWeight: 'lighter',*/}
        {/*fontSize: '12px',*/}
        {/*cursor: 'pointer',*/}
        {/*':hover': {opacity: 0.75}*/}
        {/*}}>导出电子报告</span>*/}
        {/*</Box>*/}
        {/*</Flex>*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
};

export default connect(mapStateToProps)(Radium(PatientHome));
