import React, { Component } from 'react';
import './App.css';

import Search from './components/Search/Search'
import Items from './components/Items/Items'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <Search />

          <Items/>
        </div>
      </div>
    );
  }
}

export default App;
