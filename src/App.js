import React, { Component } from 'react'
import Search from './Container/Search';
import WeatherContainer from './Container/WeatherContainer';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      city: ''
    }
  }

  getSearchValue = (city) => {
    console.log(city);
    this.setState({ city: city })
  }
  render() {
    return (
      <div className="app">
        {console.log("city", this.state.city)}
        <h1>Weather Report</h1>
        <Search searchCity={this.getSearchValue} />
        {this.state.city && <WeatherContainer city={this.state.city} />}
      </div>
    )
  }
}

export default App
