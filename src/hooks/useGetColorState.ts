// Modules
import { useEffect, useState } from 'react';

export type ColorTypes = 'danger' | 'primary' | 'secondary' | 'success' | 'warning';

export default function useGetColorState(type:ColorTypes) {

  const [color, setColor] = useState('');

  useEffect(() => {
    switch (type) {
      case 'danger': 
        setColor('#FF1818');
      break;
      case 'primary': 
        setColor('#0E3EDA');
      break;
      case 'secondary': 
        setColor('#203239');
      break;
      case 'success': 
        setColor('#519259');
      break;
      case 'warning': 
        setColor('#F0A500');
      break;
    }
  }, []);

  return color;
}
