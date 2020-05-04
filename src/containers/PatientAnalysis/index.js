import React, {Component} from 'react';
import Layout from "../../components/layout";
import GetExamination from "../../util/get-examination";
import {Box, Flex} from "@rebass/grid";
import AnalysisTitle1 from "../../image/AnalysisTitle-1.png";
import AnalysisTitle2 from "../../image/AnalysisTitle-2.png";
import TitleExam from "../../components/title-exam";
import Percent from './percent';
import Table from './table';
// import ItemDate from '../../components/item-date';
// import Button from "../../components/button";
import ItemAdvice from "../../components/item-advice";
import {connect} from "react-redux";

class Home extends Component {
  render() {
    return (
      <Layout>
        <div style={{width: 900, margin: '0 auto'}}>
          <Flex>
            <Box>
              <TitleExam picSrc={AnalysisTitle1} text={'区间0~1 数字越小越安全'} title={'妊娠风险系数\n'}/>
            </Box>
          </Flex>
          <Flex justifyContent={'center'} mt={4} mb={3}>
            <Box>
              <Percent value={this.props.examination.analysis ? this.props.examination.analysis.output : null} mx={3}/>
            </Box>
          </Flex>
          <Flex>
            <Box>
              <TitleExam picSrc={AnalysisTitle2} text={'各项妊娠风险因素及妊娠风险系数的展示'} title={'妊娠分析报告\n'}/>
            </Box>
          </Flex>
          <Flex justifyContent={'center'}>
            <Box>
              {this.props.examination.analysis ? <Table analysis={this.props.examination.analysis}/> : null}
            </Box>
          </Flex>
          {/*<Flex>
              <Box style={{marginTop: '90px', marginLeft: '650px'}}>
                <Button content={'完成编辑'} style={{marginRight: '0px'}}/>
                <ItemDate date={'2019-04-16'}/>
              </Box> 
            </Flex>*/}
          <Flex>
            <Box width={1 / 2}>
              <ItemAdvice editable={true} sex={0} kind={4} text={this.props.examination.analysis_care_w}/>
            </Box>
            <Box width={1 / 2}>
              <ItemAdvice editable={true} sex={1} kind={4} text={this.props.examination.analysis_care_h}/>
            </Box>
          </Flex>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    examination: state.examination,
  }
};

export default GetExamination(connect(mapStateToProps)(Home));
