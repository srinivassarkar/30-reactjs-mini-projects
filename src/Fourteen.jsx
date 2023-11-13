import { useState,useEffect } from "react";

export default function Fourteen() {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c4646eb2edfed1c10ab7b6267581a8b0`
        );
        const data = await response.json();

        setApiData(data);
      });
    }
  }, []);

  console.log(apiData);

  return (
    <div>
      {apiData ? (
        <div>
          <h2>Current Weather Conditions</h2>
          <p>City: {apiData.name}</p>
          <p>Temperature: {parseInt(apiData.main.temp) - 273}°C</p>
          <p>Humidity: {apiData.main.humidity}%</p>
          <p>Wind speed: {apiData.wind.speed} m/s</p>
          <p>Weather: {apiData.weather[0].description}</p>
        </div>
      ) : (
        "Fetching Weather Data..."
      )}
    </div>
  );
}
