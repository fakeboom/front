// 大标题组件，例如：
// 一般情况
// 包括疾病史、用药史、孕育史、家族史、生活习惯和社会心理等

import React from 'react';
import { Flex, Box } from '@rebass/grid'

export default ({title, text, picSrc}) => {

    return (
        <Flex>
            <Box>
                <img src={picSrc} alt={''} width='60px'/>
            </Box>
            <Box ml={2}>
                <Flex>
                    <Box style={{fontSize: 40, color: '#8C8C8C'}}>
                        {title}
                    </Box>
                </Flex>
                <Flex>
                    <Box style={{fontSize: 14, color: '#8C8C8C'}}>
                        {text}
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
};
