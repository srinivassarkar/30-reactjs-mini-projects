import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function TwentySeven() {
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setData1(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
    axios
      .get("https://jsonplaceholder.typicode.com/todos/2")
      .then((response) => {
        setData2(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div>
      <h2>Data from API Call 1:</h2>
      {data1 && (
        <div>
          <p>User ID: {data1.userId}</p>
          <p>ID: {data1.id}</p>
          <p>Title: {data1.title}</p>
          <p>Completed: {data1.completed ? "Yes" : "No"}</p>
        </div>
      )}

      <h2>Data from API Call 2:</h2>
      {data2 && (
        <div>
          <p>User ID: {data2.userId}</p>
          <p>ID: {data2.id}</p>
          <p>Title: {data2.title}</p>
          <p>Completed: {data2.completed ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}

export default TwentySeven;
