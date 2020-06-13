import React from 'react';
import kelvinToCelsius from 'kelvin-to-celsius';
import { Link } from 'react-router-dom';

const WeatherCard = ({ currentWeather }) => {
  console.log(currentWeather);
  return (
    <div className="ui grid">
      <div className="sixteen wide column">
        <h2 className="ui center aligned icon header">
          <img
            src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
            className="ui circular inline image"
            alt={currentWeather.weather[0].id}
            title={currentWeather.weather[0].main}
          />
          {currentWeather.name}, {currentWeather.sys.country}
        </h2>
      </div>
      <div className="sixteen wide column">
        <div className="ui two column centered grid">
          <div className="column" style={{ textAlign: 'center' }}>
            <div className="ui huge horizontal divided list">
              <div className="item">
                <div className="content">
                  <div className="header">
                    Max {kelvinToCelsius(currentWeather.main.temp_max)}&deg;C
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="content">
                  <div className="header">
                    Min {kelvinToCelsius(currentWeather.main.temp_min)}&deg;C
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="content">
                  <div className="header">
                    Feels like {kelvinToCelsius(currentWeather.main.feels_like)}
                    &deg;C
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sixteen wide column">
        <div className="ui two column centered grid">
          <Link
            to={`/forecast/${currentWeather.id}`}
            exact="true"
            className="item"
          >
            See 5 days Forecast
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
