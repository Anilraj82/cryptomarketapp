import React, { Component } from 'react';
import '../App.css';

export class Navigation extends Component {
  render() {
    return (
      <div>
        <section id="dropdown">
          <div className="container">
            <div className="content1">
              <div className="select">
                <select className="select">
                  <option>Market Cap</option>
                  <option>option</option>
                  <option>option</option>
                  <option>option</option>
                </select>
              </div>
              <div className="select">
                <select className="select">
                  <option>Trade Volume</option>
                  <option>option</option>
                  <option>option</option>
                  <option>option</option>
                </select>
              </div>            
              <div className="select">
                <select className="select">
                  <option>Trending</option>
                  <option>option</option>
                  <option>option</option>
                  <option>option</option>
                </select>
              </div>    

              <div className="select">
                <select className="select">
                  <option>Tools</option>
                  <option>option</option>
                  <option>option</option>
                  <option>option</option>
                </select>
              </div>

              <form>
                <input type="email" placeholder="Search Currencies"/>
                <button type="submit" className="button_1">Search</button>
              </form>
            </div>

          </div>
        </section>


      </div>
    );
  }
}
