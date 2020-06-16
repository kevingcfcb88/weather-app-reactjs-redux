import React from 'react';
import jsonFile from '../api/city.list.json';
import CitiesList from './CitiesList';

class SearchBar extends React.Component {
  state = { data: [], filteredResults: [], term: '', cityResults: [] };

  componentDidMount() {
    this.filterCities();
  }

  filterCities() {
    const jsonFileResponse = jsonFile.map(async (v) => {
      return { key: v.id, value: v.name, country: v.country };
    });

    Promise.all(jsonFileResponse).then((completed) => {
      this.setState({ data: completed });
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const found = this.state.data.filter(
      (v) => v.value.toLowerCase() === this.state.term.toLowerCase()
    );
    if (found.length > 0) {
      this.setState({ cityResults: found });
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
            <CitiesList cities={this.state.cityResults} />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
