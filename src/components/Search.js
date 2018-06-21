import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    event.preventDefault();
    this.props.receiver(event.target.name, event.target.value);

  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event.target.name, event.target.value);

  }

  render() {
    return (
      <div className="controls">
        <form onSubmit={this.handleSubmit}
          className="search" id="search">

          <label className="search__label" htmlFor="search-tf">
            City
          </label>

          <input
            type="text"
            className="search__input"
            id="search-tf"
            placeholder="Enter city name"
            autoComplete="city"
            name="city"
            value={this.value}
            onChange={this.handleChange}

          />

          <button className="btn search__btn"> Go </button>
        </form>
      </div>
    );
  }
}

export default Search;
