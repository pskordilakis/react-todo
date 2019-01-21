import React, { Component } from 'react';
import './App.css';

import Search from './components/Search/Search'
import Items from './components/Items/Items'

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      items: [1, 2, 3, 4, 5]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="content">
          <Search />

          <Items value={this.state.items}/>
        </div>
      </div>
    );
  }
}

export default App;
