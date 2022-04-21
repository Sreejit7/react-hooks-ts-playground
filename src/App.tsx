import { useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import "./styles.css";

export default function App() {
  const [originalVal, setOriginalVal] = useState("");

  const debouncedVal = useDebounce(originalVal, 500);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Type anything"
        value={originalVal}
        onChange={(e) => setOriginalVal(e.target.value)}
      />
      <h3>Original Value: {originalVal}</h3>
      <h3>Debounced Value: {debouncedVal}</h3>
    </div>
  );
}
