import React, { useEffect, useState } from "react";
import Country from "../country/Country";
import "./Conutires.css";

const Conutries = () => {
  const [conutries, setConutri] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => res.json())
      .then((data) => setConutri(data));
  }, []);

  return (
    <div>
      <h2>Conutries: {conutries.length} </h2>
      
      <div className="conutries-container">
        {conutries.map((component) => (
          <Country key={component.cca3} country={component}></Country>
        ))}
      </div>
    </div>
  );
};

export default Conutries;
