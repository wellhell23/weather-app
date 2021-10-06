import React, { Component } from 'react'

class WeatherCard extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.getDay = new Date(props.date).getDay();
    }



    render() {
        return (
            <div>
                {<div className="day">{this.days[this.getDay]}</div>}
                {<div className='temp'>{this.props.minTemp.toFixed(1)}       {this.props.maxTemp.toFixed(1)}</div>}
            </div>
        )
    }
}

export default WeatherCard
