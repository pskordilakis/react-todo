import React, { Component } from 'react';
import './App.css';

import Search from '../Search/Search'
import Items from '../Items/Items'
import NewItem from '../NewItem/NewItem'

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

  filteredItems = () => {
    if (this.state.searchTerm) {
      return this.state.items.filter(item => String(item.text).includes(this.state.searchTerm))
    }

    return this.state.items
  }

  applyFilter = searchTerm => {
    this.setState({ searchTerm })
  }

  addItem = item => {
    // append new item
    const items = [...this.state.items, { text: item }]

    this.setState({ items })
  }

  removeItem = index => {
    const items = [ ...this.state.items.slice(0, index), ...this.state.items.slice(index + 1)]

    this.setState({ items })
  }

  render () {
    return (
      <div className="App">
        <div className="content">
          <Search onChange={ this.applyFilter } />
          <NewItem onAddItem={ this.addItem } />

          <Items value={ this.filteredItems() } onRemoveItem={ this.removeItem } />

        </div>
      </div>
    );
  }
}

export default App;
