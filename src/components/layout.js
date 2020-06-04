import React from 'react';
import Header from './headers';
import Footer from './footer';


const Layout = ({children}) => {
  return (
      <div style={{
          height: '100%',
          overflow: 'auto',
          
      }}>
      <Header/>
      <div style={{width: 900, minHeight: 'calc(100vh - 100px - 70px - 50px)', margin: '25px auto'}}>
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
