import React from 'react';
import {Flex, Box} from '@rebass/grid';

import Logo from './logo';
import HeaderNav from './header-nav';
import HeaderUser from './header-user';
import HeaderNews from './header-news';
import HeaderMore from './header-more';

const Header = () => {
  return (
    <div style={{background: 'linear-gradient(180deg,#402cff,#6a6cff)'}}>
      <Flex alignItems='center' style={{height: 100}} mx={5}>
        <Box>
          <Logo/>
        </Box>
        <Box ml={4}>
          <HeaderNav/>
        </Box>
        <Box ml='auto'>
          <HeaderUser/>
        </Box>
        <Box ml={4}>
          <HeaderNews/>
        </Box>
        <Box ml={4}>
          <HeaderMore/>
        </Box>
      </Flex>
    </div>
  );
};

export default Header;
