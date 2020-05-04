import React from 'react';
import Radium from 'radium';

const Button = ({content, type = 'button', active = false, onClick, style}) => {
  const activeStyle = {
    backgroundColor: 'rgb(255, 156, 136)',
    ':hover': {opacity: 0.75}
  };
  return (
    <input type={type} value={content} onClick={onClick} style={
      [
        {
          borderRadius: '18px',
          backgroundColor: '#4743FF',
          textAlign: 'center',
          fontSize: 15,
          fontWeight: 'lighter',
          color: 'white',
          border: 'none',
          outline: 'none',
          padding: "3px 22px",
          cursor: 'pointer',
          verticalAlign: 'middle',
          ':hover': {backgroundColor: 'rgb(255, 156, 136)'}
        },
        active && activeStyle,
        style,
      ]
    }/>
  );
};

export default Radium(Button);
