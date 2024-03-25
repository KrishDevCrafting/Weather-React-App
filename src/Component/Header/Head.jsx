import React from 'react';
import "../style/header.css"
const Head = ()=>{
    return <>
    <div >
        <section className='navbar'>
            
                
               
               <div id='Forecast'> 
                 <ul>   <li>Forecast</li></ul>
                </div>
               <div>
                <ul><li>Rest</li></ul></div>
                <div>
                    <ul>   <li>Star</li></ul></div>
                    <div>
                 <ul><li>Switch</li></ul>
                    </div>
                    <div>
                        <ul><li><input type="text" value="search"/></li></ul>
                    </div>
                
            
        </section>
    </div>
    </>
}

export default Head