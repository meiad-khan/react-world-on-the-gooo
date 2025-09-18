import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css';

const Countries = ({countriesPromise}) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  // console.log(countries);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries=(country)=>{
    console.log('Clicked visited countries', country);
  }
  return (
    <div>
      <h1>In the Countries.. {countries.length} </h1>
      <div id="country">
        {
        countries.map(country => <Country 
          key={country.cca3.cca3}
          country={country}
          handleVisitedCountries = {handleVisitedCountries}
           ></Country>)
      }
      </div>
    </div>
  );
};

export default Countries;