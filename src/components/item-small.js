//标准的item，黑色name，蓝色value

import React from 'react';
import { Flex, Box } from '@rebass/grid'

export default ({name, value, isNormal=true}) => {
    let style = {};
    if (isNormal) style = {color: '#6E8BEA'};
    else style = {color: '#FF9C88'};

    return (
        <Flex mx={4}>
            <Box width={6/8}>
                <span style={{fontSize: 12, color: '#808080', marginLeft: '5px'}}>{name}</span>
            </Box>
            <Box width={2/8} style={{fontSize: 12}}>
                <span style={style}>{value}</span>
            </Box>
        </Flex>
    )
};
