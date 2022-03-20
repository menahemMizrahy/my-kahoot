import { useState } from "react";

const useInput = (initialValue, validation) => {
  const [value, setValue] = useState(initialValue);
  const changeHandler = (event) => setValue(event.target.value.trim());

  const [haseTuched, setHaseTuched] = useState(false);
  const blurHandler = () => setHaseTuched(true);

  const valueIsValid = validation(value);
  const error = !valueIsValid && haseTuched;

  return { value, onChange: changeHandler, onBlur: blurHandler, error };
};

export default useInput;
