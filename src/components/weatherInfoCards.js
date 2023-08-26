import React from "react";
import WeatherInfoComponent from "./weatherInfoComponent";

const WeatherInfoCards = ({
  temperature,
  feels,
  humidity,
  pressure,
  windSpeed,
  sunset,
}) => {
  let humanReadableDate = "";

  //   calculate sunset time for human readable
  let timestamp = sunset;
  let date = new Date(timestamp * 1000); // Convert to milliseconds
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  humanReadableDate = date.toLocaleString("en-US", options); // Convert to human-readable time

  return (
    <>
      <WeatherInfoComponent
        title={"Temperature"}
        value={temperature}
        symbol={"°C"}
        url={"https://cdn-icons-png.flaticon.com/512/1843/1843544.png"}
      />
      <WeatherInfoComponent
        title={"Feels like"}
        value={feels}
        symbol={"°C"}
        url={"https://cdn-icons-png.flaticon.com/512/8031/8031037.png"}
      />
      <WeatherInfoComponent
        title={"Humidity"}
        value={humidity}
        symbol={"%"}
        url={"https://cdn-icons-png.flaticon.com/512/5664/5664979.png"}
      />
      <WeatherInfoComponent
        title={"Pressure"}
        value={Math.round(pressure * 0.0295301.toFixed(2))}
        symbol={"hPa"}
        url={"https://cdn-icons-png.flaticon.com/512/2299/2299296.png"}
      />
      <WeatherInfoComponent
        title={"Wind Speed"}
        value={Math.round(2.237 * windSpeed.toFixed(1))}
        symbol={"mph"}
        url={"https://cdn-icons-png.flaticon.com/512/959/959711.png "}
      />
      <WeatherInfoComponent
        title={"Sunset"}
        value={humanReadableDate}
        url={"https://cdn-icons-png.flaticon.com/512/1852/1852617.png"}
      />
    </>
  );
};

export default WeatherInfoCards;
