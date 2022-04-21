import { useEffect, useState } from "react";

export const useDebounce = <T extends unknown>(
  state: T,
  delay: number = 500
): T => {
  const [debouncedState, setDebouncedState] = useState<T>(state);

  useEffect(() => {
    const debouncer = setTimeout(() => {
      setDebouncedState(state);
    }, delay);

    return () => {
      clearTimeout(debouncer);
    };
  }, [state, delay]);

  return debouncedState;
};
