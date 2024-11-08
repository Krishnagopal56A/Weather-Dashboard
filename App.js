import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import WeatherDisplay from './components/WeatherDisplay';
import Favorites from './components/Favorites';
import axios from 'axios';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Fetch favorite cities from JSON server on load
  useEffect(() => {
    const fetchFavorites = async () => {
      const response = await axios.get('http://localhost:3001/favorites');
      setFavorites(response.data);
    };
    fetchFavorites();
  }, []);

  const handleWeatherUpdate = (data) => {
    setWeatherData(data);
  };

  const addFavorite = async (city) => {
    const response = await axios.post('http://localhost:3001/favorites', { city });
    setFavorites([...favorites, response.data]);
  };

  const removeFavorite = async (id) => {
    await axios.delete('http://localhost:3001/favorites/${id}');
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <Search onWeatherUpdate={handleWeatherUpdate} />
      {weatherData && <WeatherDisplay data={weatherData} />}
      <Favorites
        favorites={favorites}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        onWeatherUpdate={handleWeatherUpdate}
      />
    </div>
  );
}
