import React from "react";

class Search extends React.Component {
  constructor() {
    super()
  }

handleSubmit(event) {
 event.preventDefault();
 this.getWeather(event.target.value);

 }

  render() {
    return (
      <div className="controls">
        <form onSubmit={this.handleSubmit} className="search" id="search">
          <label className="search__label" for="search-tf">City</label>
          <input onChange="handleChange" className="search__input" id="search-tf" name="city" placeholder="London" autocomplete="city" />
          <button className="btn">Go</button>
        </form>
      </div>
    );
  }}


// Search.defaultProps = {};

export default Search;
