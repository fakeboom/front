import React from 'react';
import {Flex, Box} from '@rebass/grid'

export default ({value}) => {
  let temp = value * 400;
  let remain = 400 - value * 400;
  let Numremain = remain - 28;
  let myColor = 'linear-gradient(to left,#402cff,#7a8aff)';
  if (value < 0.3 && value > 0) {
    myColor = 'linear-gradient(to left,#402cff,#7a8aff)';
  } else if (value >= 0.3 && value < 0.4) {
    myColor = 'linear-gradient(to left,#D4C931,#E3B000)';
  } else {
    myColor = 'linear-gradient(to left,#E34700,#E37800)';
  }
  return (
    <div>
      <Flex style={{backgroundColor: '#A0D8D1', borderRadius: '15px', width: '400px', height: '20px'}}>
        <Box width={temp} style={{backgroundImage: myColor, borderRadius: '15px'}}>
        </Box>
      </Flex>
      <Flex mt={2} width={'400px'}>
        <Box width={temp}>
          <span>0</span>
        </Box>
        <Box width={remain}>
          <span style={{marginLeft: '-18px'}}>{value ? value.toFixed(4) : ''}</span>
          <span style={{marginLeft: Numremain}}>1.0</span>
        </Box>
      </Flex>
    </div>
  )
};
