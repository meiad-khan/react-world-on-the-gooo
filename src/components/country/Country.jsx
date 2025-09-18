import React, { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountries}) => {
  // console.log(country);
  const [visited, setVisited]= useState(false);
  const handleVisited =()=>{
    setVisited(!visited);
    handleVisitedCountries(country);
  }
  return (
    <div className={`country ${visited&&'country-visited'}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Area: {country.area.area}</p>
      <p>Capital: {country.capital.capital['0']}</p>
      <p>Language: {country.languages.languages.eng}</p>
      <p>Population: {country.population.population} {country.population.population>300000?"Big country":"Small country"}</p>
      <button onClick={handleVisited} >
        {visited?'Visited':'Not Visited'}
      </button>
    </div>
  );
};

export default Country;