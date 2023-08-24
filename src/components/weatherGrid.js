import React, { useEffect } from "react";

const WeatherGrid = ({ weatherData }) => {
  console.log(weatherData);
  let src = "https://cdn-icons-png.flaticon.com/512/2480/2480660.png";
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

  let humanReadableDate = "";

  const getSunset = () => {
    let timestamp = weatherData.sys.sunset;
    let date = new Date(timestamp * 1000); // Convert to milliseconds
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    humanReadableDate = date.toLocaleString("en-US", options); // Convert to human-readable time
  };

  return (
    <>
      {weatherData ? (
        <div className="weather_grid_container">
          <div className="grid_left">
            <h2>{weatherData.name}</h2>
            {setImage()}
            <img src={src} width={150} alt="gif" />
            <h4>{weatherData.weather[0].description}</h4>
          </div>
          <div className="grid_right">
            <div className="mini-card">
              <h3>Temperature</h3>
              <div className="mini_flex">
                <p>{weatherData.main.temp}°C</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1843/1843544.png "
                  height={30}
                  alt="temperature"
                />
              </div>
            </div>
            <div className="mini-card">
              <h3>Feels like</h3>
              <div className="mini_flex">
                <p>{weatherData.main.feels_like}°C</p>
                <img
                  src="   https://cdn-icons-png.flaticon.com/512/8031/8031037.png "
                  height={30}
                  alt="feel"
                />
              </div>
            </div>
            <div className="mini-card">
              <h3>Humidity</h3>
              <div className="mini_flex">
                <p>{weatherData.main.humidity}%</p>
                <img
                  src="   https://cdn-icons-png.flaticon.com/512/5664/5664979.png "
                  height={30}
                  alt="Humidity"
                />
              </div>
            </div>
            <div className="mini-card">
              <h3>Pressure</h3>
              <div className="mini_flex">
                <p>{Math.round()}hPa</p>
                <img
                  src="   https://cdn-icons-png.flaticon.com/512/2299/2299296.png "
                  height={30}
                  alt="pressure"
                />
              </div>
            </div>
            <div className="mini-card">
              <h3>Wind Speed</h3>
              <div className="mini_flex">
                <p>{2.237 * weatherData.wind.speed.toFixed(1) + "mph"}</p>
                <img
                  src=" https://cdn-icons-png.flaticon.com/512/959/959711.png  "
                  height={30}
                  alt="wind"
                />
              </div>
            </div>
            <div className="mini-card">
              <h3>Sunset</h3>
              <div className="mini_flex">
                {getSunset()}
                <p>{humanReadableDate}</p>
                <img
                  src="   https://cdn-icons-png.flaticon.com/512/1852/1852617.png "
                  height={30}
                  alt="temperature"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="weather_grid_container">
          <div className="grid_left">
            <h2>.....</h2>
            <img src={src} width={150} alt="gif" />
            <h4>......</h4>
          </div>
          <div className="grid_right">
            <div className="temperature mini-card">
              <h3>Temperature:</h3>
              <div className="mini_flex">
                <p>.....</p>
                <img
                  src="   https://cdn-icons-png.flaticon.com/512/1843/1843544.png "
                  height={30}
                  alt="temperature"
                />
              </div>
            </div>
            <div className="temperature mini-card">
              <h3>Feels like</h3>
              <div className="mini_flex">
                <p>.....</p>
                <img
                  src="   https://cdn-icons-png.flaticon.com/512/8031/8031037.png  "
                  height={30}
                  alt="feel"
                />
              </div>
            </div>
            <div className="temperature mini-card">
              <h3>Humidity</h3>
              <div className="mini_flex">
                <p>.....</p>
                <img
                  src="   https://cdn-icons-png.flaticon.com/512/5664/5664979.png "
                  height={30}
                  alt="Humidity"
                />
              </div>
            </div>
            <div className="temperature mini-card">
              <h3>Pressure</h3>
              <div className="mini_flex">
                <p>.....</p>
                <img
                  src="   https://cdn-icons-png.flaticon.com/512/2299/2299296.png  "
                  height={30}
                  alt="pressure"
                />
              </div>
            </div>
            <div className="temperature mini-card">
              <h3>Wind Speed</h3>
              <div className="mini_flex">
                <p>.....</p>
                <img
                  src="   https://cdn-icons-png.flaticon.com/512/959/959711.png  "
                  height={30}
                  alt="wind"
                />
              </div>
            </div>
            <div className="temperature mini-card">
              <h3>Sunset</h3>
              <div className="mini_flex">
                <p>.......</p>
                <img
                  src="   https://cdn-icons-png.flaticon.com/512/1852/1852617.png "
                  height={30}
                  alt="temperature"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherGrid;
