import React from 'react';
import City from './city';
import Expert from './expert';
import Institution from './institution';

class Signup extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
       type :'expert',
    };
  }

  handelChange(event) {
      if (event.target.name === 'type') {
          this.setState({ type: event.target.value });
      }
  }
  render() {
    return (
      <div>
            <h1 style={{ color: '#FFFFFF', fontWeight: 'normal', fontSize: '28px' }}>注册</h1>
            <div>
                <label>
                    <select name="type" value={this.state.type} onChange={this.handelChange.bind(this)}>
                        <option value="expert">专家</option>
                        <option value="city">城市</option>
                        <option value="institution">单位</option>
                    </select>
                </label>
            </div>
            
            {
                (() => {
                switch (this.state.type) {
                    case "expert": return <Expert />; break;
                    case "city": return <City />; break;
                    case "institution": return <Institution />; break;
                    }
                })()
             }
      </div>
    );
  }
}

export default Signup;
