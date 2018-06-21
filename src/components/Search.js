import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    // this.props.receiver(event.target.value);

    // console.log("City inside Search is ", event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.receiver(event.target.value);
  }

  render() {
    return (
      <div className="controls">
        <form action="" className="search" onSubmit={this.handleSubmit}>
          <label className="search__label" htmlFor="search-tf">
            City
          </label>
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
        </form>
      </div>
    );
  }
}

// Search.defaultProps = {};

export default Search;
