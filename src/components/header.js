import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div className="hero-main">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <label className="hero-label caps">Open Positions</label>
                            <h1 className="hero-head">Help us create the future of software</h1>
                            <p className="hero-container">The ability to make software opens up tremendous creative possibilities, and we want to empower people to bring these possibilities to life-nomatter how ambitious. The good news is that creating software doesn't have to mean writing code. What will you create?</p>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="hero-imgBlock">
                                <img className="hero-vector" src="assets/img/open-positions.png" alt="hero-banner" onMouseOver={e => (e.currentTarget.src = "assets/img/open-positions.gif")} onMouseOut={e => (e.currentTarget.src = "assets/img/open-positions.png")}/>
                            </div>
                        </div>
                    </div>
                </div>
    );
  }
}