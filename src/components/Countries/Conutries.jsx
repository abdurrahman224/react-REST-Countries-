import React, { useEffect, useState } from "react";
import Country from "../country/Country";
import "./Conutires.css";

const Conutries = () => {
  const [conutries, setConutri] = useState([]);
  const [VisitedCountries, setVisitedCountries] = useState([]);
  const [VisitedCountriesflags, setVisitedCountriesflags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => res.json())
      .then((data) => setConutri(data));
  }, []);

  const handleVisitedCountries = (countr) => {
    // console.log("Hello.....");

    // console.log(countr);
    const newCounty = [...VisitedCountries, countr];
    setVisitedCountries(newCounty);
  };

  const handleVisitedCountriesflags = (countriesflags) => {
    const newVisitedCountriesflags = [...VisitedCountriesflags, countriesflags];
    setVisitedCountriesflags(newVisitedCountriesflags);
    console.log(countriesflags);
    
  };

  return (
    <div>
      <h2>County: {conutries.length} </h2>

      <div>
        <h3> Visited Countries : {VisitedCountries.length}</h3>
        <ol>
          {VisitedCountries.map((conut, idindex) => (
            <li key={idindex}> {conut.name.common}</li>
          ))}
        </ol>
      </div>
      <div className="flags-container" >
{

VisitedCountriesflags.map(flags=><img src={flags}></img>)

}

      </div>

      <div className="conutries-container">
        {conutries.map((component) => (
          <Country
            key={component.cca3}
            handleVisitedCountriesflags={handleVisitedCountriesflags}
            handleVisitedCountries={handleVisitedCountries}
            component={component}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Conutries;
