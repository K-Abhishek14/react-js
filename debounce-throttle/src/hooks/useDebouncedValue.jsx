import React, { useEffect, useState } from 'react'

const useDebouncedValue = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebouncedValue