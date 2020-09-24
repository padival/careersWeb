import React, { Component } from "react";

export default class Engineering extends Component {
    render() {

        return (
            <div className="category section section-last">
                <div className="category__main">
                    <span className="category__main-img"><img src="assets/img/marketing.png" alt="marketing" /></span>
                    <h2 className="category__main-title">Marketing</h2>
                </div>
                <div className="row">
                    {this.props.marketingData.map((marketingData) => (
                        <div className="col-6 col-sm-4">
                            <div className="category__sub marketing">
                                <label className="category__sub-label">{marketingData.offices[0].name}{marketingData.offices[1] ? ', ' + marketingData.offices[1].name : ''}</label>
                                <h4 className="category__sub-title"><a href={'https://www.airtable.com/jobs/'+marketingData.id}>{marketingData.title}</a></h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}