import React, { useState } from "react";
import Head from "./Head";
import WeatherDisplay from "./Demo";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleWork = (data) => {
    setWeatherData(data);
  };

  return (
    <>
      <div>
        <Head onSearch={handleWork} />
        {weatherData && <WeatherDisplay data={weatherData} />}
      </div>
    </>
  );
};

export default App;
