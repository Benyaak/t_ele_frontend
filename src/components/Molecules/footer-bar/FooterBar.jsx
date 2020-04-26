import React from 'react';
import GDPRButton from '../../Atoms/gdpr-button/GDPRButton';

const style = {
    backgroundColor: "gray",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    color: 'white'
}

const phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}


function Footer({ children }) {
    return (
      <div>
        <div style={phantom} />
        <div style={style}>
          { children }
          <div>
            
            
          </div>
        </div>
      </div>
    )
}

export default Footer