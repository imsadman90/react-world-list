import React, { use, useState } from 'react';
import Country from './Country';
import './Heading.css';
import './Countries.css';

const Countries = ({ countriesPromise }) => {
   const [visitedCountries, setVisitedCountries] = useState([]);

   const handleVisitedCountries = (country) => {
      console.log('handleVisitedCountries', country);
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
   };

   const countriesData = use(countriesPromise);
   const countries = countriesData.countries;

   return (
      <div>
         <div className="heading">
            <h1>In the Countries : {countries.length}</h1>
            <h3>Total Country Visited : {visitedCountries.length}</h3>
           <div className="ol">
             <ol>
               {visitedCountries.map((country) => (
                  <li key={country.cca3.cca3}>{country.name.common}</li>
               ))}
            </ol>
           </div>
         </div>

         <div className="countries">
            {countries.map((country) => (
               <Country
                  key={country.cca3.cca3}
                  country={country}
                  handleVisitedCountries={handleVisitedCountries}
               ></Country>
            ))}
         </div>
      </div>
   );
};

export default Countries;
