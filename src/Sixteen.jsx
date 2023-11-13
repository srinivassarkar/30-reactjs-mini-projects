import { useState } from "react";

export default function Sixteen() {
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

  const itemsPerPage = 2;

  const [currentPage, setcurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  //console.log(currentItems)

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {currentItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      {pageNumbers.map((number, index) => (
        <li key={index} onClick={() => setcurrentPage(number)}>
          {number}
        </li>
      ))}
    </div>
  );
}
