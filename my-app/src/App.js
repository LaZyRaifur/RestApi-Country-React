
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Country from './Components/Country/Country';
import { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Detail from './Components/CountryDetail/Detail';


function App() {
  // const [country,setCountry] = useState([]);
  // useEffect(()=>{
  //   fetch('https://restcountries.eu/rest/v2/all')
  //   .then(res => res.json())
  //   .then(data =>setCountry(data))
  // },[])
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/:countryName">
          <Detail></Detail>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    // <div>
    //   <h1>Total Country:{country.length}</h1>
    //   {
    //     country.map(country =><Country country={country}></Country>)
    //   }
     
    // </div>
    
   
  );
}

export default App;
