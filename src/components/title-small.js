// 小标题组件，一般情况、体格检查会用到。例如：疾病史
import React from 'react';
import { Flex, Box } from '@rebass/grid'

export default ({title, text, picSrc}) => {

    return (
        <Flex mt={4} mb={3} marginLeft={20}>
            <Box>
                <img src={picSrc} alt={''} width={50}/>
            </Box>
            <Box ml={3}>
                <Flex>
                    <Box style={{fontSize: 30, color: '#8C8C8C'}}>
                        {title}
                    </Box>
                </Flex>
                <Flex>
                    <Box style={{fontSize: 16, color: '#8C8C8C'}}>
                        {text}
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
};