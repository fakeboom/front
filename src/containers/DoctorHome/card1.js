import React from 'react';
import {Link} from 'react-router-dom';
import {Flex, Box} from '@rebass/grid';

import Button from '../../components/button';

const Title1 = () => {
  return (
    <Flex>
      <Box width={2 / 10}>
        档案编号
      </Box>
      <Box width={2 / 10}>
        预约日期
      </Box>
      <Box width={2 / 10}>
        双方姓名
      </Box>
      {/*<Box width={3 / 10}>*/}
        {/*标签*/}
      {/*</Box>*/}
      <Box width={2 / 10}>
        查看信息
      </Box>
    </Flex>
  )
};

const Card1 = ({id, female, male, date, tags}) => {
  return (
    <li style={{borderBottom: 'solid 1px #aaa', padding: '10px 0', listStyleType: 'none'}}>
      <Flex>
        <Box width={2 / 10}>
          {id}
        </Box>
        <Box width={2 / 10}>
          {date}
        </Box>
        <Box width={2 / 10}>
          <Link to={`/id${id}`} style={{textDecoration: 'none'}}>
            {female} & {male}
          </Link>
        </Box>
        {/*<Box width={3 / 10}>*/}
          {/*{tags}*/}
        {/*</Box>*/}
        <Box width={2 / 10}>
          <Link to={`/id${id}`} style={{textDecoration: 'none', outline: 'none', color: 'unset'}}>
            <Button content='查看'/>
          </Link>
        </Box>
      </Flex>
    </li>
  );
};

export {Title1, Card1};
