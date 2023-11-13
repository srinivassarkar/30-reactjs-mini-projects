import { useState } from "react";

export default function Seventeen() {
  const [selectedColor, setSelectedColor] = useState("#000000");

  return (
    <div className="flex items-center justify-center">
      <input type="color" onChange={(e) => setSelectedColor(e.target.value)} />
      <div style={{ width: "100px", height: "100px", backgroundColor: selectedColor }}></div>
    </div>
  );
}
