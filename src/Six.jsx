import { useEffect, useState } from "react";

export default function Six() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      const data = await response.json();
      //console.log(data);

      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <p>
          User ID: {data.userId} <br />
          Title: {data.title}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
