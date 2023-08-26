import { useState } from "react";
import WeatherGrid from "./pages/weatherGrid";
import "./App.css";
import WeatherInputComponent from "./components/weatherInputComponent";

const App = () => {
  const [city, setCity] = useState("");
  return (
    <div className="App">
      <div className="container">
        <div className="get_input_container">
          <div className="input_text">
            Right Now in -
            <WeatherInputComponent
              type={"text"}
              placeholder={"city"}
              className={"city_input"}
              setCity={setCity}
            />
          </div>
        </div>
        <div className="weather_container">
          <>
            <WeatherGrid city={city} />
          </>
        </div>
      </div>
    </div>
  );
};

export default App;
