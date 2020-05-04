import React from 'react';
import {Box, Flex} from '@rebass/grid';

import messageLeft from '../image/message-left.png';
import messageRight from '../image/message-right.png';

export default ({content, title='消息', onClose}) => {
  return (
      <Flex style={{height: '100vh', width: '100vw', position: 'fixed', backgroundColor: 'rgba(0,0,0,0.3)', top: 0, left: 0, zIndex: 100}}>
        <Box style={{width: 400, height: 270, borderRadius: 15, margin: '20vh auto 0', backgroundColor: '#5555FF'}}>
          <Flex mt={1}>
            <Box ml={2} >
              <img src={messageLeft} alt='' style={{width: 15}}/>
            </Box>
            <Box ml={1}>
              <span style={{color: 'white', fontSize: 'small'}}>消息</span>
            </Box>
            <Box ml={'auto'} mr={2} style={{cursor: 'pointer'}} onClick={onClose}>
              <img src={messageRight} alt='' style={{width: 15}}/>
            </Box>
          </Flex>
          <Flex justifyContent={'center'} mt={30}>
            <Box width={300}>
              <div style={{color: 'white', fontHeight: 20, fontSize: 'small'}}>{content}</div>
            </Box>
          </Flex>
        </Box>
    </Flex>
  );
};
