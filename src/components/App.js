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
      credit: "I took it"
    };

    this.getWeather = this.getWeather.bind(this);
    this.getPhoto = this.getPhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
        this.getPhoto(this.state.description);

      });
  }

  getPhoto(description) {
    const {
      config: {
        api: { weather, unsplash }
      }
    } = this.props;

    let openSplash = `${unsplash.url}?query=${description}&client_id=${
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

      });

  }

  receiver(name, value) {

    this.setState({
      [name]: value
    });

  }

  onSubmit(name, value) {
    event.preventDefault();
    this.setState({ [name]: value });


    this.getWeather(this.state.city);

  }

  render() {

    return (
      <div className="content">
        <header className="header">
          <h1 className="title">
            <i>Meteor</i>
            <i>oplis</i>
          </h1>
        </header>

        <Photo
          reg={this.state.reg}
          credit={this.state.credit}
        />

        <Info
          description={this.state.description}
          current={this.state.current}
          credit={this.state.credit}
        />

        <Thumbs
          images={this.state.images}
          description={this.state.description}
          receiver={this.receiver}
          onClick={this.showMain}
        />

        <Search
          receiver={this.receiver}
          value={this.state.city}
          onSubmit={this.onSubmit}
        />
      </div >
    );
  }
}

export default App;
