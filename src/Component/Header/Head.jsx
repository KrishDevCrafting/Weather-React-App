import React from "react";
import "../style/header.css";
import axios from "axios";
const Head = () => {
  const [datasearch, setdatasearch] = React.useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}"
      );
      setdatasearch(response.data);
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  };

  return (
    <>
      <div>
        <section className="navbar">
          <div id="Forecast">
            <ul>
              <li>Forecast</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Rest</li>
            </ul>
          </div>
          <div>
            <ul>
              {" "}
              <li>Star</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Switch</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <input
                  type="text"
                  value={datasearch}
                  onChange={(e) => setdatasearch(e.target.value)}
                />
              </li>
            </ul>
          </div>
          <div id="btn">
            <button onClick={handleSearch}>Save</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Head;
