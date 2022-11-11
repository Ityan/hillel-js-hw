import { Input, Center } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

import Button from './components/Button';
import useCounter from './hooks/useCounter';

function App() {
  const { initialValue, count, increment, decrement, setCount, decrementable } = useCounter();

  const handleChange = (event) => {
    let value = +event.target.value;
    if (isNaN(value)) {
      return;
    }
    if (value < initialValue) {
      value = initialValue;
    }
    setCount(value);
  }

  return (
    <Center mt={150}>
      <Button
        isDisabled={decrementable()}
        icon={<MinusIcon />}
        onClick={decrement}
      />
      <Input
        value={count}
        onChange={handleChange}
        htmlSize={1}
        width='auto'
      />
      <Button
        icon={<AddIcon />}
        onClick={increment}
      />
    </Center>
  );
}

export default App;
