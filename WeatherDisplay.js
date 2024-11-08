import React from 'react';

function WeatherDisplay({ data }) {
  return (
    <div className="weather-display">
      <h2>Weather in {data.city.name}</h2>
      <div>
        <h3>Current Weather</h3>
        <p>Temperature: {data.list[0].main.temp}°K</p>
        <p>Weather: {data.list[0].weather[0].description}</p>
      </div>
      <h3>5-Day Forecast</h3>
      <div className="forecast">
        {data.list.slice(1, 6).map((item, index) => (
          <div key={index} className="forecast-day">
            <p>Date: {item.dt_txt}</p>
            <p>Temperature: {item.main.temp}°K</p>
            <p>Weather: {item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}