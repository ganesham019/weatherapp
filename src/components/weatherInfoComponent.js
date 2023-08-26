import React from "react";

const WeatherInfoComponent = ({ title, value, url, symbol }) => {
  return (
    <div className="mini_card">
      <h3>{title}</h3>
      <div className="mini_flex">
        <p>
          {value} {symbol}
        </p>
        <img src={url} height={30} alt={title} />
      </div>
    </div>
  );
};

export default WeatherInfoComponent;
