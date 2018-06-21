import React from "react";
import Photo from "./Photo";
import Info from "./Info";
import Thumbs from "./Thumbs";
import Search from "./Search";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      city: "London",
      description: "",
      current: "",
      images: [],
      id: "asdad",
      thumb: "mrwoof.jpg",
      reg: "images[0]",
      credit: "my dad",
      mainImage: "images[0]"
    };

    this.getWeather = this.getWeather.bind(this);
    this.getPhoto = this.getPhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.receiver = this.receiver.bind(this);
  }

  getWeather(city) {
    const {
      config: {
        api: { weather, unsplash }
      }
    } = this.props;

    let openUrl = `${weather.url}?q=${this.state.city}&APPID=${weather.apiKey}`;

    fetch(openUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          description: data.weather[0].description,
          current: data.main.temp
        });
        // console.log("Inside Weather fetch this.state ", this.state);
      });
  }

  getPhoto(cloudy) {
    const {
      config: {
        api: { weather, unsplash }
      }
    } = this.props;

    let openSplash = `${unsplash.url}?query=${cloudy}&client_id=${
      unsplash.apiKey
    }`;

    fetch(openSplash)
      .then(response => response.json())
      .then(data => {
        this.setState({
          images: data.results.map(item => ({
            id: item.id,
            thumb: item.urls.thumb,
            reg: item.urls.regular,
            credit: item.user.name,
            url: item.links.html
          }))
        });
        console.log("images test", this.state);
      });
  }

  receiver(value) {
    this.setState({
      city: value
    });
  }

  receiveImage(value) {
    console.log(value);
    // this.setState({
    //   mainImage: value
    // });
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.getWeather(event.target.value);
    this.getPhoto(this.getWeather(event.target.value));

    // console.log("image fetch", this.getPhoto("cloudy"));
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

        <Photo images={this.state.images} />

        <Info
          description={this.state.description}
          current={this.state.current}
          credit={this.state.credit}
        />

        <Thumbs
          images={this.state.images}
          description={this.state.description}
          receiveImage={this.receiveImage}
          onClick={this.showMain}
        />

        <Search
          receiver={this.receiver}
          value={this.state.city}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
// App.defaultProps = {};
export default App;
