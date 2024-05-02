import React, { useEffect } from 'react';
import "../style/header.css"
import axios from 'axios';
const Head= ()=>{
const [input,setInput] = React.useState("");
const [res,setRes] = React.useState([]);
useEffect(()=>{
  const fetchData = async ()=>{
    try{
      const response = await axios.get("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=7b77f2dc3b987876e7b615e5cf8dec71")
      setRes(response.data);
    }catch(err){
      console.error('Error fetching data:', err)
    }
  }
  fetchData();
},[])










  return (<>
  
  
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
        <input type='text' placeholder='Enter the City'
        onChange={(e)=>setInput(e.target.value)}
        />
      </li>
    </ul>
   </div>
  </section>
  </div>
  
  <div><h1>{input}</h1>
  
  
  <h1>
          {res.length > 0 && res.map((e, index) => (
            <li key={index}>
              {e.main.weather}
            </li>
          ))}
        </h1>
  
  </div>
  
  
  </>) 
  
   
   
   
   
   
   
   
   
   
   
  
 
}

export default Head;
