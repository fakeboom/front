import React from 'react';
import {Link} from 'react-router-dom';
import {Flex, Box} from '@rebass/grid';
import Button from "../../components/button";


const Title6 = () => {
  return (
    <Flex>
      <Box width={2 / 11}>
        档案编号
      </Box>
      <Box width={2 / 11}>
        预约日期
      </Box>
      <Box width={2 / 11}>
        双方姓名
      </Box>
      {/*<Box width={3 / 11}>*/}
        {/*标签*/}
      {/*</Box>*/}
      <Box width={2 / 11}>
        操作
      </Box>
    </Flex>
  )
};

const Card6 = ({id, female, male, date, tags}) => {
  return (
    <li style={{borderBottom: 'solid 1px #aaa', padding: '10px 0', listStyleType: 'none'}}>
      <Flex>
        <Box width={2 / 11}>
          {id}
        </Box>
        <Box width={2 / 11}>
          {date}
        </Box>
        <Box width={2 / 11}>
          <Link to={`/id${id}`} style={{textDecoration: 'none'}}>
            {female} & {male}
          </Link>
        </Box>
        {/*<Box width={3 / 11}>*/}
          {/*{tags}*/}
        {/*</Box>*/}
        <Box width={2 / 11}>
          <Link to={`/id${id}`} style={{textDecoration: 'none'}}>
            <Button content={'查看'}/>
          </Link>
        </Box>
      </Flex>
    </li>
  );
};

export {Title6, Card6};
