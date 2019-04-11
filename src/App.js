import React, { Component } from "react";
import Weather from "./Weather";
import Form from "./Form";
import moment from "moment";
import "./panel.css";
const API_KEY = process.env.WEATHER_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: [
        {
          day: "Monday",
          image:
            "https://cdn4.iconfinder.com/data/icons/sunnyday-simple/142/cloud_sun-512.png",
          high: 78,
          low: 67
        },
        {
          day: "Tuesday",
          image:
            "https://cdn4.iconfinder.com/data/icons/sunnyday-simple/142/storm_cloud-512.png",
          high: 83,
          low: 66
        },
        {
          day: "Wednesday",
          image:
            "https://cdn4.iconfinder.com/data/icons/sunnyday-simple/142/cloud_sun-512.png",
          high: 77,
          low: 65
        },
        {
          day: "Thursday",
          image:
            "https://cdn4.iconfinder.com/data/icons/sunnyday-simple/142/sun-512.png",
          high: 78,
          low: 64
        },
        {
          day: "Friday",
          image:
            "https://cdn4.iconfinder.com/data/icons/sunnyday-simple/142/sun_rain-512.png",
          high: 77,
          low: 62
        },
        {
          day: "Saturday",
          image:
            "https://cdn4.iconfinder.com/data/icons/sunnyday-simple/142/sun_rain-512.png",
          high: 70,
          low: 60
        },
        {
          day: "Sunday",
          image:
            "https://cdn4.iconfinder.com/data/icons/sunnyday-simple/142/storm_cloud-512.png",
          high: 73,
          low: 60
        }
      ]
    };
  }
  // getWeather = e => {
  //   e.preventDefault();
  //   const cityID = e.target.cityid.value;
  //   return fetch(
  //     `http://api.openweathermap.org/data/2.5/forecast?id=5128581&appid=7e915613924755bb060951c0b0523b02`
  //   )
  //     .then(res => res.json())
  //     .then(weather =>
  //
  //     );
  // };

  getWeather = async e => {
    e.preventDefault();
    const api_call = await fetch(
      "http://api.openweathermap.org/data/2.5/forecast?id=5128581&appid=" +
        `${API_KEY}`
    );

    const response = await api_call.json();
    console.log(response);
    response.list.forEach(res => {
      console.log(res);
      this.setState([
        {
          day: res.dt,
          high: res.main.temp_max,
          low: res.main.temp_min,
          icon: res.icons
        }
      ]);
    });
  };

  render() {
    console.log(API_KEY);
    return (
      <div className="panel">
        {this.state.weather.map((w, wIndex) => {
          return (
            <Weather date={moment()} weather={w} wIndex={wIndex} key={wIndex} />
          );
        })}
        <Form loadWeather={this.getWeather} />
      </div>
    );
  }
}

export default App;
