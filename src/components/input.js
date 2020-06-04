import React from 'react';

const Input = (props) => {
  return (
    <div style={{height: '25px',width: '200px',backgroundImage: `url(${props.src})`,backgroundRepeat: 'no-repeat',backgroundSize: '6%',backgroundColor: 'white',
        borderWidth: 0,borderRadius: 13,backgroundPosition: 15,paddingLeft: 23,marginTop: 20}}>
        <input type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange} required={props.required}
        style={{height: '22px',width: '180px',borderWidth: 0,outline:'none'}}/>
    </div>
  );
};

export default Input;
