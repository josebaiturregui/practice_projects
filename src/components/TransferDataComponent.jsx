import React, { useState } from 'react'

const TransferDataComponent = ({ getColor }) => {
 
    const [activeColor, setActiveColor] = useState();

    const handleChange = (e) => {
       const { value } = e.target;

       setActiveColor(value);

       getColor(value);
    }

    return (
    <>
    
    <input
        type="Text"
        onChange={handleChange}
        value={activeColor}
        style={{color:'black'}}
            />
    </>
  );
};

export default TransferDataComponent;