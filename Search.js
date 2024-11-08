import React, { useState } from 'react';
import axios from 'axios';

function Search({ onWeatherUpdate }) {
  const [city, setCity] = useState('');

  const handleSearch = async () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}';
    const response = await axios.get(url);
    onWeatherUpdate(response.data);
    localStorage.setItem('lastSearchedCity', city); // Save to local storage
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}