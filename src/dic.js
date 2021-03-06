﻿const dic = {'Exam_is_ill': '(妻子)是否患有或曾患疾病',
 'Exam_anemia': '(妻子)是否贫血',
 'Exam_thyroid_disease': '(妻子)是否甲状腺疾病',
 'Exam_hypertension': '(妻子)是否高血压',
 'Exam_chronic_nephritis': '(妻子)是否慢性肾炎',
 'Exam_heart_disease': '(妻子)是否心脏病',
 'Exam_swelling': '(妻子)是否肿瘤',
 'Exam_diabetes': '(妻子)是否糖尿病',
 'Exam_nodule': '(妻子)是否结核',
 'Exam_epilepsy': '(妻子)是否癫痫',
 'Exam_hb': '(妻子)是否乙型肝炎',
 'Exam_sexually_infect': '(妻子)是否淋病/梅毒/衣原体感染等',
 'Exam_psy_disorder': '(妻子)是否精神心理病患',
 'Exam_is_born_ill': '(妻子)是否患有出生缺陷,如先天畸形、遗传病等',
 'Exam_use_medicine': '(妻子)服药情况',
 'Exam_vaccinate': '(妻子)注射疫苗情况',
 'Exam_fengzhen': '(妻子)是否注射风疹疫苗',
 'Exam_yigan': '(妻子)是否注射乙肝疫苗',
 'Exam_vaccinate_others': '(妻子)是否注射其他疫苗',
 'Exam_contracept': '(妻子)是否正在使用或曾经使用(以下7种至少一种)避孕措施',
 'Exam_intrauterine_device': '(妻子)是否正在使用或曾经使用宫内节育器',
 'Exam_topical_contraceptives': '(妻子)是否正在使用或曾经使用外用避孕药',
 'Exam_subcutaneous_implants': '(妻子)是否正在使用或曾经使用皮下埋植剂',
 'Exam_natural_contracept': '(妻子)是否正在使用或曾经使用自然避孕',
 'Exam_oral_contraceptive': '(妻子)是否正在使用或曾经使用口服避孕药',
 'Exam_contracept_others': '(妻子)是否正在使用或曾经使用其他避孕措施',
 'Exam_condom': '(妻子)是否正在使用或曾经使用避孕套',
 'Exam_contracept_period': '避孕措施持续使用时间(月数)',
 'Exam_contracept_stop': '是否停止避孕措施',
 'Exam_first_time_age': '初潮年龄',
 'Exam_menses_regular': '月经是否规律',
 'Exam_mens_period': '经期(下限)',
 'Exam_mens_period_max': '经期(上限)',
 'Exam_mens_cycle': '周期(下限)',
 'Exam_mens_cycle_max': '周期(上限)',
 'Exam_breed_history': '是否曾经怀孕',
 'Exam_pre_num': '怀孕次数',
 'Exam_live_birth_num': '活产次数',
 'Exam_enou_month_num': '足月活产次数',
 'Exam_short_mouth_num': '早产次数',
 'Exam_bad_pregnancy_result': '是否有不良妊娠结局(死产死胎，自然流产，人工流产)',
 'Exam_dead_birth_num': '死产死胎次数',
 'Exam_abor_num': '自然流产次数',
 'Exam_indu_abor_num': '人流次数',
 'Exam_other_bad_pregnancy_results_num': '其他不良妊娠结局的次数',
 'Exam_sd_child': '分娩过出生缺陷儿',
 'Exam_baby_num': '现有子女数',
 'Exam_child_ill': '子女身体状况',
 'Exam_intermarry': '(妻子)夫妻近亲结婚情况',
 'Exam_intermarry_f': '(妻子)祖父母/外祖父母、父母两代家族内近亲结婚史',
 'Exam_disease_history_f': '(妻子)本人或家族成员是否有人患有以下疾病',
 'Exam_thalassaemia': '(妻子)地中海贫血',
 'Exam_down_syndrome': '(妻子)唐氏综合症',
 'Exam_albinism': '(妻子)白化病',
 'Exam_diabetes1': '(妻子)糖尿病',
 'Exam_blood_sick': '(妻子)血有病',
 'Exam_dysgnosia': '(妻子)智力障碍',
 'Exam_favism': '(妻子)蚕豆病',
 'Exam_hearing_disorder': '(妻子)听力障碍',
 'Exam_congenital_heart_disease': '(妻子)先天性心脏病',
 'Exam_seeing_disorder': '(妻子)视力障碍',
 'Exam_infant_mortality': '(妻子)新生儿或婴幼儿死亡',
 'Exam_disease_history_f_others': '(妻子)患有有其他病',
 'Exam_meategg': '(妻子)是否进食肉、蛋类',
 'Exam_hate_veg': '(妻子)是否厌食蔬菜',
 'Exam_raw_meat': '(妻子)是否有食用生肉嗜好',
 'Exam_smoking': '(妻子)吸烟情况',
 'Exam_smoking_box': '(妻子)吸烟次数',
 'Exam_second_hand_smoking_box': '(妻子)平均每天被动吸烟时间(分钟)',
 'Exam_drinking_box': '(妻子)饮酒量',
 'Exam_drug': '(妻子)使用毒麻药品情况',
 'Exam_halitosis': '(妻子)是否口臭',
 'Exam_gum_bleeding': '(妻子)是否牙龈出血',
 'Exam_pregnancy_ready': '(妻子)是否做好怀孕准备',
 'Exam_sterility': '(妻子)不孕不育(男+女)',
 'Exam_uterine': '(妻子)子宫附炎症',
 'Exam_radial': '(妻子)射线',
 'Exam_noise': '(妻子)噪音',
 'Exam_lead_hg': '(妻子)铅、汞',
 'Exam_new_decoration': '(妻子)新装修',
 'Exam_high_temperature': '(妻子)高温',
 'Exam_pesticide': '(妻子)农药',
 'Exam_catdog': '(妻子)接触猫狗',
 'Exam_shake': '(妻子)震动',
 'Exam_height': '(妻子)身高(cm)',
 'Exam_weight': '(妻子)体重(Kg)',
 'Exam_bmi': '(妻子)体重指数',
 'Exam_heart_rate': '(妻子)心率(次/分)',
 'Exam_hight_blood_pressure': '(妻子)血压高压值(/mmHg)',
 'Exam_low_blood_pressure': '(妻子)血压低压值(/mmHg)',
 'Exam_specisal_look': '(妻子)有无特殊面容',
 'Exam_retardation': '(妻子)有无智力障碍',
 'Exam_pubes': '(妻子)阴毛',
 'Exam_breast': '(妻子)乳房',
 'Exam_thyroid': '(妻子)甲状腺',
 'Exam_lung': '(妻子)肺部',
 'Exam_heart_rhythm': '(妻子)心脏节律是否整齐',
 'Exam_heartmurmur': '(妻子)心脏是否有杂音',
 'Exam_viver': '(妻子)肝',
 'Exam_vervix': '(妻子)宫颈',
 'Exam_uterus_act': '(妻子)子宫活动',
 'Exam_uterus_bump': '(妻子)子宫包块',
 'Exam_uterus_adnexa': '(妻子)子宫双侧附件(输卵管和卵巢)',
 'Exam_vulva': '(妻子)外阴',
 'Exam_psycology': '(妻子)精神状况',
 'Exam_facial_features': '(妻子)五官',
 'Exam_special_body': '(妻子)特殊体型',
 'Exam_skin': '(妻子)皮肤毛发异常',
 'Exam_secretions': '(妻子)分泌物',
 'Exam_knowledge': '(妻子)常识',
 'Exam_judge': '(妻子)判断',
 'Exam_caculate': '(妻子)计算',
 'Exam_memory': '(妻子)记忆',
 'Exam_vagina': '(妻子)阴道',
 'Exam_shuffling_gait': '(妻子)四肢',
 'Exam_leu_clue_cell': '(妻子)白带检查-线索细胞',
 'Exam_leu_monilial': '(妻子)白带检查-念珠菌感染',
 'Exam_leu_trichomonas': '(妻子)白带检查-滴虫感染',
 'Exam_leu_amine_odor': '(妻子)白带检查-胺臭味实验',
 'Exam_leuph': '(妻子)白带检查-PH值',
 'Exam_bhb': '(妻子)血细胞分析(Hb)',
 'Exam_brbc': '(妻子)血细胞分析(RBC)',
 'Exam_bplt': '(妻子)血细胞分析(PLT)',
 'Exam_bwbc': '(妻子)血细胞分析(WBC)',
 'Exam_bn': '(妻子)血细胞分析(N)',
 'Exam_be': '(妻子)血细胞分析(E)',
 'Exam_bb': '(妻子)血细胞分析(B)',
 'Exam_bl': '(妻子)血细胞分析(L)',
 'Exam_bm': '(妻子)血细胞分析(M)',
 'Exam_midcell': '(妻子)中值细胞',
 'Exam_urine_routine': '(妻子)尿常规',
 'Exam_abo_rh': '(妻子)血型-Rh',
 'Exam_blood_sugar': '(妻子)血糖  mmol/L',
 'Exam_micro_sp': '(妻子)梅毒螺旋体筛查',
 'Exam_gonorrhoeae': '(妻子)淋球菌筛查',
 'Exam_chlamydiat': '(妻子)沙眼衣原体筛查',
 'Exam_hbs_ag': '(妻子)HBs-Ag',
 'Exam_hbs_ab': '(妻子)HBs-Ab',
 'Exam_hbe_ag': '(妻子)HBe-Ag',
 'Exam_hbe_ab': '(妻子)HBe-Ab',
 'Exam_hbc_ab': '(妻子)HBc-Ab',
 'Exam_alt': '(妻子)肝功能-谷丙转氨酶',
 'Exam_cr': '(妻子)肝功能-肌酐(Cr)',
 'Exam_tsh': '(妻子)促甲状腺激素(TSH)',
 'Exam_rv_igg': '(妻子)风疹病毒(IgG)',
 'Exam_cv_igg': '(妻子)巨细胞病毒(IgG)',
 'Exam_cv_igm': '(妻子)巨细胞病毒(IgM)',
 'Exam_tg_igg': '(妻子)弓形虫 (IgG)',
 'Exam_tg_igm': '(妻子)弓形虫(IgM)',
 'Exam_is_ill_1': '(丈夫)是否患有或曾患疾病',
 'Exam_anemia_1': '(丈夫)是否贫血',
 'Exam_thyroid_disease_1': '(丈夫)是否甲状腺疾病',
 'Exam_hypertension_1': '(丈夫)是否高血压',
 'Exam_chronic_nephritis_1': '(丈夫)是否慢性肾炎',
 'Exam_heart_disease_1': '(丈夫)是否心脏病',
 'Exam_swelling_1': '(丈夫)是否肿瘤',
 'Exam_diabetes_1': '(丈夫)是否糖尿病',
 'Exam_nodule_1': '(丈夫)是否结核',
 'Exam_epilepsy_1': '(丈夫)是否癫痫',
 'Exam_hb_1': '(丈夫)是否乙型肝炎',
 'Exam_sexually_infect_1': '(丈夫)是否淋病/梅毒/衣原体感染等',
 'Exam_psy_disorder_1': '(丈夫)是否精神心理病患',
 'Exam_is_born_ill_1': '(丈夫)是否患有出生缺陷,如先天畸形、遗传病等',
 'Exam_use_medicine_1': '(丈夫)服药情况',
 'Exam_vaccinate_1': '(丈夫)注射疫苗情况',
 'Exam_fengzhen_1': '(丈夫)是否注射风疹疫苗',
 'Exam_yigan_1': '(丈夫)是否注射乙肝疫苗',
 'Exam_vaccinate_others_1': '(丈夫)是否注射其他疫苗',
 'Exam_intermarry_f_1': '(丈夫)祖父母/外祖父母、父母两代家族内近亲结婚史',
 'Exam_disease_history_f_1': '(丈夫)本人或家族成员是否有人患有以下疾病',
 'Exam_thalassaemia_1': '(丈夫)地中海贫血',
 'Exam_down_syndrome_1': '(丈夫)唐氏综合症',
 'Exam_albinism_1': '(丈夫)白化病',
 'Exam_diabetes1_1': '(丈夫)糖尿病',
 'Exam_blood_sick_1': '(丈夫)血有病',
 'Exam_dysgnosia_1': '(丈夫)智力障碍',
 'Exam_favism_1': '(丈夫)蚕豆病',
 'Exam_hearing_disorder_1': '(丈夫)听力障碍',
 'Exam_congenital_heart_disease_1': '(丈夫)先天性心脏病',
 'Exam_seeing_disorder_1': '(丈夫)视力障碍',
 'Exam_infant_mortality_1': '(丈夫)新生儿或婴幼儿死亡',
 'Exam_disease_history_f_others_1': '(丈夫)是否有其他病',
 'Exam_meategg_1': '(丈夫)是否进食肉、蛋类',
 'Exam_hate_veg_1': '(丈夫)是否厌食蔬菜',
 'Exam_raw_meat_1': '(丈夫)是否有食用生肉嗜好',
 'Exam_smoking_1': '(丈夫)吸烟情况',
 'Exam_smoking_box_1': '(丈夫)吸烟次数',
 'Exam_second_hand_smoking_box_1': '(丈夫)平均每天被动吸烟时间(分钟)',
 'Exam_drinking_box_1': '(丈夫)饮酒量',
 'Exam_drug_1': '(丈夫)使用毒麻药品情况',
 'Exam_pregnancy_ready_1': '(丈夫)是否做好怀孕准备',
 'Exam_mumps_1': '(丈夫)腮腺炎',
 'Exam_orchitis_1': '(丈夫)睾丸炎、附睾炎',
 'Exam_varicose_veins_1': '(丈夫)静脉曲张',
 'Exam_sterility_1': '(丈夫)不孕不育',
 'Exam_radial_1': '(丈夫)射线',
 'Exam_noise_1': '(丈夫)噪音',
 'Exam_lead_hg_1': '(丈夫)铅、汞',
 'Exam_new_decoration_1': '(丈夫)新装修',
 'Exam_high_temperature_1': '(丈夫)高温',
 'Exam_pesticide_1': '(丈夫)农药',
 'Exam_catdog_1': '(丈夫)接触猫狗',
 'Exam_shake_1': '(丈夫)震动',
 'Exam_height_1': '(丈夫)身高(cm)',
 'Exam_weight_1': '(丈夫)体重(Kg)',
 'Exam_bmi_1': '(丈夫)体重指数',
 'Exam_heart_rate_1': '(丈夫)心率 (次/分)',
 'Exam_hight_blood_pressure_1': '(丈夫)血压高压值(/mmHg)',
 'Exam_low_blood_pressure_1': '(丈夫)血压低压值(/mmHg)',
 'Exam_specisal_look_1': '(丈夫)有无特殊面容',
 'Exam_retardation_1': '(丈夫)有无智力障碍',
 'Exam_pubes_1': '(丈夫)阴毛',
 'Exam_buge_monggon': '(丈夫)喉结',
 'Exam_thyroid_1': '(丈夫)甲状腺',
 'Exam_lung_1': '(丈夫)肺部',
 'Exam_heart_rhythm_1': '(丈夫)心脏节律是否整齐',
 'Exam_heartmurmur_1': '(丈夫)心脏是否有杂音',
 'Exam_liver': '(丈夫)肝',
 'Exam_shuffling_gait_1': '(丈夫)四肢正常',
 'Exam_penis': '(丈夫)阴茎',
 'Exam_left_orchis_palpable_capacity': '(丈夫)睾丸左侧扪及体积',
 'Exam_right_orchis_palpable_capacity': '(丈夫)睾丸右侧扪及体积',
 'Exam_epididymis': '(丈夫)附睾正常',
 'Exam_seminal_duct': '(丈夫)输精管',
 'Exam_subclinical_varicocele': '(丈夫)精索静脉曲张',
 'Exam_psycology_1': '(丈夫)精神状况',
 'Exam_facial_features_1': '(丈夫)五官',
 'Exam_special_body_1': '(丈夫)特殊体型',
 'Exam_skin_1': '(丈夫)皮肤毛发',
 'Exam_knowledge_1': '(丈夫)常识',
 'Exam_judge_1': '(丈夫)判断',
 'Exam_caculate_1': '(丈夫)计算',
 'Exam_memory_1': '(丈夫)记忆',
 'Exam_urine_routine_1': '(丈夫)尿常规检查',
 'Exam_tpha': '(丈夫)梅素螺旋体筛查',
 'Exam_hbs_ag_1': '(丈夫)HBs-Ag',
 'Exam_hbs_ab_1': '(丈夫)HBs-Ab',
 'Exam_hbe_ag_1': '(丈夫)HBe-Ag',
 'Exam_hbe_ab_1': '(丈夫)HBe-Ab',
 'Exam_hbc_ab_1': '(丈夫)HBc-Ab',
 'Exam_alt_1': '(丈夫)谷丙转氨酶',
 'Exam_cr_1': '(丈夫)肌酐',
 'Exam_f_age': '(妻子)孕龄',
 'Exam_m_age': '(丈夫)孕龄',
 'Exam_uterus_size_big': '(妻子)子宫-大|(妻子)子宫-小',
 'Exam_uterus_size_small': '(妻子)子宫-大|(妻子)子宫-小',
 'Exam_abo_f_a': '(妻子)血型-A型|(妻子)血型-B型|(妻子)血型-AB型|(妻子)血型-O型',
 'Exam_abo_f_b': '(妻子)血型-A型|(妻子)血型-B型|(妻子)血型-AB型|(妻子)血型-O型',
 'Exam_abo_f_ab': '(妻子)血型-A型|(妻子)血型-B型|(妻子)血型-AB型|(妻子)血型-O型',
 'Exam_abo_f_o': '(妻子)血型-A型|(妻子)血型-B型|(妻子)血型-AB型|(妻子)血型-O型',
 'Exam_abo_m_a': '(丈夫)血型-A型|(丈夫)血型-B型|(丈夫)血型-AB型|(丈夫)血型-O型',
 'Exam_abo_m_b': '(丈夫)血型-A型|(丈夫)血型-B型|(丈夫)血型-AB型|(丈夫)血型-O型',
 'Exam_abo_m_ab': '(丈夫)血型-A型|(丈夫)血型-B型|(丈夫)血型-AB型|(丈夫)血型-O型',
 'Exam_abo_m_o': '(丈夫)血型-A型|(丈夫)血型-B型|(丈夫)血型-AB型|(丈夫)血型-O型',
 'logoddsPA_Exam_province': '省份',
 'logodds_Exam_province_0': '省份',
 'logodds_Exam_province_1': '省份',
 'logoddsPA_Exam_mnationality': '男方民族',
 'logodds_Exam_mnationality_0': '男方民族',
 'logodds_Exam_mnationality_1': '男方民族',
 'logoddsPA_Exam_fnationalty': '女方民族',
 'logodds_Exam_fnationalty_0': '女方民族',
 'logodds_Exam_fnationalty_1': '女方民族',
 'logoddsPA_Exam_address_province': '妻子现住址——省',
 'logodds_Exam_address_province_0': '妻子现住址——省',
 'logodds_Exam_address_province_1': '妻子现住址——省',
 'logoddsPA_Exam_faccount_loaction_province': '女方户口所在地——省',
 'logodds_Exam_faccount_loaction_province_0': '女方户口所在地——省',
 'logodds_Exam_faccount_loaction_province_1': '女方户口所在地——省',
 'logoddsPA_Exam_maccount_loaction_province': '男方户口所在地——省',
 'logodds_Exam_maccount_loaction_province_0': '男方户口所在地——省',
 'logodds_Exam_maccount_loaction_province_1': '男方户口所在地——省',
 'logoddsPA_Exam_orchis': '(丈夫)睾丸扪及',
 'logodds_Exam_orchis_0': '(丈夫)睾丸扪及',
 'logodds_Exam_orchis_1': '(丈夫)睾丸扪及',
 'logoddsPA_Exam_prepuce': '(丈夫)包皮',
 'logodds_Exam_prepuce_0': '(丈夫)包皮',
 'logodds_Exam_prepuce_1': '(丈夫)包皮',
 'logoddsPA_Exam_faccount_type': '女方户口性质',
 'logodds_Exam_faccount_type_0': '女方户口性质',
 'logodds_Exam_faccount_type_1': '女方户口性质',
 'logoddsPA_Exam_fedu_level': '女方文化程度',
 'logodds_Exam_fedu_level_0': '女方文化程度',
 'logodds_Exam_fedu_level_1': '女方文化程度',
 'logoddsPA_Exam_fjob': '女方职业',
 'logodds_Exam_fjob_0': '女方职业',
 'logodds_Exam_fjob_1': '女方职业',
 'logoddsPA_Exam_maccount_type': '男方户口性质',
 'logodds_Exam_maccount_type_0': '男方户口性质',
 'logodds_Exam_maccount_type_1': '男方户口性质',
 'logoddsPA_Exam_medu_level': '男方文化程度',
 'logodds_Exam_medu_level_0': '男方文化程度',
 'logodds_Exam_medu_level_1': '男方文化程度',
 'logoddsPA_Exam_mjob': '男方职业',
 'logodds_Exam_mjob_0': '男方职业',
 'logodds_Exam_mjob_1': '男方职业',
 'logoddsPA_Exam_bmod_result_type': '(妇科B超检查)',
 'logodds_Exam_bmod_result_type_0': '(妇科B超检查)',
 'logodds_Exam_bmod_result_type_1': '(妇科B超检查)',
 'logoddsPA_Exam_mens_quanti': '月经量',
 'logodds_Exam_mens_quanti_0': '月经量',
 'logodds_Exam_mens_quanti_1': '月经量',
 'logoddsPA_Exam_pressure': '(妻子)是否感到生活/工作压力',
 'logodds_Exam_pressure_0': '(妻子)是否感到生活/工作压力',
 'logodds_Exam_pressure_1': '(丈夫)是否感到生活/工作压力',
 'logoddsPA_Exam_pressure_1': '(丈夫)是否感到生活/工作压力',
 'logodds_Exam_pressure_1_0': '(妻子)是否感到生活/工作压力',
 'logodds_Exam_pressure_1_1': '(妻子)是否感到生活/工作压力',
 'logoddsPA_Exam_tense_relationship': '(妻子)与亲友、同事的关系是否紧张',
 'logodds_Exam_tense_relationship_0': '(妻子)与亲友、同事的关系是否紧张',
 'logodds_Exam_tense_relationship_1': '(丈夫)亲友、同事的关系是否紧张',
 'logoddsPA_Exam_tense_relationship_1': '(丈夫)亲友、同事的关系是否紧张',
 'logodds_Exam_tense_relationship_1_0': '(妻子)与亲友、同事的关系是否紧张',
 'logodds_Exam_tense_relationship_1_1': '(妻子)与亲友、同事的关系是否紧张',
 'logoddsPA_Exam_economic_pressure_1': '(丈夫)是否感到经济压力',
 'logodds_Exam_economic_pressure_1_0': '(妻子)是否感到经济压力',
 'logodds_Exam_economic_pressure_1_1': '(妻子)是否感到经济压力',
 'logoddsPA_Exam_economic_pressure': '(妻子)是否感到经济压力',
 'logodds_Exam_economic_pressure_0': '(妻子)是否感到经济压力',
 'logodds_Exam_economic_pressure_1': '(丈夫)是否感到经济压力',
 'logoddsPA_Exam_second_hand_smoking': '(妻子)是否存在被动吸烟',
 'logodds_Exam_second_hand_smoking_0': '(妻子)是否存在被动吸烟',
 'logodds_Exam_second_hand_smoking_1': '(丈夫)是否存在被动吸烟',
 'logoddsPA_Exam_second_hand_smoking_1': '(丈夫)是否存在被动吸烟',
 'logodds_Exam_second_hand_smoking_1_0': '(妻子)是否存在被动吸烟',
 'logodds_Exam_second_hand_smoking_1_1': '(妻子)是否存在被动吸烟',
 'logoddsPA_Exam_dysmenorrhea': '痛经',
 'logodds_Exam_dysmenorrhea_0': '痛经',
 'logodds_Exam_dysmenorrhea_1': '痛经',
 'logoddsPA_Exam_drinking': '(妻子)饮酒情况',
 'logodds_Exam_drinking_0': '(妻子)饮酒情况',
 'logodds_Exam_drinking_1': '(丈夫)饮酒情况',
 'logoddsPA_Exam_drinking_1': '(丈夫)饮酒情况',
 'logodds_Exam_drinking_1_0': '(妻子)饮酒情况',
 'logodds_Exam_drinking_1_1': '(妻子)饮酒情况',
 'logoddsPA_Exam_leu_cleanliness': '(妻子)白带检查-清洁度',
 'logodds_Exam_leu_cleanliness_0': '(妻子)白带检查-清洁度',
 'logodds_Exam_leu_cleanliness_1': '(妻子)白带检查-清洁度',
 'logoddsPA_Exam_rh': '(丈夫)Rh型',
 'logodds_Exam_rh_0': '(丈夫)Rh型',
    'logodds_Exam_rh_1': '(丈夫)Rh型'
}
export default  dic;