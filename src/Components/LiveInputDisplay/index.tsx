import React, { useState } from 'react';
import './LiveInputDisplay.css';

function LiveInputDisplay() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e:any) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="container">
      <label htmlFor="addressInput">Enter Address:</label>
      <input
        type="text"
        id="addressInput"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type your address..."
        className="text-input"
      />
      {inputValue && (
        <div className="floating-box">
          {inputValue}
        </div>
      )}
    </div>
  );
}

export default LiveInputDisplay;
