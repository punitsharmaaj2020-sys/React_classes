import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: dark ? "#333" : "#FFF",
        color: dark ? "#FFF" : "#333",
        height: "100vh"
      }}
    >
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;