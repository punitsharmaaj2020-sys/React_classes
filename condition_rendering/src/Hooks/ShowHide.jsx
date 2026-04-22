  import { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && (
        <p>This content is now visible 👀</p>
      )}
    </div>
  );
}

export default ShowHide;