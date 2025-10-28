import React, { useState } from 'react';
import './country.css'
const Country = ({country , handleVisitedCountries}) => {
// console.log(country);

const {name , flags, population,area ,cca3} = country
const [visited , setVisited] = useState (false)

const  handleVisited =()=>{

setVisited(!visited)


}
// console.log(countryc);



    return (
        <div className={`box ${visited ?'visited': 'nvisited'}`}>
            <h2 style={{color: visited ? "greenyellow" :"cadetblue"}}>{name.common}</h2>
            <img src={flags.png} alt={flags.alt} />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Code : {cca3}</p>
            <button onClick={()=>handleVisitedCountries(country)}> Visited Count </button>
            <button onClick={handleVisited}> {visited ? "Visited" : "Going"}</button>
            <br/>
            {

                visited ?"I have Visited This  a Conut": "not Visited on This a Conuty"
            }

        </div>
    );
};

export default Country;