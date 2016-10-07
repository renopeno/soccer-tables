import React, { Component } from 'react';
import TableHeader from './TableHeader.js';
import TableBody from './TableBody.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-wrapper">
        <TableBody>
          <TableHeader></TableHeader>
        </TableBody>
      </div>
    );
  }
}

export default App;
