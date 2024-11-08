import React from 'react';

function Favorites({ favorites, addFavorite, removeFavorite, onWeatherUpdate }) {
  const handleSelectFavorite = async (city) => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    const response = await axios.get(url);
    onWeatherUpdate(response.data);
  };

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <ul>
        {favorites.map((fav) => (
          <li key={fav.id}>
            <span onClick={() => handleSelectFavorite(fav.city)}>{fav.city}</span>
            <button onClick={() => removeFavorite(fav.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" placeholder="Add new favorite city" onKeyDown={(e) => {
          if (e.key === 'Enter') addFavorite(e.target.value);
        }} />
      </div>
    </div>
  );
}
