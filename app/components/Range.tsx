import {RangeSlider} from '@shopify/polaris';
import {useState, useCallback} from 'react';
interface RangeSliderFont {
  label:string;
}
function RangeSliderFont({label}: RangeSliderFont) {
  const [rangeValue, setRangeValue] = useState(0);

  const handleRangeSliderChange = useCallback(
    (value: number) => setRangeValue(value),
    [],
  );

  return (
      <RangeSlider
        output
        label={label}
        min={5}
        max={20}
        value={rangeValue}
        onChange={handleRangeSliderChange}
      />
  );
}
export default RangeSliderFont;