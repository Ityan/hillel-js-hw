import { memo } from "react";

import { Input, IconButton } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

import useCounter from '../hooks/useCounter';

const Counter = () => {
  const { initialValue, count, increment, decrement, setCount, reset } = useCounter();

  const handleChange = ({ target: { value } }) => {
    if (value !== "" && value < initialValue) {
      reset();
    } else {
      setCount(+value);
    }
  }

  const decrementable = () => count <= initialValue;

  return (
    <>
      <IconButton
        disabled={decrementable()}
        icon={<MinusIcon />}
        onClick={decrement}
      />
      <Input
        value={count}
        onChange={handleChange}
        htmlSize={1}
        width='auto'
      />
      <IconButton
        icon={<AddIcon />}
        onClick={increment}
      />
    </>
  )
};

export default memo(Counter);