import React from 'react';
import { connect } from 'react-redux';
import { getCurrentWeatherByCity } from '../actions';

class CitiesList extends React.Component {
  render() {
    if (this.props.cities === null) {
      return null;
    }

    return (
      <div className="ui grid" style={{ marginTop: '10px' }}>
        <div className="sixteen wide column">
          <div className="ui horizontal list">
            {this.props.cities.map((v) => {
              return (
                <div
                  id={v.key}
                  className="item"
                  key={v.key}
                  ref={(node) => {
                    if (node) {
                      node.style.setProperty('margin-left', '1em', 'important');
                      node.style.setProperty('cursor', 'pointer', 'important');
                    }
                  }}
                  onClick={() => this.props.getWeatherByCity(v.key)}
                >
                  <i
                    className={`${v.country.toLowerCase()} flag ui avatar image`}
                  />
                  <div className="content">
                    <div className="header" key={v.key}>
                      {v.value}, {v.country}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherByCity: (id) => dispatch(getCurrentWeatherByCity(id)),
  };
};

export default connect(null, mapDispatchToProps)(CitiesList);
