import React from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import {Box, Flex} from '@rebass/grid';

import Layout from '../../components/layout';
import ItemIcon from '../../components/item-icon';
import ItemSmall from '../../components/item-small';
import ItemNorm from '../../components/item-norm';
import TitleExam from '../../components/title-exam';
import TitleSmall from '../../components/title-small';
// import ItemDate from '../../components/item-date';
import ItemAdvice from '../../components/item-advice';
import physicalTitle from '../../image/physical-title.png';
import physicalL1R1 from '../../image/physical-L1-R1.png';
import physicalL2 from '../../image/physical-L2.png';
import physicalR2 from '../../image/physical-R2.png';
import Routine1 from '../../image/routine-1.png';
import Routine2 from '../../image/routine-2.png';
import Routine3 from '../../image/routine-3.png';
import Routine4 from '../../image/routine-4.png';
import Routine5 from '../../image/routine-5.png';
import Routine6 from '../../image/routine-6.png';
import ExaminerGetExamination from '../../util/examiner-get-examination';

class Home extends React.Component {
  render() {
    const bodyStyle = {position: 'absolute', cursor: 'pointer', transition: 'all 0.15s', ':hover': {transform: 'scale(1.12)', filter: 'drop-shadow(0 0 5px red)'}};
    return (
      <Layout>
        <Flex>
          <Box>
            <Flex style={{marginLeft: '-60px'}}>
              <Box>
                <TitleExam picSrc={physicalTitle} text={'包括常规检查和生殖系统检查'} title={'体格检查'} />
              </Box>
            </Flex>
            <Flex justifyContent={'center'}>
              <Box>
                <div style={{width: 900, height: 500, position: 'relative',  margin: '20px auto 0', borderColor: '#8C8C8C', borderStyle: 'solid', borderWidth:'4px'}}>
                  <img alt="" src={require('../../image/body-back-01.png')}  height={650}  style={{position: 'absolute', top: "10px", left: "250px", zIndex: "1"}}/>
                  <img alt="body-liver" key={'body-liver-1'} src={require('../../image/body-liver-01.png')} style={[bodyStyle, {width: "60px", top:"215px", left: "325px", zIndex:"2"}]}/>
                  <img alt="body-brain" key={'body-brain-1'} src={require('../../image/body-brain.png')} style={[bodyStyle, {width: "36px", top:"14px", left: "341px", zIndex: "3"}]}/>
                  <img alt="body-bone" key={'body-bone-1'} src={require('../../image/body-bone-01.png')} style={[bodyStyle, {width: "21px", top:"230px", left: "281px", zIndex: "4"}]}/>
                  <img alt="body-heart" key={'body-heart-1'} src={require('../../image/body-heart-01.png')} style={[bodyStyle, {width: "27px", top:"180px", left: "359px", zIndex:"5"}]}/>
                  <img alt="body-lungs" key={'body-lungs-1'} src={require('../../image/body-lungs-01.png')} style={[bodyStyle, {width: "82px", top:"130px", left: "319px", zIndex:"4"}]}/>
                  <img alt="body-stomach" key={'body-stomach-1'} src={require('../../image/body-stomach-01.png')} style={[bodyStyle, {width: "52px", top:"220px", left: "347px", zIndex: "1"}]}/>
                  <img alt="body-thyroid" key={'body-thyroid-1'} src={require('../../image/body-thyroid-01.png')} style={[bodyStyle, {width: "23px", top:"80px", left: "348px", zIndex: "8"}]}/>
                  <img alt="body-uterus" key={'body-uterus-1'} src={require('../../image/body-uterus-01.png')} style={[bodyStyle, {width: "52px", top:"269px", left: "332px", zIndex: "9"}]}/>

                  <img alt="" src={require('../../image/body-back-02 .png')}  height={610}  style={{position: 'absolute', top: "10px", left: "430px", zIndex: "1"}}/>
                  <img alt="body-liver" key={'body-liver-2'} src={require('../../image/body-liver-01.png')} style={[bodyStyle, {width: "60px", top:"205px", left: "548px", zIndex:"2"}]}/>
                  <img alt="body-brain" key={'body-brain-2'} src={require('../../image/body-brain.png')} style={[bodyStyle, {width: "36px", top:"14px", left: "564px", zIndex: "3"}]}/>
                  <img alt="body-bone" key={'body-bone-2'} src={require('../../image/body-bone-01.png')} style={[bodyStyle, {width: "21px", top:"220px", left: "481px", zIndex: "4"}]}/>
                  <img alt="body-heart" key={'body-heart-2'} src={require('../../image/body-heart-01.png')} style={[bodyStyle, {width: "27px", top:"170px", left: "581px", zIndex:"5"}]}/>
                  <img alt="body-lungs" key={'body-lungs-2'} src={require('../../image/body-lungs-01.png')} style={[bodyStyle, {width: "82px", top:"120px", left: "542px", zIndex:"4"}]}/>
                  <img alt="body-stomach" key={'body-stomach-2'} src={require('../../image/body-stomach-01.png')} style={[bodyStyle, {width: "52px", top:"210px", left: "570px", zIndex: "1"}]}/>
                  <img alt="body-thyroid" key={'body-thyroid-2'} src={require('../../image/body-thyroid-01.png')} style={[bodyStyle, {width: "23px", top:"76px", left: "571px", zIndex: "8"}]}/>
                  <img alt="body-uterus" key={'body-uterus-2'} src={require('../../image/body-uterus-01.png')} style={[bodyStyle, {width: "52px", top:"261px", left: "555px", zIndex: "9"}]}/>
                </div>
              </Box>
            </Flex>
            <Flex width={900} mt={4}>
              <Box width={1 / 2}
                   style={{borderRightStyle: 'dashed', borderRightColor: '#8C8C8C', borderRightWidth: '1.3px'}}>
                <TitleSmall title={'常规检查'} text={'Routine Examination'} picSrc={physicalL1R1}/>
                <Flex ml={4}>
                  <Box width={1 / 4}>
                    <ItemIcon value={this.props.examination.height_w} name={'身高'} icon={Routine1}/>
                  </Box>
                  <Box width={1 / 4}>
                    <ItemIcon value={this.props.examination.heart_rate_w} name={'心率'} icon={Routine2}/>
                  </Box>
                  <Box width={1 / 4}>
                    <ItemIcon value={this.props.examination.systolic_pressure_w} name={'收缩压'} icon={Routine3}/>
                  </Box>
                </Flex>
                <Flex ml={4} mb={3}>
                  <Box width={1 / 4}>
                    <ItemIcon value={this.props.examination.weight_w} name={'体重'} icon={Routine4}/>
                  </Box>
                  <Box width={1 / 4}>
                    <ItemIcon value={this.props.examination.bmi_w} name={'体重指数'} icon={Routine5}/>
                  </Box>
                  <Box width={1 / 4}>
                    <ItemIcon value={this.props.examination.diastolic_pressure_w} name={'舒张压'} icon={Routine6}/>
                  </Box>
                </Flex>
                            <ItemNorm name={'精神状态'} value={this.props.examination.is_psychosis_w} />
                            <ItemSmall name={'精神状态异常描述'} value={this.props.examination.psychosis_detail_w} />
                            <ItemNorm name={'智力'} value={this.props.examination.is_intelligence_w} />
                            <ItemSmall name={'常识'} value={this.props.examination.intelligence_changshi_w} />
                            <ItemSmall name={'判断'} value={this.props.examination.intelligence_panduan_w} />
                            <ItemSmall name={'计算'} value={this.props.examination.intelligence_jisuan_w} />
                            <ItemSmall name={'记忆'} value={this.props.examination.intelligence_jiyi_w} />
                            <ItemNorm name={'五官'} value={this.props.examination.is_facial_w} />
                            <ItemSmall name={'五官异常描述'} value={this.props.examination.facial_detail_w} />
                            <ItemNorm name={'特殊体态'} value={this.props.examination.is_special_body_w} />
                            <ItemSmall name={'特殊体态描述'} value={this.props.examination.special_body_detail_w} />
                            <ItemNorm name={'特殊面容'} value={this.props.examination.is_unusual_facies_w} />
                            <ItemSmall name={'特殊面容描述'} value={this.props.examination.unusual_facies_detail_w} />
                            <ItemNorm name={'皮肤毛发'} value={this.props.examination.is_skin_hair_w} />
                            <ItemSmall name={'皮肤毛发异常描述'} value={this.props.examination.skin_hair_detail_w} />
                            <ItemNorm name={'甲状腺'} value={this.props.examination.is_thyroid_w} />
                            <ItemSmall name={'甲状腺异常描述'} value={this.props.examination.thyroid_detail_w} />
                            <ItemNorm name={'肺部听诊'} value={this.props.examination.is_lungs_w} />
                            <ItemSmall name={'肺部异常描述'} value={this.props.examination.lungs_detail_w} />
                            <ItemNorm name={'心脏节律'} value={this.props.examination.is_regular_rhythm_w} />
                            <ItemSmall name={'心脏节律描述'} value={this.props.examination.rhythm_detail_w} />
                            <ItemNorm name={'心脏杂音'} value={this.props.examination.is_cardiac_souffle_w} />
                            <ItemSmall name={'心脏杂音描述'} value={this.props.examination.cardiac_souffle_detail_w} />
                            <ItemNorm name={'肝脾触诊'} value={this.props.examination.is_liver_spleen_w} />
                            <ItemSmall name={'肝脾检查异常描述'} value={this.props.examination.liver_spleen_detail_w} />
                            <ItemNorm name={'四肢脊柱'} value={this.props.examination.is_limb_spine_w} />
                            <ItemSmall name={'四肢脊柱异常描述'} value={this.props.examination.limb_spine_detail_w} />
                            <ItemNorm name={'其他'} value={this.props.examination.other_anomalies_w} />
                            <ItemSmall name={'先前后左右'} value={''} />
                            <TitleSmall title={'妇科检查'} text={'Gynecological Examination'} picSrc={physicalL2} />
                            <ItemNorm name={'阴毛'} value={this.props.examination.pubes_w} />
                            <ItemSmall name={'阴毛异常描述'} value={this.props.examination.pubes_deail_w} />
                            <ItemNorm name={'乳房'} value={this.props.examination.bubby_w} />
                            <ItemSmall name={'乳房异常描述'} value={this.props.examination.bubby_deail_w} />
                            <ItemNorm name={'外阴'} value={this.props.examination.vulva_w} />
                            <ItemSmall name={'外阴异常描述'} value={this.props.examination.vulva_deail_w} />
                            <ItemNorm name={'阴道'} value={this.props.examination.vagina_w} />
                            <ItemSmall name={'阴道异常描述'} value={this.props.examination.vagina_deail_w} />
                            <ItemNorm name={'分泌物'} value={this.props.examination.secretion_w} />
                            <ItemSmall name={'分泌物异常描述'} value={this.props.examination.secretion_deail_w} />
                            <ItemNorm name={'宫颈'} value={this.props.examination.cervix_w} />
                            <ItemSmall name={'宫颈异常描述'} value={this.props.examination.cervix_deail_w} />
                            <ItemNorm name={'子宫'} value={''} />
                            <ItemSmall name={'大小'} value={this.props.examination.uterine_size_w} />
                            <ItemSmall name={'活动度'} value={this.props.examination.uterine_activity_w} />
                            <ItemSmall name={'包块'} value={this.props.examination.uterine_mass_w} />
                            <ItemSmall name={'双侧附件'} value={this.props.examination.bilateral_annex_w} />
                            <ItemNorm name={'双侧附件异常描述'} value={this.props.examination.bilateral_annex_detail_w} />
                            {/* <ItemDate date={'2019-04-16'}/>*/}
                <ItemAdvice sex={0} text={this.props.examination.physical_care_w}/>
              </Box>
              <Box width={1 / 2}
                   style={{borderLeftStyle: 'dashed', borderLeftColor: '#8C8C8C', borderLeftWidth: '1.3px'}}>
                <TitleSmall title={'常规检查'} text={'Routine Examination'} picSrc={physicalL1R1}/>
                <Flex ml={4}>
                  <Box width={1 / 4}>
                    <ItemIcon value={this.props.examination.height_h} name={'身高'} icon={Routine1}/>
                  </Box>
                  <Box width={1 / 4}>
                    <ItemIcon value={this.props.examination.heart_rate_h} name={'心率'} icon={Routine2}/>
                  </Box>
                  <Box width={1 / 4}>
                    <ItemIcon value={this.props.examination.systolic_pressure_h} name={'收缩压'} icon={Routine3}/>
                  </Box>
                </Flex>
                <Flex ml={4} mb={3}>
                  <Box width={1 / 4}>
                    <ItemIcon value={this.props.examination.weight_h} name={'体重'} icon={Routine4}/>
                  </Box>
                  <Box width={1 / 4}>
                    <ItemIcon value={this.props.examination.bmi_h} name={'体重指数'} icon={Routine5}/>
                  </Box>
                  <Box width={1 / 4}>
                    <ItemIcon value={this.props.examination.diastolic_pressure_h} name={'舒张压'} icon={Routine6}/>
                  </Box>
                </Flex>
                            <ItemNorm name={'精神状态'} value={this.props.examination.is_psychosis_h} />
                            <ItemSmall name={'精神状态异常描述'} value={this.props.examination.psychosis_detail_h} />
                            <ItemNorm name={'智力'} value={this.props.examination.is_intelligence_h} />
                            <ItemSmall name={'常识'} value={this.props.examination.intelligence_changshi_h} />
                            <ItemSmall name={'判断'} value={this.props.examination.intelligence_panduan_h} />
                            <ItemSmall name={'计算'} value={this.props.examination.intelligence_jisuan_h} />
                            <ItemSmall name={'记忆'} value={this.props.examination.intelligence_jiyi_h} />
                            <ItemNorm name={'五官'} value={this.props.examination.is_facial_h} />
                            <ItemSmall name={'五官异常描述'} value={this.props.examination.facial_detail_h} />
                            <ItemNorm name={'特殊体态'} value={this.props.examination.is_special_body_h} />
                            <ItemSmall name={'特殊体态描述'} value={this.props.examination.special_body_detail_h} />
                            <ItemNorm name={'特殊面容'} value={this.props.examination.is_unusual_facies_h} />
                            <ItemSmall name={'特殊面容描述'} value={this.props.examination.unusual_facies_detail_h} />
                            <ItemNorm name={'皮肤毛发'} value={this.props.examination.is_skin_hair_h} />
                            <ItemSmall name={'皮肤毛发异常描述'} value={this.props.examination.skin_hair_detail_h} />
                            <ItemNorm name={'甲状腺'} value={this.props.examination.is_thyroid_h} />
                            <ItemSmall name={'甲状腺异常描述'} value={this.props.examination.thyroid_detail_h} />
                            <ItemNorm name={'肺部听诊'} value={this.props.examination.is_lungs_h} />
                            <ItemSmall name={'肺部异常描述'} value={this.props.examination.lungs_detail_h} />
                            <ItemNorm name={'心脏节律'} value={this.props.examination.is_regular_rhythm_h} />
                            <ItemSmall name={'心脏节律描述'} value={this.props.examination.rhythm_detail_h} />
                            <ItemNorm name={'心脏杂音'} value={this.props.examination.is_cardiac_souffle_h} />
                            <ItemSmall name={'心脏杂音描述'} value={this.props.examination.cardiac_souffle_detail_h} />
                            <ItemNorm name={'肝脾触诊'} value={this.props.examination.is_liver_spleen_h} />
                            <ItemSmall name={'肝脾检查异常描述'} value={this.props.examination.liver_spleen_detail_h} />
                            <ItemNorm name={'四肢脊柱'} value={this.props.examination.is_limb_spine_h} />
                            <ItemSmall name={'四肢脊柱异常描述'} value={this.props.examination.limb_spine_detail_h} />
                            <ItemNorm name={'其他'} value={this.props.examination.other_anomalies_h} />
                            <ItemSmall name={'先前后左右'} value={''} />
                            <TitleSmall title={'男科检查'} text={'Male Examination'} picSrc={physicalR2} />
                            <ItemNorm name={'阴毛'} value={this.props.examination.pubes_h} />
                            <ItemSmall name={'阴毛异常描述'} value={this.props.examination.pubes_deail_h} />
                            <ItemNorm name={'喉结'} value={this.props.examination.adam_s_apple_h} />
                            <ItemSmall name={'喉结异常描述'} value={this.props.examination.adam_s_apple_deail_h} />
                            <ItemNorm name={'阴茎'} value={this.props.examination.penis_h} />
                            <ItemSmall name={'阴茎描述'} value={this.props.examination.penis_deail_h} />
                            <ItemNorm name={'包皮'} value={this.props.examination.prepuce_h} />
                            <ItemNorm name={'睾丸'} value={this.props.examination.testis_h} />
                            <ItemSmall name={'左侧体积'} value={this.props.examination.left_testicular_volume_h} />
                            <ItemSmall name={'右侧体积'} value={this.props.examination.right_testicular_volume_h} />
                            <ItemNorm name={'附睾'} value={this.props.examination.epididymis_h} />
                            <ItemSmall name={'附睾描述'} value={this.props.examination.epididymis_detail_h} />
                            <ItemNorm name={'输精管'} value={this.props.examination.spermaduct_h} />
                            <ItemSmall name={'输精管描述'} value={this.props.examination.spermaduct_detail_h} />
                            <ItemNorm name={'精索静脉曲张'} value={this.props.examination.varicocele_h} />
                            <ItemSmall name={'精索静脉曲张部位'} value={this.props.examination.varicocele_detail_h} />
                            <ItemSmall name={'精索静脉曲张程度'} value={this.props.examination.varicocele_degree_h} />
                            {/* <ItemDate date={'2019-04-16'}/>*/}
                <ItemAdvice sex={1} text={this.props.examination.physical_care_h}/>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    examination: state.examination,
  }
};

export default ExaminerGetExamination(connect(mapStateToProps)(Radium(Home)));
