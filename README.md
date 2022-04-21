# react-hooks-ts-playground
A collection of useful custom hooks for React apps written is TypeScript

## Hooks Collection

- **useDebounce**

   useDounce is a hook that helps in debouncing any user input or state for a certain delay. The debounced value only gets update if no changes occurs to the state for that delay period. (If the delay is 1s, then the debounced value 1s after the last time the state was changed). This helps in making the component more performant (particularly in case you're doing some heavy operation like an API call on every state/user-input update).
   
   code example:
    
   ``` const debouncedSearchValue = useDebounce(searchValue, 300); ```

   
