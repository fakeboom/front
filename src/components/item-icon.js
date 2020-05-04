//带icon的item组件， 体格检查的身高体重等用到

import React from 'react';
import { Flex, Box } from '@rebass/grid'

export default ({name, value, icon}) => {
  return (
    <Flex style={{alignItems: 'center'}}>
      <Box>
        <img src={icon} alt='' width={'24'}/>
      </Box>
      <Box ml={2}>
        <Flex >
          <Box mt={-1}>
            <span style={{color: '#95A3F4', fontSize: '11px'}}>{name}</span>
          </Box>
        </Flex>
        <Flex>
          <Box mt={-2}>
            <span style={{color: '#4C4C4C', fontSize: '11px'}}>{value}</span>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
};
