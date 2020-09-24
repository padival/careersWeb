import React, { Component } from "react";

export default class Customer extends Component {
    render() {

        return (
            <div className="category section">
                <div className="category__main">
                    <span className="category__main-img"><img src="assets/img/customer-success.png" alt="cusomterSuccess"/></span>
                    <h2 className="category__main-title">Cusomter Success</h2>
                </div>
                <div className="row">
                    {this.props.customerData.map((customerData) => (
                        <div className="col-6 col-sm-4">
                            <div className="category__sub">
                                <lable className="category__sub-label">{customerData.offices[0].name}{customerData.offices[1] ?', ' +customerData.offices[1].name : ''}</lable>
                                <h4 className="category__sub-title"><a href={'https://www.airtable.com/jobs/'+customerData.id}>{customerData.title}</a></h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}