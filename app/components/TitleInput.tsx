import {TextField} from '@shopify/polaris';
import {useState, useCallback} from 'react';

function TextFieldExample() {
  const [value, setValue] = useState('CASH ON DELIVERY');

  const handleChange = useCallback(
    (newValue: string) => setValue(newValue),
    [],
  );

  return (
    <TextField
      label="Text"
      value={value}
      onChange={handleChange}
      autoComplete="off"
    />
  );
}

export default TextFieldExample;