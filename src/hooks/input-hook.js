import { useState } from "react";

const useInput = (initialValue, validation, resetRequired = false) => {
  const [value, setValue] = useState(initialValue);
  const changeHandler = (event) => setValue(event.target.value);

  //using the hook without error handling
  const [haseTuched, setHaseTuched] = useState(false);
  if (!validation) {
    return resetRequired
      ? {
          value,
          onChange: changeHandler,
          resetInput: () => setValue(initialValue),
        }
      : {
          value,
          onChange: changeHandler,
        };
  }

  const blurHandler = () => setHaseTuched(true);

  const valueIsValid = validation(value);
  //handel error when the filed is tuched and wrong input was inserted
  const error = !valueIsValid && haseTuched;

  let returnValue = { value, valueIsValid, onChange: changeHandler, onBlur: blurHandler, error };

  if (resetRequired)
    returnValue = {
      ...returnValue,
      resetInput: () => {
        setHaseTuched(false);
        setValue(initialValue);
      },
    };

  return returnValue;
};

export default useInput;
