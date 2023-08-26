import React from "react";

const WeatherClimateComponent = ({ title, desc, setImage, data, src }) => {
    debugger;
  return (
    <>
      <h2>{title}</h2>
      {data !== "" && setImage()}
      <img src={src} width={150} alt="gif" />
      <h4>{desc}</h4>
    </>
  );
};

export default WeatherClimateComponent;
