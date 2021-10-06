import React, { Component } from 'react'
import axios from 'axios';
import WeatherCard from './WeatherCard'
class WeatherContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: this.props.city,
            weatherData: ""
        }
    }

    getWeatherData = (dataList) => {
        // let arr=[];
        return dataList.map((data, index) => {
            if (index % 8 == 0) {
                return {
                    date: data["dt_txt"],
                    temp_min: data["main"]["temp_min"] - 273,
                    temp_max: data["main"]["temp_max"] - 273,
                    icon: data["weather"]["icon"]
                }
            }
        })
    }

    componentDidUpdate() {
        console.log("inside");
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&units=metric&appid=edc28bd2c0984ecd78b92a4eebf79ada`)
            .then((data) => {
                return data.data.list;
            })
            .then(dataList => {
                return dataList.reduce((arr, data, index) => {
                    if (index % 8 === 0) {
                        arr.push({
                            date: data["dt_txt"],
                            temp_min: data["main"]["temp_min"],
                            temp_max: data["main"]["temp_max"],
                            icon: data["weather"]["icon"]
                        })
                    }
                    return arr;
                }, [])
            })
            .then(data => {
                console.log("adf", data);
                this.setState({
                    weatherData: data
                })
            })
            .catch((err) => {
                console.log("error :" + err.message)
            })
    }

    render() {
        return (
            <div>
                {console.log("sdfa", this.state.weatherData)}

                {this.state.weatherData.length !== 0 && this.state.weatherData.map(elem => (
                    <WeatherCard date={elem.date} minTemp={elem.temp_min} max={elem.temp_max} icon={elem.icon} />
                ))}
            </div>
        )
    }
}

export default WeatherContainer
