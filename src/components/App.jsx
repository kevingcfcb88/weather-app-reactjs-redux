import React from 'react';
import { connect } from 'react-redux';
import { getCurrentPosition, getCurrentWeather } from '../actions';
import WeatherCard from './WeatherCard';
import SearchBar from './SearchBar';

class App extends React.Component {
  componentDidMount() {
    this.props.getPosition();
  }

  getPositionToRender() {
    const weather =
      this.props.weatherByCity === null
        ? this.props.weather
        : this.props.weatherByCity;
    if (weather !== null && this.props.coordBlock !== null) {
      const currentWeather = weather.weather;
      return (
        <div>
          <SearchBar />
          <WeatherCard currentWeather={currentWeather} />
        </div>
      );
    }
    this.props.getCurrentWeather(this.props.coord.lat, this.props.coord.lon);
    return <div>Cannot get information</div>;
  }

  render() {
    return <div>{this.getPositionToRender()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    coord: state.getPosition,
    coordBlock: state.getPositionBlock,
    weather: state.getWeather,
    weatherByCity: state.getWeatherByCity,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentWeather: (lat, lon) => dispatch(getCurrentWeather(lat, lon)),
    getPosition: () => dispatch(getCurrentPosition()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
