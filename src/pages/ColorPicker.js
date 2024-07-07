import React, { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('#E04F30');

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h3>Pick a Color</h3>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ width: '100%', height: '150px' }}
      />
      <div>
        <p>HEX: {color}</p>
        <p>RGB: {`${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}`}</p>
      </div>
    </div>
  );
}

export default ColorPicker;
