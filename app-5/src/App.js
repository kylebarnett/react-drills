import React, { Component } from 'react';
import './App.css';
import Image from './components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://i.ytimg.com/vi/G4E2xFG8Yk8/maxresdefault.jpg"} />
      </div>
    );
  }
}

export default App;
