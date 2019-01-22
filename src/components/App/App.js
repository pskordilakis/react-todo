import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, applyFilter } from '../../store/actions'
import './App.css';

import Search from '../Search/Search'
import Items from '../Items/Items'
import NewItem from '../NewItem/NewItem'

class App extends Component {
  filteredItems = () => {
    if (this.props.searchTerm) {
      return this.props.items.filter(item => String(item.text).includes(this.props.searchTerm))
    }

    return this.props.items
  }

  render () {
    return (
      <div className="App">
        <div className="content">
          <Search onChange={ this.props.applyFilter } />
          <NewItem onAddItem={ this.props.addItem } />

          <Items value={ this.filteredItems() } onRemoveItem={ this.props.removeItem } />

        </div>
      </div>
    );
  }
}

export default connect(state => ({ items: state.items, searchTerm: state.searchTerm }), { addItem, removeItem, applyFilter })(App);
