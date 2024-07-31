import { useState } from 'react';
import './Country.css'
const Country = ({country,handelVisitedFlag}) => {
  
    const {name ,flags, capital,area }=country;
    const [visited, setVisited]= useState(false);
    const handelVisited= () =>{
        setVisited(!visited);
    }
    
    return (
        <div className={`box ${visited && 'visited'}` }>
            <h3>Name: {name?.common} </h3>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <img src={flags.png} alt="" /> <br />
            <button onClick={handelVisited}>{visited?'Visited':'Going'}</button><br /> <br />
            {
                visited?'I have visited this country':'I want to visit'
            } <br />
            <button onClick={()=>handelVisitedFlag(country.flags.png)}>Add Flag</button>
        </div>
    );
};

export default Country;