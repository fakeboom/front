import React from 'react';
import Radium from 'radium';

import iconMore from '../image/icon-more.png';
import iconLogout from '../image/icon-logout.png';
import iconPassword from '../image/icon-password.png';
import iconContact from '../image/icon-contact.png';
import Message from './message';
import MessagePassword from './message-password';

const HeaderMoreElement = Radium(({icon, name, onClick}) => {
  return (
    <div onClick={onClick} style={{padding: '0 10px', cursor: 'pointer', fontSize: 15, verticalAlign: 'bottom', ':hover': {opacity: '0.75'}}}>
      <span style={{width: 21, display: 'inline-block', textAlign: 'center'}}><img src={icon} alt='' style={{verticalAlign: 'middle'}}/></span>
      <span style={{margin: '0 5px', verticalAlign: 'middle'}}>{name}</span>
    </div>
  );
});

class HeaderMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showContact: false, showPassword: false}
  }
  handleLogout() {
    localStorage.clear();
    window.location.href='/';
  }
  render() {
    return (
      <div>
        <div key='keyForMore' style={{color: 'white', verticalAlign: 'middle', ':hover': {}}}>
          <img src={iconMore} alt='' style={{verticalAlign: 'middle'}}/>
          <span style={{verticalAlign: 'middle', marginLeft: 5, cursor: 'default'}}>更多</span>
          {Radium.getState(this.state, 'keyForMore', ':hover') ? (
            <div style={{position: 'absolute', marginLeft: -11, borderRadius: 10, background: '#5555FF'}}>
              <HeaderMoreElement icon={iconLogout} name={'注销用户'} onClick={this.handleLogout.bind(this)}/>
              <HeaderMoreElement icon={iconPassword} name={'修改密码'} onClick={()=>this.setState({showPassword: true})}/>
              <HeaderMoreElement icon={iconContact} name={'联系我们'} onClick={()=>this.setState({showContact: true})}/>
            </div>
          ) : null}
        </div>
        {this.state.showContact ? (
          <Message content={'请发邮件至系统管理员: qinhao@buaa.edu.cn'} title={'联系我们'} onClose={()=>this.setState({showContact: false})}/>
        ) : null}
        {this.state.showPassword ? (
          <MessagePassword onClose={()=>this.setState({showPassword: false})}/>
        ) : null}
      </div>
    );
  }
}

export default Radium(HeaderMore);
