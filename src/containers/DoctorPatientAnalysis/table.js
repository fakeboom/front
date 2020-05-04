import React from 'react';
import dic from '../../dic'

const Table = (props) => {
    const list = () => {
        let res = [];
        let i = 1;
        let cname = '';
        let old = [];
        let state = 0;
        for (var key in props.analysis.reasons) {
            for (var k in dic) {
                if (k === key) {
                    cname = dic[k];
                }
            }
            for (var n = 0; n < old.length; n++) {
                if (cname === old[n]) {
                    state = 1;
                }
            }
            if (state === 0) {
                old.push(cname);
                res.push(
                    <tr key={key} align={'center'}>
                        <td style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#95A3F4' }}>
                            <span>{i}</span>
                        </td>
                        <td style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#95A3F4' }}>
                            <span>{cname}</span>
                        </td>
                        <td style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#95A3F4' }}>
                            <span>{props.analysis.reasons[key]}</span>
                        </td>
                        {/*<td style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#95A3F4' }}>*/}
                        {/*<span></span>*/}
                        {/*</td>*/}
                        {/*<td style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#95A3F4' }}>*/}
                        {/*<span></span>*/}
                        {/*</td>*/}
                    </tr>
                );
                i++;
            }
            else {
                state = 0;
            }
        }
        return res;
    };
  
  return (
    <div>
      <table cellPadding={'18px'} cellSpacing={'0px'}
             style={{borderWidth: '1px', borderStyle: 'solid', borderColor: '#95A3F4'}}>
        <tbody>
        <tr>
          <th colSpan={'3'} style={{borderWidth: '1px', borderStyle: 'solid', borderColor: '#95A3F4'}}>
            <span style={{fontSize: '22px', color: '#95A3F4', fontWeight: 'lighter'}}>妊娠分析报告</span>
            <br/>
            <span style={{fontSize: '12px', color: '#95A3F4', fontWeight: 'lighter'}}>Pregnancy analysis report</span>
          </th>
        </tr>
        <tr>
          <th style={{borderWidth: '1px', borderStyle: 'solid', borderColor: '#95A3F4'}}>
            <span style={{fontSize: '23px', color: '#95A3F4', fontWeight: 'lighter'}}>重要性顺序</span>
          </th>
          <th style={{borderWidth: '1px', borderStyle: 'solid', borderColor: '#95A3F4'}}>
            <span style={{fontSize: '23px', color: '#95A3F4', fontWeight: 'lighter'}}>妊娠风险因素</span>
          </th>
          <th style={{borderWidth: '1px', borderStyle: 'solid', borderColor: '#95A3F4'}}>
            <span style={{fontSize: '23px', color: '#95A3F4', fontWeight: 'lighter'}}>妊娠风险系数</span>
          </th>
          {/*<th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#95A3F4' }}>*/}
          {/*<span style={{ fontSize: '11px', color: '#95A3F4', fontWeight: 'lighter' }}>女性<br />可见</span>*/}
          {/*</th>*/}
          {/*<th style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#95A3F4' }}>*/}
          {/*<span style={{ fontSize: '13px', color: '#95A3F4', fontWeight: 'lighter' }}>男性<br />可见</span>*/}
          {/*</th>*/}
        </tr>
        {list()}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
