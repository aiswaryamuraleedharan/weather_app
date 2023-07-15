import React, { useState } from 'react';

const api =  {
    key: "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}",
    base: "https://api.openweathermap.org/data/2.5/",
};

function Weather(){

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    const searchPressed = () => {
        fetch(`${api.base}weather?q=${search}&units=metric$APID=${api.key}`)
        .then(res => res.json())
        .then(result => {
            setWeather(result);
        });
    };


  return (
    <div>
      <h2>Weather App</h2>
      
        <div>
            <input type="text" 
            placeholder="Enter your Location"
            onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchPressed}>Search</button>
        </div>
          <h3>Current Weather</h3>
          <p>{weather.name}</p>
          <p>{weather.main.temp}</p>

    </div>
  );
  }

export default Weather;