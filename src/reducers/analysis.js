const analysis = (state = {}, action) => {
  switch (action.type) {
    case 'POST-MODEL':
      // 向模型发送请求去计算
      return {
        ...state,
        stage: 'POST',
      };
    case 'GET-COMMON':
      // 获得analysis的一些简单的信息
      return {
        ...state,
        stage: action.stage,
        general_care_w: action.general_care_w,
        general_care_h: action.general_care_h,
        physical_care_w: action.physical_care_w,
        physical_care_h: action.physical_care_h,
        clinical_care_w: action.clinical_care_w,
        clinical_care_h: action.clinical_care_h,
        analysis_care_w: action.analysis_care_w,
        analysis_care_h: action.analysis_care_h,
        // 可能还有一些 根据专家库分析得到的结果
      };
    case 'GET-MODEL':
      // 获得模型的计算结果，只有stage恰当且有返回值才能执行此操作
      return {
        ...state,
        output: action.output,
        reasons: action.reasons,
      };
    default:
      return state;
  }
};

export default analysis;
