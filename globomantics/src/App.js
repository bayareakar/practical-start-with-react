import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import FeaturedHouse from './featured-house';

class App extends Component {
  state = {};

  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses = () => {
    fetch('/houses.json')
      .then(response => response.json())
      .then(allHouses => {
        this.allHouses = allHouses;
        this.determineFeaturedHouse();
      })
  }

  determineFeaturedHouse = () => {
    if(this.allHouses) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({featuredHouse});
    }
  }

  render() {
    return (
      <div className="container">
        <Header subtitle="Providing houses world wide" />
        <FeaturedHouse house={this.state.featuredHouse} />
      </div>
    );
  }
}

export default App;
