import React, { Component } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { MainContent } from './components/Content';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navigation/>
        <MainContent/>
      </div>
    );
  }
}
