import { useState } from "react";

const useInput = (initialValue, validation) => {
  const [value, setValue] = useState(initialValue);
  const changeHandler = (event) => {
    setValue(event.target.value);
  };
  //using the hook without error handling
  const [haseTuched, setHaseTuched] = useState(false);
  if (!validation) {
    return {
      value,
      onChange: changeHandler,
      resetInput: () => setValue(initialValue),
    };
  }

  const blurHandler = () => setHaseTuched(true);

  const valueIsValid = validation(value);
  //handel error when the filed is tuched and no input or wrong input was inserted
  const error = !valueIsValid && haseTuched;

  return {
    value,
    onChange: changeHandler,
    onBlur: blurHandler,
    error,
    resetInput: () => {
      setHaseTuched(false);
      setValue(initialValue);
    },
  };
};

export default useInput;
