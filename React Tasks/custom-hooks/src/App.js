import React from "react";
import UseLocalStorage from "./UseLocalStorage";

function App() {
  const [name, setName] = UseLocalStorage("name", "");

  return <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)} />;
}

export default App;
