import React from 'react';
import { Flex, Box } from '@rebass/grid';
import Logo from './logo';
import Headers_1 from './headers_1';
import HeaderMore from './header-more';
import Back from "../image/backindex.jpg";
const Header = () => {
    return (
        <div style={{ backgroundImage: `url(${Back})` }}>
            <Flex alignItems='center' style={{ height: 100 }} mx={5}>
                <Box>
                    <Logo />
                </Box>
                <Box ml={4}>
                    <Headers_1 />
                </Box>
                <Box ml='auto'>
                </Box>
                <Box ml={4}>
                    <HeaderMore />
                </Box>
            </Flex>
        </div>
    );
};

export default Header;
