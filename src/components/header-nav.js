import React from 'react';
import {Link} from 'react-router-dom';
import iconArrow from '../image/icon-arrow.png';
import Button from "./button";

const Arrow = () => {
  return (
    <span style={{
      display: 'inline-block',
      padding: '0 15px',
      backgroundImage: `url(${iconArrow})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: '14px, 14px',
      height: 14
    }}/>
  )
};

class HeaderNav extends React.Component {
  render() {
    const pathname = window.location.pathname.split('/');
    let level = 0;
    let path = [];
    for (let i = 0; i < pathname.length; i++) {
      if (pathname[i] !== '') {
        path.push(pathname[i]);
        level += 1;
      }
    }
    return (
      <div style={{color: 'white'}}>
        <Link to={'/'}><Button content={'主页'} active={level === 0}/></Link>
        {level > 0 ? (
          <span>
            <Arrow/>
            {/^id\d+$/.test(path[0]) ? (
              <Link to={'/' + path[0]}><Button content={path[0].substr(2)} active={level === 1}/></Link>
            ) : (/^ex\d+$/.test(path[0]) ? (
              <Link to={'/' + path[0]}><Button content={path[0].substr(2)} active={level === 1}/></Link>
            ) : (path[0] === 'news') ? (
              <Link to={'/' + path[0]}><Button content={'所有消息'} active={level === 1}/></Link>
            ) : (
              <span>
                <Link to={'./book'}><Button content={'诊断业务'} active={path[0] === 'book'}/></Link>
                <Link to={'./general'}><Button content={'一般情况'} active={path[0] === 'general'}/></Link>
                <Link to={'./physical'}><Button content={'体格检查'} active={path[0] === 'physical'}/></Link>
                <Link to={'./clinical'}><Button content={'临床检查'} active={path[0] === 'clinical'}/></Link>
                <Link to={'./analysis'}><Button content={'妊娠分析'} active={path[0] === 'analysis'}/></Link>
              </span>
            ))}
          </span>
        ) : null}
        {level > 1 ? (
          <span>
            <Arrow/>
              <Link to={'./general'}><Button content={'一般情况'} active={path[1] === 'general'}/></Link>
              <Link to={'./physical'}><Button content={'体格检查'} active={path[1] === 'physical'}/></Link>
              <Link to={'./clinical'}><Button content={'临床检查'} active={path[1] === 'clinical'}/></Link>
              <Link to={'./analysis'}><Button content={'妊娠分析'} active={path[1] === 'analysis'}/></Link>
          </span>
        ) : null}
      </div>
    );
  }
}

export default HeaderNav;
