import React from 'react';
import { connect } from 'react-redux';
import { getCurrentWeatherByCity } from '../actions';
import jsonFile from '../api/city.list.json';

class SearchBar extends React.Component {
  state = { data: [], filteredResults: [], term: '' };

  componentDidMount() {
    this.filterCities();
  }

  filterCities() {
    const jsonFileResponse = jsonFile.map(async (v) => {
      return { key: v.id, value: v.name };
    });

    Promise.all(jsonFileResponse).then((completed) => {
      this.setState({ data: completed });
    });
  }

  onSearchChange = (e) => {
    console.log(this.state.term);

    const newCities = this.state.data.filter(
      (v) => v.value.toLowerCase() === this.state.term.toLowerCase()
    );
    this.setState({ filteredResults: newCities });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const found = this.state.data.filter(
      (v) => v.value.toLowerCase() === this.state.term.toLowerCase()
    );
    if (found.length > 0) {
      this.props.getWeatherByCity(found[0].key);
    } else {
      console.log('Nothing found');
    }
  };

  render() {
    return (
      <div className="ui grid">
        <div className="sixteen wide column">
          <div className="search-bar ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
              <input
                className="field"
                type="text"
                placeholder="Search for cities..."
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
            </form>
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

export default connect(null, mapDispatchToProps)(SearchBar);
