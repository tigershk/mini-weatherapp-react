import React from "react";
// import Photo from "./Photo";
// import Info from "./Info";
// import Thumbs from "./Thumbs";
// import Search from "./Search";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      city: "",
      description: "",
      current: "", //to do
      credit: "",
      searchInput: ""
    }

    this.getWeather = this.getWeather.bind(this);

  }

  // Fetch weather using index.js props
  getWeather(city) {
    const { config: { api: { weather, unsplash } } } = this.props

    // Fetch to return object containing relevant weather data

    const openUrl = `${weather.url}?q=${city}&APPID=${weather.apiKey}`;
    fetch(openUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ description: data.weather[0].description })
      })
  }


  // Fetch photos using weather description
  // Send photos to thumbnail
  // Display main photo
  // Display credit & weather description within Info


  render() {

    return (
      <div className='App'>
        {/* <Photo />
        <Info />
        <Thumbs />
        <Search /> */}
      </div>
    );
  }
}

App.defaultProps = {};

export default App;
