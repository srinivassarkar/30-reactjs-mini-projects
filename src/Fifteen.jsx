import { useState } from "react";

function Fifteen() {
  

  const items = [
    "Attack on Titan",
    "Ao Haru Ride",
    "Assassination Classroom",
    "Akame ga Kill!",
    "Ace of Diamond",
    "Bleach",
    "Black Clover",
    "Blue Exorcist",
    "Boku no Hero Academia",
    "Boruto: Naruto Next Generations",
    "Code Geass: Lelouch of the Rebellion",
    "Chainsaw Man",
    "The Promised Neverland",
    "Clannad",
    "Code: Breaker",
    "Death Note",
    "Dr. Stone",
    "Dragon Ball Z",
    "Detective Conan",
    "Demon Slayer: Kimetsu no Yaiba",
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fifteen;
