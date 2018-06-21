import React from "react";
// import Photo from "./Photo";
// import Info from "./Info";
// import Thumbs from "./Thumbs";
import Search from "./Search";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      city: "London",
      description: "",
      current: "",
      credit: ""
    };
    this.getWeather = this.getWeather.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.receiver = this.receiver.bind(this);
  }

  // Fetch weather using index.js props
  getWeather(city) {
    const {
      config: {
        api: { weather, unsplash }
      }
    } = this.props;

    let openUrl = `${weather.url}?q=${this.state.city}&APPID=${weather.apiKey}`;
    console.log(openUrl);
    fetch(openUrl)
      .then(response => response.json())
      .then(data => {
        console.log("Inside Fetch ", data);
        this.setState({
          description: data.weather[0].description,
          current: data.main.temp
        });
      });
  }

  receiver(value) {
    this.setState({ city: value });
    // console.log("State is currently: ", this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.getWeather(event.target.value));
  }
  // Fetch photos using weather description
  // Send photos to thumbnail
  // Display main photo
  // Display credit & weather description within Info

  render() {
    // console.log("city", this.state.city);

    return (
      <div className="App">
        <header className="header">
          <h2>Mini Weather App</h2>
        </header>
        <form onSubmit={this.handleSubmit}>
          <Search receiver={this.receiver} value={this.state.city} />
        </form>
      </div>
    );
  }
}
// App.defaultProps = {};
export default App;
