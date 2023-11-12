import { useState } from "react";

export default function Five() {
  const [isToggled, setisToggled] = useState(false);

  function onOff() {
    return setisToggled(!isToggled);
  }

  return (
    <div>
      <label>
        <input type="checkbox" name="" id="" onChange={onOff} />
      </label>
      <p>{isToggled ? "ON" : "OFF"}</p>
    </div>
  );
}
