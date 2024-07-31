import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Countris.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedFlags, setVisitedFlags]=useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    const handelVisitedFlag = flag =>{
        const newVisitedFlags =[...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags);
        
    }

    return (
        <div >
             {/* display visited flags */}
             <div className="visited-flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            <h3>Countries: {countries.length}</h3>
            <div className="grid-container">
                {
                    countries.map(country => <Country
                        key={country.cca3} country={country}
                        handelVisitedFlag={handelVisitedFlag}></Country>)
                }
            </div>

           

        </div>
    );
};

export default Countries;