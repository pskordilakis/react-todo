import React, { Component } from 'react';
import './App.css';

import Search from './components/Search/Search'
import Items from './components/Items/Items'

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      items: [1, 2, 3, 4, 5],
      searchTerm: undefined,
    }
  }

  applyFilter = searchTerm => {
    this.setState({ searchTerm })
  }

  filteredItems = () => {
    if (this.state.searchTerm) {
      return this.state.items.filter(item => String(item).includes(this.state.searchTerm))
    }

    return this.state.items
  }

  render () {
    return (
      <div className="App">
        <div className="content">
          <Search onChange={this.applyFilter} />

          <Items value={this.filteredItems()}/>
        </div>
      </div>
    );
  }
}

export default App;
