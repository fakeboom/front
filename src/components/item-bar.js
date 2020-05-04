//标准的item，黑色name，蓝色value

import React from 'react';
import { Flex, Box } from '@rebass/grid'

export default ({name, value, isNormal=true}) => {
    let style = {};
    if (isNormal) style = {color: '#6E8BEA'};
    else style = {color: '#FF9C88'};

    return (
        <Flex mx={4}>
            <Box width={5/6}>
                <span style={{fontSize: 14, color: '#4C4C4C'}}>{name}</span>
            </Box>
            <Box width={1/6} style={{fontSize: 14}}>
                <span style={style}>{value}</span>
            </Box>
        </Flex>
    )
};