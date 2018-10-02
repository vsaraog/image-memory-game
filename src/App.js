import React, { Component } from 'react';
import Navbar from "./components/Navbar.js"
import Header from "./components/Header.js"
import ImageList from "./components/ImageList.js"
import './App.css';

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    userMsg: ""
  }

  resetGame() {
    console.log("Reset game")
  }

  imageClicked(scores) {
    this.setState({
      currentScore: scores.currentScore,
      topScore: scores.topScore,
    })
  }

  render() {
    return (
      <div>
      <Navbar currentScore={this.state.currentScore} 
        topScore={this.state.topScore} 
        resetGame={this.resetGame.bind(this)} />
      <Header />
      <ImageList imageClicked={this.imageClicked.bind(this)} />
      </div>
    )
  }
}

export default App;
