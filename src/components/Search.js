import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.props.receiver(event.target.value);

    // console.log("City inside Search is ", event.target.value);
  }

  render() {
    return (
      <div className="controls">
        <label className="search__label">City</label>

        <input
          className="search__input"
          id="search-tf"
          name="city"
          value={this.props.value}
          onChange={this.handleChange}
          className="search"
          id="search"
        />

        <button className="btn"> Go </button>
      </div>
    );
  }
}

// Search.defaultProps = {};

export default Search;
