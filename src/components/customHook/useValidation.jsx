import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState();
    const [formValid, setFormValid] = useState(false);
    useEffect(() => {
      value ? setEmpty(false) : setEmpty(true);
    }, [value]);
    useEffect(() => {
      if (isEmpty) {
        setFormValid(false);
      } else {
        setFormValid(true);
      }
    }, [isEmpty]);

    return {
      isEmpty,
      formValid,
    };
  };

  export default useValidation