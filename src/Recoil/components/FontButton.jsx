import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fontSizeState, fontSizeLabelState } from '../store';

export default function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  const handleClick = () => {
    setFontSize(fontSize + 1);
  };

  return (
    <>
      <div>Current font size: {fontSizeLabel}</div>

      <button onClick={handleClick} style={{ fontSize }}>
        Click to Enlarge
      </button>
    </>
  );
}
