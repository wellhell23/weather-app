import React, { Component } from 'react'
import style from './WeatherCards.module.css';

class WeatherCard extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
        this.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
        this.getDay = new Date(props.date).getDay();
    }



    render() {
        return (
            <div className={style.cards}>
                <div className={style.day}>{this.days[this.getDay]}</div>
                <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} ></img>
                <div className={style.temp}>{this.props.minTemp.toFixed(1)}       <span>{this.props.maxTemp.toFixed(1)}</span></div>
            </div>
        )
    }
}

export default WeatherCard
