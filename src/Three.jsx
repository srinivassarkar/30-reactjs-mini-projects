import { useState } from "react";

function Three() {
  const [text, setText] = useState("I am the Batman");
  return (
    <div>
      <input
        type="text"
        placeholder="Type here..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>Text: {text}</p>
    </div>
  );
}

export default Three;
