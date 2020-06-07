import React from 'react';
import { connect } from 'react-redux';
import { getCurrentPosition, getCurrentWeather } from '../actions';

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentPosition();
  }

  getPositionToRender() {
    console.log(
      this.props.getCurrentWeather(this.props.coord.lat, this.props.coord.lon)
    );
    return (
      <div>
        Latitud: {this.props.coord.lat}
        <br></br>
        Longitud: {this.props.coord.lon}
      </div>
    );
  }

  render() {
    return <div>{this.getPositionToRender()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { coord: state.getPosition, coordBlock: state.getPositionBlock };
};

export default connect(mapStateToProps, {
  getCurrentPosition,
  getCurrentWeather,
})(App);
