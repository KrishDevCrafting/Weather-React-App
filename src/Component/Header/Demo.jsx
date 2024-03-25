import React from "react";
const WeatherDisplay = ({ data }) => {
  return (
    <>
      <div>
        <h1>{data.current.sunrise}</h1>
        <p>Temperature:{data.main.temp}</p>
      </div>
    </>
  );
};

export default WeatherDisplay;
