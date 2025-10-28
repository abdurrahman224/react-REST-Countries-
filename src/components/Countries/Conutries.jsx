import React, { useEffect, useState } from "react";
import Country from "../country/Country";
import "./Conutires.css";

const Conutries = () => {
  const [conutries, setConutri] = useState([]);
  const [VisitedCountries ,setVisitedCountries ] = useState([])

// const [VisitedCountries, setVisitedCountries] = useState([]);



  useEffect(() => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => res.json())
      .then((data) => setConutri(data));
  }, []);

const handleVisitedCountries = (country) => {
  console.log("Visited Countries.....");
  const newVisitedCountries = [...VisitedCountries, country];
  setVisitedCountries(newVisitedCountries);
};

  return (
    <div>
      <h2>Conutries: {conutries.length} </h2>
      <div>
        <h3> Visited Countries : {VisitedCountries.length}</h3>
        <ul>
{
VisitedCountries.map(county => <li key={county.cca3}>{county.name.common}</li>)
}
        </ul>
      </div>
      <div className="conutries-container">
        {conutries.map((component) => (
          <Country key={component.cca3} handleVisitedCountries = {handleVisitedCountries} country={component}></Country>
        ))}
      </div>
    </div>
  );
};

export default Conutries;
