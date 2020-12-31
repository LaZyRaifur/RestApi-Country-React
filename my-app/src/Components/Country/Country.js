import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const{name,flag} = props.country;
    const history = useHistory();

    const handleClick = (countryName) =>{
        const url = `${countryName}`;
        history.push(url);
    }
    const style = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '25px'
    }
    return (
        <div style={style}>
            
            
            <h2>{name}</h2>
            <img src={flag} style={{height:"10rem"}}alt=""/>
            <br/>
            <Link to={`/${name}`}>Show detail</Link>
            <br/>
            <button onClick={() => handleClick(name)}>Click me</button>
                      
            
        </div>
    );
};

export default Country;