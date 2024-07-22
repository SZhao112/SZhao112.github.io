import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function ColorPicker() {
  const [color, setColor] = useState('#E04F30');
  const { t } = useTranslation();

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h3>{t('pick_a_color')}</h3>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ width: '100%', height: '150px' }}
      />
      <div>
        <p>{t('hex')}: {color}</p>
        <p>{t('rgb')}: {`${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}`}</p>
      </div>
    </div>
  );
}

export default ColorPicker;


