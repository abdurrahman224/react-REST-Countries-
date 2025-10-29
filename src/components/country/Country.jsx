// import React, { useState } from "react";
import { useState } from "react";
import "./country.css";
const Country = ({ component, handleVisitedCountries ,handleVisitedCountriesflags }) => {
  const { name, flags, population, area } = component;
  const [visited, setVisited] = useState(false);

  // console.log(component);
  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={` box ${visited ?"visited" : "nvisited"}`}>
      <h3 className="countyName"> {name.common}</h3>
      <img src={flags.png} alt={flags.alt} />
      <p>Population : {population}</p>
      <p>area : {area}</p>
{/* <button onClick={()=>handleVisitedCountries(component)}></button>
      <button onClick={handleVisited }>{visited ? "Visited" : "go "} </button> */}




      <button className="button" onClick={()=>{handleVisited();handleVisitedCountries(component);handleVisitedCountriesflags(component.flags.png)} }>{visited ? "Visited" : "go "} </button>
<br/>
      {(visited && "  I visited on county ") || " Not Visited Countries "}
    </div>
  );
};

export default Country;
