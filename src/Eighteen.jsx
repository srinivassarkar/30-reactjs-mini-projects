import { useState } from "react";

export default function Eighteen() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={toggle} className="md:hidden sm:hidden">
        ☰
      </button>
      <ul
        className={`lg:flex ${isOpen ? "block" : "hidden"} md:flex sm:flex ${
          isOpen ? "bg-gray-500" : ""
        }`}
      >
        <li>Home</li>
        <li>Notifications</li>
        <li>Contact</li>
        <li>About</li>
        <li>Profile</li>
      </ul>
    </div>
  );
}
