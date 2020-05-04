import React from 'react';
import {connect} from 'react-redux';
import {Box, Flex} from '@rebass/grid';

import Layout from '../../components/layout';
import TitleExam from '../../components/title-exam';
import TitleSmall from '../../components/title-small';
import ItemNorm from '../../components/item-norm';
import ItemSmall from '../../components/item-small';
import ItemAdvice from '../../components/item-advice';
// import ItemDate from '../../components/item-date';
import commonTitle from '../../image/common-title.png';
import commonL1R1 from '../../image/common-L1-R1.png';
import commonL2R2 from '../../image/common-L2-R2.png';
import commonL3 from '../../image/common-L3.png';
import commonL4R3 from '../../image/common-L4-R3.png';
import commonL5R4 from '../../image/common-L5-R4.png';
import commonL6R5 from '../../image/common-L6-R5.png';
import ExaminerGetExamination from '../../util/examiner-get-examination';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Flex>
          <Box>
            <Flex style={{marginLeft: '-60px'}}>
              <Box>
                <TitleExam picSrc={commonTitle} text={'包括疾病史、用药史、孕育史、家族史、生活习惯和社会心理等'} title={'一般情况'}/>
              </Box>
            </Flex>
            <Flex width={900} mt={4}>
              <Box width={1 / 2}
                   style={{borderRightStyle: 'dashed', borderRightColor: '#8C8C8C', borderRightWidth: '1.3px'}}>
                            <TitleSmall title={'疾病史'} text={'Disease'} picSrc={commonL1R1} />
                            <ItemNorm name={'是否患有或曾经患有一下疾病'} value={this.props.examination.is_had_disease_w} />
                            <ItemSmall name={'贫血'} value={this.props.examination.suffered_disease_pinxue_w} />
                            <ItemSmall name={'甲状腺疾病'} value={this.props.examination.suffered_disease_jiazhuangxian_w} />
                            <ItemSmall name={'高血压'} value={this.props.examination.suffered_disease_gaoxueya_w} />
                            <ItemSmall name={'慢性肾炎'} value={this.props.examination.suffered_disease_manxingshenyan_w} />
                            <ItemSmall name={'心脏病'} value={this.props.examination.suffered_disease_xinzangbing_w} />
                            <ItemSmall name={'肿瘤'} value={this.props.examination.suffered_disease_zhongliu_w} />
                            <ItemSmall name={'糖尿病'} value={this.props.examination.suffered_disease_tangniaobing_w} />
                            <ItemSmall name={'结核'} value={this.props.examination.suffered_disease_jihe_w} />
                            <ItemSmall name={'癫痫'} value={this.props.examination.suffered_disease_dianxian_w} />
                            <ItemSmall name={'乙型肝炎'} value={this.props.examination.suffered_disease_yixingganyan_w} />
                            <ItemSmall name={'精神心理病患'} value={this.props.examination.suffered_disease_w} />
                            <ItemSmall name={'其他'} value={this.props.examination.other_disease_w} />
                            <ItemNorm name={'淋病/梅毒/衣原体感染'} value={this.props.examination.suffered_disease_linbingmeiduyiyuanti_w} />
                            <ItemSmall name={'淋病'} value={this.props.examination.disease_list_lingbing_w} />
                            <ItemSmall name={'梅毒'} value={this.props.examination.disease_list_meidu_w} />
                            <ItemSmall name={'衣原体感染'} value={this.props.examination.disease_list_yiyuanti_w} />
                            <ItemNorm name={'是否患有出生缺陷'} value={this.props.examination.is_birth_defect_w} />
                            <ItemSmall name={'具体出生缺陷'} value={this.props.examination.birth_defect_w} />
                            <ItemNorm name={'是否患有妇科病'} value={this.props.examination.gynecopathy_buyunbuyu} />
                            <ItemSmall name={'不孕不育'} value={this.props.examination.gynecopathy_buyunbuyu} />
                            <ItemSmall name={'子宫附炎症'} value={this.props.examination.gynecopathy_zigongfuyanzheng} />
                            <ItemSmall name={'其他'} value={this.props.examination.gynecopathy_qita} />
                            <ItemSmall name={'其他妇科疾病'} value={this.props.examination.other_gynecopathy} />
                            <ItemNorm name={'停经后是否有下列症状或疾病'} value={this.props.examination.is_disease} />
                            <ItemSmall name={'阴道流血'} value={this.props.examination.diseases_yundaoliuxue} />
                            <ItemSmall name={'发热'} value={this.props.examination.diseases_fare} />
                            <ItemSmall name={'腹泻'} value={this.props.examination.diseases_fuxie} />
                            <ItemSmall name={'腹痛'} value={this.props.examination.diseases_futong} />
                            <ItemSmall name={'流行性感冒'} value={this.props.examination.diseases_liuxingxingganmao} />
                            <ItemSmall name={'病毒性肝炎'} value={this.props.examination.diseases_bingduxingganyan} />
                            <ItemSmall name={'其他'} value={this.props.examination.diseases_qita} />
                            <ItemSmall name={'停经后其他症状或疾病'} value={this.props.examination.other_disease} />
                            <TitleSmall title={'用药史'} text={'Medication'} picSrc={commonL2R2} />
                            <ItemNorm name={'目前是否服药'} value={this.props.examination.is_take_medicine_w} />
                            <ItemSmall name={'药物名称'} value={this.props.examination.medicine_name_w} />
                            <ItemNorm name={'是否注射过疫苗'} value={this.props.examination.is_vaccinated_w} />
                            <ItemSmall name={'风疹疫苗'} value={this.props.examination.vaccine_fengzhenyimiao_w} />
                            <ItemSmall name={'乙肝疫苗'} value={this.props.examination.vaccine_yiganyimiao_w} />
                            <ItemSmall name={'其他'} value={this.props.examination.vaccine_qitayimiao_w} />
                            <ItemSmall name={'其他疫苗：'} value={this.props.examination.other_vaccine_w} />
                            <ItemNorm name={'目前是否使用避孕措施'} value={this.props.examination.is_contraception_w} />
                            <ItemSmall name={'宫内节育器'} value={this.props.examination.contraception_gongneijieyuqi_w} />
                            <ItemSmall name={'外用避孕药'} value={this.props.examination.contraception_waiyongbiyunyao_w} />
                            <ItemSmall name={'皮下埋植剂'} value={this.props.examination.contraception_pixiamaizhiji_w} />
                            <ItemSmall name={'自然避孕'} value={this.props.examination.contraception_ziranbiyun_w} />
                            <ItemSmall name={'口服避孕药'} value={this.props.examination.contraception_koufubiyunyao_w} />
                            <ItemSmall name={'避孕套'} value={this.props.examination.contraception_biyongtao_w} />
                            <ItemSmall name={'其他'} value={this.props.examination.contraception_qitabiyuncuoshi_w} />
                            <ItemSmall name={'其他避孕措施'} value={this.props.examination.other_contraception_w} />
                            <ItemSmall name={'避孕措施持续时间'} value={this.props.examination.contraception_continuous_time_w} />
                            <ItemNorm name={'目前是否停用避孕措施'} value={this.props.examination.is_stop_contraception_w} />
                            <ItemSmall name={'目前停用避孕措施时间'} value={this.props.examination.stop_contraception_date_w} />
                            <TitleSmall title={'孕育史'} text={'Pregnancy'} picSrc={commonL3} />
                            <ItemNorm name={'初潮年龄'} value={this.props.examination.menarche_age_w} />
                            <ItemNorm name={'末次月经时间'} value={this.props.examination.last_menstruation_date_w} />
                            <ItemNorm name={'月经周期是否规律'} value={this.props.examination.is_regular_menstrual_w} />
                            <ItemSmall name={'经期：3-5天   周期：28-30天'} value={''} />
                            <ItemNorm name={'月经量'} value={this.props.examination.menstrual_volume_w} />
                            <ItemNorm name={'痛经'} value={this.props.examination.dysmenorrhea_w} />
                            <ItemNorm name={'是否曾经怀孕'} value={this.props.examination.ever_pregnant_w} />
                            <ItemSmall name={'怀孕'} value={this.props.examination.pregnancy_number_w} />
                            <ItemSmall name={'足月活产'} value={this.props.examination.full_term_birth_number_w} />
                            <ItemSmall name={'早产'} value={this.props.examination.premature_birth_number_w} />
                            <ItemNorm name={'是否有剖宫产史'} value={this.props.examination.is_cutting_palace_w} />
                            <ItemSmall name={'剖宫产日期'} value={this.props.examination.cutting_palace_date_time_w} />
                            <ItemNorm name={'是否有不良妊娠结局'} value={this.props.examination.had_adverse_pregnancy_outcome_w} />
                            <ItemSmall name={'死胎生产'} value={this.props.examination.stillbirth_number_w} />
                            <ItemSmall name={'自然流产'} value={this.props.examination.natural_abortion_number_w} />
                            <ItemSmall name={'人工流产'} value={this.props.examination.artificial_abortion_number_w} />
                            <ItemSmall name={'其他'} value={this.props.examination.other_adverse_pregnancy_outcome_number_w} />
                            <ItemNorm name={'是否分娩过出生缺陷儿'} value={this.props.examination.had_defect_child_w} />
                            <ItemSmall name={'畸形儿'} value={this.props.examination.defect_child_disease_w} />
                            <ItemNorm name={'妊娠期疾病史'} value={''} />
                            <ItemSmall name={'妊娠期糖尿病'} value={this.props.examination.pre_disease_value_tangniaobingshi_w} />
                            <ItemSmall name={'妊娠期高血压'} value={this.props.examination.pre_disease_value_gaoxueyajibingshi_w} />
                            <ItemSmall name={'妊娠期肝内胆汁淤积症'} value={this.props.examination.pre_disease_value_ganneidanzhiyuji_w} />
                            <ItemSmall name={'妊娠期甲状腺异常'} value={this.props.examination.pre_disease_value_jiazhuangxianyichang_w} />
                            <ItemSmall name={'妊娠期贫血'} value={this.props.examination.pre_disease_value_pinxue_w} />
                            <ItemSmall name={'其他妊娠疾病'} value={this.props.examination.pre_disease_value_qitarenshenjibing_w} />
                            <ItemNorm name={'现有子女数'} value={this.props.examination.child_number_w} />
                            <ItemSmall name={'女儿'} value={''} />
                            <ItemSmall name={'儿子'} value={''} />
                            <ItemSmall name={'子女身体健康状况'} value={this.props.examination.child_health_w} />
                            <ItemSmall name={'子女疾病名称'} value={this.props.examination.child_disease_w} />
                            <TitleSmall title={'家族史'} text={'Family'} picSrc={commonL4R3} />
                            <ItemNorm name={'夫妻是否近亲结婚'} value={this.props.examination.is_close_relatives_w} />
                            <ItemNorm name={'祖父母/外祖父母、父母两代家族内近亲结婚史'} value={this.props.examination.is_family_close_relative_w} />
                            <ItemNorm name={'家族成员是否有人患有一下疾病'} value={this.props.examination.is_family_disease_w} />
                            <ItemSmall name={'地中海贫血'} value={this.props.examination.family_disease_dizhonghaipinxue_w} />
                            <ItemSmall name={'唐氏综合征'} value={this.props.examination.family_disease_tangshizonghezheng_w} />
                            <ItemSmall name={'白化病'} value={this.props.examination.family_disease_baihuabing_w} />
                            <ItemSmall name={'糖尿病'} value={this.props.examination.family_disease_tangniaobing_w} />
                            <ItemSmall name={'血友病'} value={this.props.examination.family_disease_xueyoubing_w} />
                            <ItemSmall name={'先天性智力低下'} value={this.props.examination.family_disease_xiantianxingzhilidixia_w} />
                            <ItemSmall name={'先天性心脏病'} value={this.props.examination.family_disease_xiantianxingxinzangbing_w} />
                            <ItemSmall name={'蚕豆病'} value={this.props.examination.family_disease_chandoubing_w} />
                            <ItemSmall name={'听力障碍'} value={this.props.examination.family_disease_tinglizhangai_w} />
                            <ItemSmall name={'视力障碍'} value={this.props.examination.family_disease_shijuezhangai_w} />
                            <ItemSmall name={'新生儿或婴幼儿死亡'} value={this.props.examination.family_disease_xinshengeryingyouersiwang_w} />
                            <ItemSmall name={'其他出生缺陷'} value={this.props.examination.family_disease_qitachushengquexian_w} />
                            <ItemSmall name={'患者与本人的关系：二姨'} value={this.props.examination.relationship_w} />
                            <TitleSmall title={'生活习惯'} text={'Habits and Customs'} picSrc={commonL5R4} />
                            <ItemNorm name={'是否进食肉、蛋类'} value={this.props.examination.is_eat_meat_egg_w} />
                            <ItemNorm name={'是否厌食蔬菜'} value={this.props.examination.is_anorexia_vegetables_w} />
                            <ItemNorm name={'是否有食用生肉嗜好'} value={this.props.examination.is_eat_raw_meat_w} />
                            <ItemNorm name={'是否吸烟'} value={this.props.examination.is_somke_w} />
                            <ItemSmall name={'每天吸烟支数'} value={this.props.examination.daily_somke_number_w} />
                            <ItemNorm name={'是否存在被动吸烟'} value={this.props.examination.is_passive_smoking_w} />
                            <ItemSmall name={'平均每天被动吸烟时间'} value={this.props.examination.daily_passive_smoking_minutes_w} />
                            <ItemNorm name={'是否饮酒'} value={this.props.examination.is_drink_w} />
                            <ItemSmall name={'每天饮酒量'} value={this.props.examination.daily_drink_volumn_w} />
                            <ItemNorm name={'是否使用可卡因等毒麻药品'} value={this.props.examination.is_take_drug_w} />
                            <ItemSmall name={'毒麻药品名称'} value={this.props.examination.drug_name_w} />
                            <ItemNorm name={'是否口臭'} value={this.props.examination.is_halitosis_w} />
                            <ItemNorm name={'是否牙龈出血'} value={this.props.examination.is_bleeding_gums_w} />
                            <ItemNorm name={'工作或生活环境中是否接触以下因素'} value={this.props.examination.is_harmful_environment_w} />
                            <ItemSmall name={'射线'} value={this.props.examination.harmful_environment_shexian_w} />
                            <ItemSmall name={'噪音'} value={this.props.examination.harmful_environment_zaosheng_w} />
                            <ItemSmall name={'铅汞重金属'} value={this.props.examination.harmful_environment_qiangongzhongjinshu_w} />
                            <ItemSmall name={'油漆等有机溶剂'} value={this.props.examination.harmful_environment_xinzhuangxiu_w} />
                            <ItemSmall name={'高温'} value={this.props.examination.harmful_environment_gaowen_w} />
                            <ItemSmall name={'农药'} value={this.props.examination.harmful_environment_nongyao_w} />
                            <ItemSmall name={'密切接触猫狗等家畜、宠物'} value={this.props.examination.harmful_environment_maogoushengchu_w} />
                            <ItemSmall name={'震动'} value={this.props.examination.harmful_environment_zhendong_w} />
                            <ItemSmall name={'其他'} value={this.props.examination.harmful_environment_qita_w} />
                            <TitleSmall title={'社会心理'} text={'Social Psychology'} picSrc={commonL6R5} />
                            <ItemNorm name={'是否感到生活/工作压力'} value={this.props.examination.is_pressure_w} />
                            <ItemNorm name={'与亲友、同事的关系是否紧张'} value={this.props.examination.is_relationship_tense} />
                            <ItemNorm name={'是否感到经济压力'} value={this.props.examination.is_economic_pressure_w} />
                            <ItemNorm name={'是否做好怀孕准备'} value={this.props.examination.is_prepare_pregnancy_w} />
                            <ItemNorm name={'其他'} value={this.props.examination.other_w} />
                            {/* <ItemDate date={'2019-04-16'}/>*/}
                <ItemAdvice sex={0} text={this.props.examination.general_care_w}/>
              </Box>
              <Box width={1 / 2}
                   style={{borderLeftStyle: 'dashed', borderLeftColor: '#8C8C8C', borderLeftWidth: '1.3px'}}>
                            <TitleSmall title={'疾病史'} text={'Disease'} picSrc={commonL1R1} />
                            <ItemNorm name={'是否患有或曾经患有一下疾病'} value={this.props.examination.is_had_disease_h} />
                            <ItemSmall name={'贫血'} value={this.props.examination.suffered_disease_pinxue_h} />
                            <ItemSmall name={'甲状腺疾病'} value={this.props.examination.suffered_disease_jiazhuangxian_h} />
                            <ItemSmall name={'高血压'} value={this.props.examination.suffered_disease_gaoxueya_h} />
                            <ItemSmall name={'慢性肾炎'} value={this.props.examination.suffered_disease_manxingshenyan_h} />
                            <ItemSmall name={'心脏病'} value={this.props.examination.suffered_disease_xinzangbing_h} />
                            <ItemSmall name={'肿瘤'} value={this.props.examination.suffered_disease_zhongliu_h} />
                            <ItemSmall name={'糖尿病'} value={this.props.examination.suffered_disease_tangniaobing_h} />
                            <ItemSmall name={'结核'} value={this.props.examination.suffered_disease_jihe_h} />
                            <ItemSmall name={'癫痫'} value={this.props.examination.suffered_disease_dianxian_h} />
                            <ItemSmall name={'乙型肝炎'} value={this.props.examination.suffered_disease_yixingganyan_h} />
                            <ItemSmall name={'精神心理病患'} value={this.props.examination.suffered_disease_h} />
                            <ItemSmall name={'其他'} value={this.props.examination.other_disease_h} />
                            <ItemNorm name={'淋病/梅毒/衣原体感染'} value={this.props.examination.suffered_disease_linbingmeiduyiyuanti_h} />
                            <ItemSmall name={'淋病'} value={this.props.examination.disease_list_lingbing_h} />
                            <ItemSmall name={'梅毒'} value={this.props.examination.disease_list_meidu_h} />
                            <ItemSmall name={'衣原体感染'} value={this.props.examination.disease_list_yiyuanti_h} />
                            <ItemNorm name={'是否患有出生缺陷'} value={this.props.examination.is_birth_defect_h} />
                            <ItemSmall name={'具体出生缺陷'} value={this.props.examination.birth_defect_h} />
                            <ItemNorm name={'是否有以下男科疾病'} value={this.props.examination.andropathy_saixianyan_h} />
                            <ItemSmall name={'腮腺炎'} value={this.props.examination.andropathy_saixianyan_h} />
                            <ItemSmall name={'睾丸炎、附睾炎'} value={this.props.examination.andropathy_gaowanyanfugaoyan_h} />
                            <ItemSmall name={'静脉曲张'} value={this.props.examination.andropathy_jingmaiqizhang_h} />
                            <ItemSmall name={'不孕不育症'} value={this.props.examination.andropathy_buyunbuyu_h} />
                            <ItemSmall name={'其他'} value={this.props.examination.andropathy_qita_h} />
                            <ItemSmall name={'其他男科疾病'} value={this.props.examination.other_andropathy_h} />
                            <TitleSmall title={'用药史'} text={'Medication'} picSrc={commonL2R2} />
                            <ItemNorm name={'目前是否服药'} value={this.props.examination.is_take_medicine_h} />
                            <ItemSmall name={'药物名称'} value={this.props.examination.medicine_name_h} />
                            <ItemNorm name={'是否注射过疫苗'} value={this.props.examination.is_vaccinated_h} />
                            <ItemSmall name={'风疹疫苗'} value={this.props.examination.vaccine_fengzhenyimiao_h} />
                            <ItemSmall name={'乙肝疫苗'} value={this.props.examination.vaccine_yiganyimiao_h} />
                            <ItemSmall name={'其他'} value={this.props.examination.vaccine_qitayimiao_h} />
                            <ItemSmall name={'其他疫苗：'} value={this.props.examination.other_vaccine_h} />
                            <TitleSmall title={'家族史'} text={'Family'} picSrc={commonL4R3} />
                            <ItemNorm name={'夫妻是否近亲结婚'} value={this.props.examination.is_close_relatives_h} />
                            <ItemNorm name={'祖父母/外祖父母、父母两代家族内近亲结婚史'} value={this.props.examination.is_family_close_relative_h} />
                            <ItemNorm name={'家族成员是否有人患有一下疾病'} value={this.props.examination.is_family_disease_h} />
                            <ItemSmall name={'地中海贫血'} value={this.props.examination.family_disease_dizhonghaipinxue_h} />
                            <ItemSmall name={'唐氏综合征'} value={this.props.examination.family_disease_tangshizonghezheng_h} />
                            <ItemSmall name={'白化病'} value={this.props.examination.family_disease_baihuabing_h} />
                            <ItemSmall name={'糖尿病'} value={this.props.examination.family_disease_tangniaobing_h} />
                            <ItemSmall name={'血友病'} value={this.props.examination.family_disease_xueyoubing_h} />
                            <ItemSmall name={'先天性智力低下'} value={this.props.examination.family_disease_xiantianxingzhilidixia_h} />
                            <ItemSmall name={'先天性心脏病'} value={this.props.examination.family_disease_xiantianxingxinzangbing_h} />
                            <ItemSmall name={'蚕豆病'} value={this.props.examination.family_disease_chandoubing_h} />
                            <ItemSmall name={'听力障碍'} value={this.props.examination.family_disease_tinglizhangai_h} />
                            <ItemSmall name={'视力障碍'} value={this.props.examination.family_disease_shijuezhangai_h} />
                            <ItemSmall name={'新生儿或婴幼儿死亡'} value={this.props.examination.family_disease_xinshengeryingyouersiwang_h} />
                            <ItemSmall name={'其他出生缺陷'} value={this.props.examination.family_disease_qitachushengquexian_h} />
                            <ItemSmall name={'患者与本人的关系：二姨'} value={this.props.examination.relationship_h} />
                            <TitleSmall title={'生活习惯'} text={'Habits and Customs'} picSrc={commonL5R4} />
                            <ItemNorm name={'是否进食肉、蛋类'} value={this.props.examination.is_eat_meat_egg_h} />
                            <ItemNorm name={'是否厌食蔬菜'} value={this.props.examination.is_anorexia_vegetables_h} />
                            <ItemNorm name={'是否有食用生肉嗜好'} value={this.props.examination.is_eat_raw_meat_h} />
                            <ItemNorm name={'是否吸烟'} value={this.props.examination.is_somke_h} />
                            <ItemSmall name={'每天吸烟支数'} value={this.props.examination.daily_somke_number_h} />
                            <ItemNorm name={'是否存在被动吸烟'} value={this.props.examination.is_passive_smoking_h} />
                            <ItemSmall name={'平均每天被动吸烟时间'} value={this.props.examination.daily_passive_smoking_minutes_h} />
                            <ItemNorm name={'是否饮酒'} value={this.props.examination.is_drink_h} />
                            <ItemSmall name={'每天饮酒量'} value={this.props.examination.daily_drink_volumn_h} />
                            <ItemNorm name={'是否使用可卡因等毒麻药品'} value={this.props.examination.is_take_drug_h} />
                            <ItemSmall name={'毒麻药物名称'} value={this.props.examination.drug_name_h} />
                            <ItemNorm name={'是否口臭'} value={''} />
                            <ItemNorm name={'是否牙龈出血'} value={''} />
                            <ItemNorm name={'工作或生活环境中是否接触以下因素'} value={this.props.examination.is_harmful_environment_h} />
                            <ItemSmall name={'射线'} value={this.props.examination.harmful_environment_shexian_h} />
                            <ItemSmall name={'噪音'} value={this.props.examination.harmful_environment_zaoyin_h} />
                            <ItemSmall name={'铅汞重金属'} value={this.props.examination.harmful_environment_qiangongzhongjinshu_h} />
                            <ItemSmall name={'油漆等有机溶剂'} value={this.props.examination.harmful_environment_xinzhuangxiu_h} />
                            <ItemSmall name={'高温'} value={this.props.examination.harmful_environment_gaowen_h} />
                            <ItemSmall name={'农药'} value={this.props.examination.harmful_environment_nongyao_h} />
                            <ItemSmall name={'密切接触猫狗等家畜、宠物'} value={this.props.examination.harmful_environment_jiechumaogoushengchu_h} />
                            <ItemSmall name={'震动'} value={this.props.examination.harmful_environment_zhendong_h} />
                            <ItemSmall name={'其他'} value={this.props.examination.harmful_environment_qita_h} />
                            <TitleSmall title={'社会心理'} text={'Social Psychology'} picSrc={commonL6R5} />
                            <ItemNorm name={'是否感到生活/工作压力'} value={this.props.examination.is_pressure_h} />
                            <ItemNorm name={'与亲友、同事的关系是否紧张'} value={this.props.examination.is_relationship_tense_h} />
                            <ItemNorm name={'是否感到经济压力'} value={this.props.examination.is_economic_pressure_h} />
                            <ItemNorm name={'是否做好怀孕准备'} value={this.props.examination.is_prepare_pregnancy_h} />
                            <ItemNorm name={'其他'} value={this.props.examination.other_h} />
                 {/* <ItemDate date={'2019-04-16'}/>*/}
                <ItemAdvice sex={1} text={this.props.examination.general_care_h}/>
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
