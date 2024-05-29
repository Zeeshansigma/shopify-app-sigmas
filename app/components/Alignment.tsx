import {Select} from '@shopify/polaris';
import {useState, useCallback} from 'react';
interface SelectExampleProps {
  label: string;
}
function SelectExample({ label }: SelectExampleProps) {
  const [selected, setSelected] = useState('Left');

  const handleSelectChange = useCallback(
    (value: string) => setSelected(value),
    [],
  );

  const options = [
    {label: 'Left', value: 'left'},
    {label: 'Center', value: 'center'},
    {label: 'Right', value: 'right'},
  ];

  return (
    <Select
      label={label}
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />
  );
}

export default SelectExample;