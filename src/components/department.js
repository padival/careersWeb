import React, { Component } from "react";

export default class Department extends Component {
    render() {
        return (
            <div className="hero-filter-container">
            <label className="hero-label">Department</label>
            <select className="form-control input-sm placd">
                <option>All Departments</option>
                {this.props.department.map((department, index) => (
                    <option key={index} value={department}>
                        {department}
                    </option>
                ))}
            </select>
             </div>
        );
    }
}