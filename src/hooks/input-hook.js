import { useState } from "react";

const useInput = (initialValue, validation) => {
  const [value, setValue] = useState(initialValue);
  const changeHandler = (event) => {
    setValue(event.target.value);
  };

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
