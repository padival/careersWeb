import React, { Component } from "react";

export default class Location extends Component {
    render() {

        return (
            <div className="hero-filter-container">
            <label className="hero-label">Location</label>
            <select className="form-control input-sm placd">
                <option>All Locations</option>
                {this.props.location.map((location, index) => (
                    <option key={index} value={location}>
                        {location}
                    </option>
                ))}
            </select>
            </div>
        );
    }
}