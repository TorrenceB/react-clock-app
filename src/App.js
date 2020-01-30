import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search';

export default class App extends Component {

    render () {
    
      return (
        <div className="container-fluid gradient p-3">
          <div className="row">
              <div className="title-container-fluid col-sm-7">
                <h1 className="title-container-fluid_title">World : Clock</h1>             
              </div>
              <div className="search-container-fluid col-sm-5">
                <Search />               
            </div>
          </div>
        </div>
      )
    }
  };