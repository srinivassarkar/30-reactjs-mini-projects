function Four() {
  const superheroes = [
    "Superman",
    "Batman",
    "Wonder Woman",
    "Spider-Man",
    "Iron Man",
    "Captain America",
    "Thor",
    "Hulk",
    "Black Widow",
    "Aquaman",
    "The Flash",
  ];

  return (
    <div>
      <ul>
        {superheroes.map((superheroe, index) => (
          <li key={index}>{superheroe}</li>
        ))}
      </ul>
    </div>
  );
}

export default Four;
