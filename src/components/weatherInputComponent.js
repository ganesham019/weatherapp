import React from "react";

const WeatherInputComponent = ({ setCity, type, placeholder, className }) => {
  const inputChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={(e) => inputChange(e)}
    />
  );
};

export default WeatherInputComponent;
