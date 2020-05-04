import React from 'react';
import Radium from 'radium';


class PatientBook extends React.Component {
  render() {
    return (
      <div>
        您的所有检查与诊断分析已经结束，感谢您光临本医院。请前往其它页面查看体检结果与分析结果。
      </div>
    );
  }
}

export default Radium(PatientBook);
