import React, { Component } from 'react';
import Engineering from "./components/engineering";
import Customer from "./components/customer";
import Marketing from "./components/marketing";
import Header from "./components/header"
import Location from "./components/location"
import Department from "./components/department"
const axios = require('axios');
var _ = require("underscore");


class App extends Component {
  state = {
    engineering: [],
    customer: [],
    marketing: [],
    location: [],
    department: [],

  }


  componentDidMount() {
    axios.get('https://dl.dropboxusercontent.com/s/90imekuizwoidih/job_listings.json')
      .then(data => {
        let engineering = _.filter(data.data.jobs, function (data) {
          return data.department.id === 92385
        });
        let customer = _.filter(data.data.jobs, function (data) {
          return data.department.id === 62832
        });
        let marketing = _.filter(data.data.jobs, function (data) {
          return data.department.id === 35820
        });

        let department = _.map(_.pluck(data.data.jobs, "department"), function (data) {
          return data.name
        });

        let departments = [...new Set(department.map(department => department))];

        let location0 = _.map(_.pluck(data.data.jobs, "offices"), function (data) {
          return data[0].name
        });
        let location1 = _.map(_.pluck(data.data.jobs, "offices"), function (data) {
          return data[1] ? data[1].name : null
        });
        let location = location0.concat(location1)

        let locationUnique = [...new Set(location.map(location => location))];

        let locations = _.filter(locationUnique, function (el) {
          return el != null;
        });
        this.setState({
          engineering: engineering,
          customer: customer,
          marketing: marketing,
          location: locations,
          department: departments
        })
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container">
        <div className="hero section">
          <Header />
          <div className="hero-filter">
            <div className="hero-filter-block">
              <Department department={this.state.department} />
              <Location location={this.state.location} />
            </div>
          </div>
        </div>
        <Engineering enggData={this.state.engineering} />
        <Customer customerData={this.state.customer} />
        <Marketing marketingData={this.state.marketing} />
      </div>
    );
  }
}

export default App;
