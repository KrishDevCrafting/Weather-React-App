import React, { useEffect, useState } from "react";
import axios from "axios";

const Fire = () => {
  const apiKey = "7b77f2dc3b987876e7b615e5cf8dec71"; // Replace with your OpenWeatherMap API key
  const cityId = "delhi"; // Example city ID (Moscow), replace with your desired city ID
  const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityId}&appid=${apiKey}`;

  const [locationData, setLocationData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setLocationData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  //const timeZone = JSON.timeZone;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div>
        <input
          placeholder="Enter the Value"
          onChange={handleInputChange}
          type="text"
          value={inputValue}
        />
      </div>

      <div className="text-center">
        {/* {Array.isArray(locationData.list) &&
          locationData.list.map((item, index) => <h1> {item.sys}</h1>)} */}
        {/* <h1>{JSON.stringify(locationData.main.temp)}</h1> */}
      </div>
      <div>
        <table className="table border bg-dark text-white">
          <tbody>
            {Array.isArray(locationData.list) &&
              locationData.list.map((item, index) => (
                <tr key={index}>
                  <td>{item.weather[0].id}</td>
                  <td>{item.sys.id}</td>
                  <td>{item.weather[0].description}</td>
                  <td>{item.main.temp}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Fire;
