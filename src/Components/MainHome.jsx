import React, { useState } from "react";
import "./style/Home.css";
export const Main = () => {

  const [data,setdata] =useState(22)
const fetch = ()=>{
setdata(data + 1   )

}




  return (
    <>
      <div></div>
      <div className="container">
        <div className="box1">{data}°C 
        <button onClick={fetch}>Fun </button></div>
        <div className="box2">Two</div>
        <div className="box2">Two</div>
        {/* <div className="box">Three</div>
<div className="box">Four</div>
<div className="box">Five</div>
<div className="box">Six</div> */}
      </div>
    </>
  );
};
