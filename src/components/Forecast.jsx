import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFiveDayForecast } from '../actions';
import { ForecastRow } from './ForecastRow';
import { Loading } from './Loading';

class Forecast extends React.Component {
  componentDidMount() {
    this.props.getForecast(this.props.match.params.cityId);
  }

  renderHelper() {
    const forecast = this.props.forecast.forecast.list;
    return (
      <div>
        <ForecastRow row={forecast.slice(0, 8)} />
        <ForecastRow row={forecast.slice(8, 16)} />
        <ForecastRow row={forecast.slice(16, 24)} />
        <ForecastRow row={forecast.slice(24, 32)} />
        <ForecastRow row={forecast.slice(32)} />
        <Link to="/" exact="true">
          Back
        </Link>
      </div>
    );
  }

  render() {
    console.log('this.props.forecast > ', this.props.forecast);
    if (this.props.forecast === null) {
      return <Loading />;
    }
    return this.renderHelper();
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getForecast: (id) => dispatch(getFiveDayForecast(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    forecast: state.getForecast,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
