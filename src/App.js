import React, { Component } from 'react';
import './App.css';

import Search from './components/Search/Search'
import Items from './components/Items/Items'
import NewItem from './components/NewItem/NewItem'

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      items: [
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { text: 'Proin consectetur nec ipsum sed eleifend.' },
        { text: 'Praesent scelerisque dui sed lectus lobortis porttitor.' },
        { text: 'Fusce non luctus sapien.' },
        { text: 'In vitae tempus ante.' },
        { text: 'Aliquam vel lobortis nisl.' },
        { text: 'Nulla facilisi.' },
      ],
      searchTerm: undefined,
    }
  }

  applyFilter = searchTerm => {
    this.setState({ searchTerm })
  }

  addItem = item => {
    // append new item
    const items = [...this.state.items, { text: item }]

    this.setState({ items })
  }

  filteredItems = () => {
    if (this.state.searchTerm) {
      return this.state.items.filter(item => String(item.text).includes(this.state.searchTerm))
    }

    return this.state.items
  }

  render () {
    return (
      <div className="App">
        <div className="content">
          <Search onChange={ this.applyFilter } />

          <Items value={ this.filteredItems() } />

          <NewItem onAddItem={ this.addItem } />
        </div>
      </div>
    );
  }
}

export default App;
