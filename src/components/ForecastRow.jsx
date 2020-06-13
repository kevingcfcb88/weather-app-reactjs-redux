import React from 'react';
import kelvinToCelsius from 'kelvin-to-celsius';
import dateTime from 'date-and-time';

export const ForecastRow = (props) => {
  const day = dateTime.format(
    dateTime.parse(props.row[0].dt_txt, 'YYYY-MM-DD HH:mm:ss'),
    'ddd, MMM DD YYYY'
  );
  return (
    <div className="ui grid">
      <div className="sixteen wide column">
        <div className="ui sizer vertical segment">
          <div className="ui medium header">{day}</div>
        </div>
        {props.row.map((v) => {
          const timeOfDay = dateTime.format(
            dateTime.parse(v.dt_txt, 'YYYY-MM-DD HH:mm:ss'),
            'HH:mm'
          );
          console.log('timeOfDay > ', timeOfDay);
          return (
            <div className="ui horizontal list" key={v.dt}>
              <div className="item">
                <img
                  className="ui avatar image"
                  src={`http://openweathermap.org/img/wn/${v.weather[0].icon}@2x.png`}
                  alt={v.weather[0].id}
                  title={v.weather[0].main}
                />
                <div className="content">
                  <div className="header">
                    {v.weather[0].main} {timeOfDay}
                  </div>
                  Max {kelvinToCelsius(v.main.temp_max)}&deg;C | Min{' '}
                  {kelvinToCelsius(v.main.temp_min)}&deg;C
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
