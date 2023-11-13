import { useState } from "react";

export default function Nine() {
  const [bgColor, setBgColor] = useState("white");

  const changeBg = () => {
    const newColor = bgColor === "white" ? "red" : "white";
    setBgColor(newColor);
  };

  return (
    <div
      onClick={changeBg}
      className={`bg-${bgColor}-500 w-200 h-screen flex items-center justify-center cursor-pointer `}
    >
      Click to change background!
    </div>
  );
}
