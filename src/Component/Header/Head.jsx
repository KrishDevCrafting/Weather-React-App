import React, { useEffect } from "react";
import "../style/header.css";
import axios from "axios";
const Head = () => {
  const [datasearch, setdatasearch] = React.useState([]);
  


useEffect(()=>{
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:7000/Weather"
      );
      
      setdatasearch(response.data);
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  }
  handleSearch()
},[]);



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
            <button onClick={}>Save</button>
          </div>
        </section>
      </div>
      <div>
        <h1>{datasearch.map((e,index)=>(
          <li key={index}>{e.Country}</li>
        ))}</h1>
      </div>
    </>
  );
};

export default Head;
