import React, { useEffect, useState } from "react";
import WeatherSkeletonComponent from "../components/weatherSkeletonComponent";
import WeatherClimateComponent from "../components/weatherClimateComponent";
import WeatherInfoCards from "../components/weatherInfoCards";

const WeatherGrid = ({ city }) => {
  let apiKey = "008b708ad8d113b7c0dffeec6ae6b3b0";
  let src = "https://cdn-icons-png.flaticon.com/512/2480/2480660.png";
  const [weatherData, setWeatherData] = useState();

  
  // if the city is change the input value  - useEffect will trigger everytime
  useEffect(() => {
// fetching data asynchronaously if the city is change
async function getFetchData() {
  try {
    if (city.length > 2) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=` +
          apiKey
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
}

    getFetchData();
  }, [city]);

  // based on the climate set the image
  const setImage = () => {
    switch (weatherData.weather[0].description) {
      case "scattered clouds":
        src = "https://cdn-icons-png.flaticon.com/512/11198/11198931.png";
        break;
      case "light rain":
        src = "https://cdn-icons-png.flaticon.com/512/11199/11199094.png";
        break;
      case "overcast clouds":
        src = "https://cdn-icons-png.flaticon.com/512/7776/7776315.png";
        break;
      case "few clouds":
        src = "https://cdn-icons-png.flaticon.com/512/414/414927.png";
        break;
      case "broken clouds":
        src = "https://cdn-icons-png.flaticon.com/512/11016/11016081.png";
        break;
      case "mist":
        src = " https://cdn-icons-png.flaticon.com/512/6359/6359619.png ";
        break;
      case "haze":
        src = " https://cdn-icons-png.flaticon.com/512/6359/6359619.png ";
        break;
      case "clear sky":
        src = "https://cdn-icons-png.flaticon.com/512/3258/3258116.png ";
        break;
      case "dust":
        src = "https://cdn-icons-png.flaticon.com/512/3071/3071002.png";
        break;
      default:
        src = "https://cdn-icons-png.flaticon.com/512/2480/2480660.png";
        break;
    }
  };

  return (
    <>
      {weatherData ? (
        <div className="weather_grid_container">
          <div className="grid_left">
            <WeatherClimateComponent
              title={weatherData.name}
              desc={weatherData.weather[0].description}
              data={weatherData}
              setImage={setImage}
              src={src}
            />
          </div>
          <div className="grid_right">
            <WeatherInfoCards
              temperature={weatherData.main.temp}
              feels={weatherData.main.feels_like}
              humidity={weatherData.main.humidity}
              pressure={weatherData.main.pressure}
              windSpeed={weatherData.wind.speed}
              sunset={weatherData.sys.sunset}
            />
          </div>
        </div>
      ) : (
        <div className="weather_grid_container">
          <div className="grid_left">
            <WeatherClimateComponent
              title={"..."}
              desc={"....."}
              setImage={setImage}
              data={""}
              src={src}
            />
          </div>
          <div className="grid_right">
            <WeatherSkeletonComponent
              title={"Temperature"}
              value={"...."}
              symbol={"°C"}
              url={"https://cdn-icons-png.flaticon.com/512/1843/1843544.png"}
            />
            <WeatherSkeletonComponent
              title={"Feels like"}
              value={"...."}
              symbol={"°C"}
              url={"https://cdn-icons-png.flaticon.com/512/8031/8031037.png"}
            />
            <WeatherSkeletonComponent
              title={"Humidity"}
              value={"...."}
              symbol={"%"}
              url={"https://cdn-icons-png.flaticon.com/512/5664/5664979.png"}
            />
            <WeatherSkeletonComponent
              title={"Pressure"}
              value={"...."}
              symbol={"hPa"}
              url={"https://cdn-icons-png.flaticon.com/512/2299/2299296.png"}
            />
            <WeatherSkeletonComponent
              title={"Wind Speed"}
              value={"...."}
              symbol={"mph"}
              url={"https://cdn-icons-png.flaticon.com/512/959/959711.png "}
            />
            <WeatherSkeletonComponent
              title={"Sunset"}
              value={"..."}
              url={"https://cdn-icons-png.flaticon.com/512/1852/1852617.png"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherGrid;
