import React, { Component } from 'react';
import './App.css';

let txtCol = "#fff";
let defStyle = {
  color: txtCol
}
class Agregate extends Component {
  render() {
    return (
      <div style={{...defStyle, width:"40%", display:"inline-block"}}>
        <h2>Number Text</h2>
      </div>
    );
  }
}
class Filter extends Component {
  render() {
    return (
      <div  style={defStyle}>
      <img/>
      <input type="text"/>
      Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div  style={{...defStyle, width: "25%", display: "inline-block"}}>
      <img/>
      <h3>Playlist name</h3>
      <ul>
        <li>Song 1</li>
        <li>Song 2</li>
        <li>Song 3</li>
        <li>Song 4</li>
        <li>Song 5</li>
      </ul>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Testing React</h1>
        <Agregate/>
        <Agregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>

    );
  }
}


export default App;
