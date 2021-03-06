import React, { Component } from "react";
// import fire from './fire';

import Moment from "moment-timezone";
import cityTimezones from "city-timezones";
import Clock from "react-live-clock";
let moment = require("moment-timezone");

export default class Search extends Component {
  state = {
    userLocation: "",
    localTime: "",
    rows: [],
  };

  //Methods
  loadTime = async (searchTerm) => {
    const city = cityTimezones.lookupViaCity(searchTerm);
    const timezone = city[0].timezone;
    const now = moment().tz(timezone).format("h:mm:ss a");
    const state = {
      localTime: now,
      timezone: timezone,
    };

    await this.setState(state);
    console.log(this.state);
  };

  handleChange = (e) => {
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(state);
  };

  //Create
  handleClick = (e) => {
    e.preventDefault();
    this.loadTime(this.state.userLocation);
  };

  render() {
    let alert = !this.state.localTime ? "Please enter location" : "";
    //Read
    let locations = this.state.rows.map((row, index) => {
      console.log(row);
      let location = row.location;
      let time = row.timezone;
      return (
        <div className="row">
          <div className="col-12 mb-9">{location}</div>
        </div>
      );
    });

    return (
      <div className="search-container-fluid gradient p-3">
        <div className="row">
          <div className="search-container">
            <input
              onChange={this.handleChange}
              name="userLocation"
              type="text"
              className="form-control"
              placeholder="Enter a location"
            />
            <button
              onClick={this.handleClick}
              name="search-btn"
              className="btn btn-search"
              type="button"
            >
              Get time.
            </button>
            <div className="output-container mt-5">
              <Clock
                ticking={true}
                format={"hh:mm:ss a"}
                timezone={this.state.timezone}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
