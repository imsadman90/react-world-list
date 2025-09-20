import React, { useState } from 'react';
import './Country.css';
import './Countries.css';

const Country = ({ country, handleVisitedCountries }) => {
   const [visited, setVisited] = useState(false);

   const handleVisited = () => {
      setVisited(!visited);
      handleVisitedCountries(country);
   };

   return (
      <div
         className={`country ${visited ? 'country-visited' : 'country-not-visited'}`}
      >
         <img src={country.flags.flags.png} alt={country.flags.flags.png} />
         <h3>Name : {country.name.common}</h3>
         <p>
            Population : {country.population.population}
            <p>
               Area : {country.area.area}{' '}
               {country.area.area > 300000 ? 'Big Country' : 'Small Country'}
            </p>
         </p>
         <button onClick={handleVisited}>
            {visited ? 'Visited' : 'Not Visited'}
         </button>
      </div>
   );
};

export default Country;
