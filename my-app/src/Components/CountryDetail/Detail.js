import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Detail = () => {
    const {countryName} = useParams();
    const[Country,setCountry] = useState([]);
    const countryStyle = {
        border: '1px solid purple',
        padding: '20px',
        margin:'20px',
        borderRadius: '30px'
    }
    
    
    React.useEffect(() =>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data));
    },[countryName])

    const history = useHistory();


        
    return Country.map((
        {capital,name,population,flag,nativeName,subregion,region,alpha2Code}) =>
          <div key={name} className="country" style={countryStyle}>
              <h3>{name}</h3>
              <img src={flag} alt="" style={{height:"10rem"}}/>
              <div>Code: {alpha2Code}</div>
              <div>Capital: {capital}</div>
              <div>Region: {region}</div>
              <div>Population: {population}</div>
              <div>Native Name: {nativeName}</div>
              <div>Subregion: {subregion}</div>

              <button type="button" onClick={history.goBack}>Back</button>

          </div>
    );
};

export default Detail;