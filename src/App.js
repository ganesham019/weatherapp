import { useEffect, useState } from "react";
import "./App.css";
import WeatherGrid from "./components/weatherGrid";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();
  let apiKey = "008b708ad8d113b7c0dffeec6ae6b3b0";

  const getFetchData = async () => {
    try {
      if (city.length > 2) {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData("");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const inputChange = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    getFetchData();
  }, [city]);

  return (
    <div className="App">
      <div className="container">
        <div className="get_input_container">
          <div className="input_text">
            Right Now in -
            <input
              type="text"
              placeholder="city"
              className="city_input"
              onChange={(e) => inputChange(e)}
            />
          </div>
        </div>
        <div className="weather_container">
          <>
            <WeatherGrid weatherData={weatherData} />
          </>
        </div>
      </div>
    </div>
  );
};

export default App;
