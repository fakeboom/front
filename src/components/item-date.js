//检查日期
import React from 'react';
import { Flex, Box } from '@rebass/grid'

export default ({date}) => {

    return (
        <Flex style={{justifyContent: 'center'}}>
            <Box style={{fontSize: 18}}>
                <span style={{fontSize: 12, color: '#B3B3B3'}}>检查日期：{date}</span>
            </Box>
        </Flex>
    )
};