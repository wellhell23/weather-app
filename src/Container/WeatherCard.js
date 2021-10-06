import React, { Component } from 'react'

class WeatherCard extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = new Date(props.date).getDay();

    }



    render() {
        return (
            <div>
                <div className="day">{this.days[this.day]}</div>
            </div>
        )
    }
}

export default WeatherCard
