import React, { Component } from "react";

export default class Engineering extends Component {
  render() {
  return (
      <div className="category section">
        <div className="category__main">
          <span className="category__main-img"><img src="assets/img/engineering.png" alt="engineering" /></span>
          <h2 className="category__main-title">Engineering</h2>
        </div>
        <div className="row">
          {this.props.enggData.map((enggData) => (
            <div className="col-6 col-sm-4">
              <div className="category__sub">
                <label className="category__sub-label">{enggData.offices[0].name}{enggData.offices[1] ? ', ' + enggData.offices[1].name : ''}</label>
                <h4 className="category__sub-title"><a href={'https://www.airtable.com/jobs/'+enggData.id}>{enggData.title}</a></h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}