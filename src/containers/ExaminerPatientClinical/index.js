import React from 'react';
import {connect} from 'react-redux';
import {Box, Flex} from '@rebass/grid';

import Layout from '../../components/layout';
import ItemSmall from '../../components/item-small';
import ItemNorm from '../../components/item-norm';
import TitleExam from '../../components/title-exam';
// import ItemDate from '../../components/item-date';
import ItemAdvice from '../../components/item-advice';
import clinicTitle from '../../image/clinic-title.png';
import clinicL1 from '../../image/clinic-L1.png';
import clinicL2R1 from '../../image/clinic-L2-R1.png';
import clinicL3R2 from '../../image/clinic-L3-R2.png';
import clinicL4R3 from '../../image/clinic-L4-R3.png';
import clinicL5R4 from '../../image/clinic-L5-R4.png';
import ExaminerGetExamination from '../../util/examiner-get-examination';

const CheckType = ({children, img, title}) => {
  return (
    <Flex mb={4} mx={2}>
      <Box width={1.1 / 3}>
        <Flex justifyContent='center'>
          <Box>
            <img src={img} alt=''/>
          </Box>
        </Flex>
        <Flex justifyContent='center'>
          <Box>
            <span style={{fontSize: 21, color: '#8C8C8C'}}>{title}</span>
          </Box>
        </Flex>
      </Box>
      <Box width={2 / 3}>
        {children}
      </Box>
    </Flex>
  );
};

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Flex style={{width: 900, margin: '0 auto'}}>
          <Box>
            <Flex style={{marginLeft: '-60px'}}>
              <Box>
                <TitleExam picSrc={clinicTitle} text={'包括白带检查、细菌与病毒筛查、肝肾功能检测等'} title={'临床检查'}/>
              </Box>
            </Flex>
            <Flex width={900} mt={4}>
              <Box width={1 / 2}
                   style={{borderRightStyle: 'dashed', borderRightColor: '#8C8C8C', borderRightWidth: '1.3px'}}>
                            <CheckType img={clinicL1} title={'白带检查'}>
                                <ItemNorm name={'清洁度'} value={this.props.examination.check_value_baidaiqingjiedu_w} />
                                <ItemNorm name={'PH值'} value={this.props.examination.check_value_baidaiphzhi_w} />
                                <ItemNorm name={'线索细胞'} value={this.props.examination.check_value_baidaixiansuoxibao_w} />
                                <ItemNorm name={'念珠菌感染'} value={this.props.examination.check_value_baidainianzhujunganran_w} />
                                <ItemNorm name={'滴虫感染'} value={this.props.examination.check_value_baidaidichongganran_w} />
                                <ItemNorm name={'胺臭味实验'} value={this.props.examination.check_value_baidaianchouweishiyan_w} />
                            </CheckType>
                            <CheckType img={clinicL2R1} title={'细菌与病毒筛查'}>
                                <ItemNorm name={'淋球菌筛查'} value={this.props.examination.check_value_linqiujunshaicha_w} />
                                <ItemNorm name={'沙眼衣原体筛查'} value={this.props.examination.check_value_shayanyiyuanti_w} />
                                <ItemNorm name={'风疹病毒IgG'} value={this.props.examination.check_value_bingdushaichafengzhengbingdu_w} />
                                <ItemNorm name={'巨细胞病毒IgG'} value={this.props.examination.check_value_bingdushaichajuxibaoigg_w} />
                                <ItemNorm name={'巨细胞病毒IgM'} value={this.props.examination.check_value_bingdushaichajuxibaoigm_w} />
                                <ItemNorm name={'弓形虫IgG'} value={this.props.examination.check_value_bingdushaichagongxingtiigg_w} />
                                <ItemNorm name={'弓形虫IgM'} value={this.props.examination.check_value_bingdushaichagongxingtiigm_w} />
                                <ItemNorm name={'梅毒螺旋体筛查'} value={this.props.examination.check_value_meiduluoxuanti_w} />
                            </CheckType>
                            <CheckType img={clinicL3R2} title={'肝肾功能检测'}>
                                <ItemNorm name={'肌酐'} value={this.props.examination.check_value_ganshengongnengjigan_w} />
                                <ItemNorm name={'谷丙转氨酶'} value={this.props.examination.check_value_ganshenggongnengzhuananmei_w} />
                            </CheckType>
                            <CheckType img={clinicL4R3} title={'甲状腺功能检测'}>
                                <ItemNorm name={'促甲状腺激素'} value={this.props.examination.check_value_cujiazhuangxianjisu_w} />
                            </CheckType>
                            <CheckType img={clinicL5R4} title={'血液检测'}>
                                <ItemNorm name={'血型--ABO'} value={this.props.examination.check_value_xuexingabo_w} />
                                <ItemNorm name={'血型--Rh'} value={this.props.examination.check_value_xuexingrh_w} />
                                <ItemNorm name={'血糖'} value={this.props.examination.check_value_xuetang_w} />
                                <ItemNorm name={'乙肝血清学检查'} value={this.props.examination.check_value_yigan_w} />
                                <ItemSmall name={'HBs-Ag'} value={this.props.examination.check_value_yiganxueqinghbsag_w} />
                                <ItemSmall name={'HBs-Ab'} value={this.props.examination.check_value_yiganxueqinghbsab_w} />
                                <ItemSmall name={'HBe-Ag'} value={this.props.examination.check_value_yiganxueqinghbeag_w} />
                                <ItemSmall name={'HBe-Ab'} value={this.props.examination.check_value_yiganxueqinghbeab_w} />
                                <ItemSmall name={'Hbc-Ab'} value={this.props.examination.check_value_yiganxueqinghbcab_w} />
                                <ItemNorm name={'血细胞分析'} value={'title'} />
                                <ItemSmall name={'血小板'} value={this.props.examination.check_value_xuechangguixuexiaoban_w} />
                                <ItemSmall name={'白细胞'} value={this.props.examination.check_value_xuechangguibaixibao_w} />
                                <ItemSmall name={'红细胞'} value={this.props.examination.check_value_xuechangguihongxibao_w} />
                                <ItemSmall name={'血红蛋白'} value={this.props.examination.check_value_xuechangguixuehongdaiban_w} />
                                <ItemSmall name={'淋巴细胞比例'} value={this.props.examination.check_value_xuechangguilinbaxibao_w} />
                                <ItemSmall name={'单核细胞比例'} value={this.props.examination.check_value_xuechangguidanhexibao_w} />
                                <ItemSmall name={'嗜碱性粒细胞比例'}
                                    value={this.props.examination.check_value_xuechangguishijianxinglixibao_w} />
                                <ItemSmall name={'嗜酸性粒细胞比例'}
                                    value={this.props.examination.check_value_xuechangguishisuanxinglixibao_w} />
                                <ItemSmall name={'中性粒细胞比例'} value={this.props.examination.check_value_xuechangguizhongxinglixibao_w} />
                                <ItemNorm name={'尿常规检查'} value={this.props.examination.check_value_niaochangguijiancha_w} />
                                <ItemSmall name={'尿常规异常描述'} value={this.props.examination.check_value_niaochangguiyichang_w} />
                            </CheckType>
                            {/* <ItemDate date={'2019-04-16'}/>*/}
                <ItemAdvice sex={0} text={this.props.examination.clinical_care_w}/>
              </Box>
              <Box width={1 / 2}
                   style={{borderLeftStyle: 'dashed', borderLeftColor: '#8C8C8C', borderLeftWidth: '1.3px'}}>
                            <CheckType img={clinicL2R1} title={'细菌与病毒筛查'}>
                  <ItemNorm name={'梅毒螺旋体筛查'} value={this.props.examination.check_value_meiduluoxuanti_h} />
                </CheckType>
                        <CheckType img={clinicL3R2} title={'肝肾功能检测'}>
                            <ItemNorm name={'肌酐'} value={this.props.examination.check_value_ganshengongnengjigan_h} />
                            <ItemNorm name={'谷丙转氨酶'} value={this.props.examination.check_value_ganshenggongnengzhuananmei_h} />
                        </CheckType>
                        <CheckType img={clinicL4R3} title={'甲状腺功能检测'}>
                            <ItemNorm name={'促甲状腺激素'} value={this.props.examination.check_value_cujiazhuangxianjisu_h} />
                        </CheckType>
                        <CheckType img={clinicL5R4} title={'血液检测'}>
                            <ItemNorm name={'血型--ABO'} value={this.props.examination.check_value_xuexingabo_h} />
                            <ItemNorm name={'血型--RH'} value={this.props.examination.check_value_xuexingrh_h} />
                            <ItemNorm name={'乙肝血清学检查'} value={this.props.examination.check_value_yigan_h} />
                            <ItemSmall name={'HBs-Ag'} value={this.props.examination.check_value_yiganxueqinghbsag_h} />
                            <ItemSmall name={'HBs-Ab'} value={this.props.examination.check_value_yiganxueqinghbsab_h} />
                            <ItemSmall name={'HBe-Ag'} value={this.props.examination.check_value_yiganxueqinghbeag_h} />
                            <ItemSmall name={'HBe-Ab'} value={this.props.examination.check_value_yiganxueqinghbeab_h} />
                            <ItemSmall name={'Hbc-Ab'} value={this.props.examination.check_value_yiganxueqinghbcab_h} />
                            <ItemNorm name={'尿常规检查'} value={this.props.examination.check_value_niaochangguijiancha_h} />
                            <ItemSmall name={'尿常规异常描述'} value={this.props.examination.check_value_niaochangguiyichang_h} />
                        </CheckType>
                            {/* <ItemDate date={'2019-04-16'}/>*/}
                <ItemAdvice sex={1} text={this.props.examination.clinical_care_h}/>
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

export default ExaminerGetExamination(connect(mapStateToProps)(Home));
