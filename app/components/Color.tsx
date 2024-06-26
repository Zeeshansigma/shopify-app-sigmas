import {ColorPicker} from '@shopify/polaris';
import {useState} from 'react';

function Color() {
  const [color, setColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 1,
  });

  return <ColorPicker onChange={setColor} color={color} />;
}
export default Color;