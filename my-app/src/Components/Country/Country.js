import React from 'react';

const Country = (props) => {
    const{name,capital,population,nativeName,area
        } = props.country;
    const style = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '25px'
    }
    return (
        <div style={style}>
            <h4>Country name: {name}</h4>
            <p>Capital: {capital}</p>
            <p><small>Population: {population}</small></p>
            <p><small>Native name: {nativeName}</small></p>
         
            <p><small>Area : {area}</small></p>
                      
            
        </div>
    );
};

export default Country;