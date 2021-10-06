import React, { Component } from 'react'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            city: ''
        }
    }

    blurHandler = (event) => {
        this.setState({ city: event.target.value });
    }
    getSearchValue = () => {
        this.props.searchCity(this.state.city);
    }
    render() {
        return (
            <div className="search">
                <input type="text" onBlur={this.blurHandler} placeholder="Search" />
                <button onClick={this.getSearchValue}>Click me</button>
            </div>
        )
    }
}

export default Search
