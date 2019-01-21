import React, { Component } from 'react';
import './App.css';

import Search from './components/Search/Search'
import Items from './components/Items/Items'

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
        { text: 'Praesent ut erat et ipsum accumsan placerat ac ut lorem. ' },
        { text: 'Nunc pellentesque ullamcorper imperdiet.' },
        { text: 'Ut vel justo lorem.' },
        { text: 'Nullam ornare ultricies ullamcorper.' },
        { text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.' },
        { text: 'Vivamus euismod consequat suscipit.' },
      ],
      searchTerm: undefined,
    }
  }

  applyFilter = searchTerm => {
    this.setState({ searchTerm })
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
          <Search onChange={this.applyFilter} />

          <Items value={this.filteredItems()}/>
        </div>
      </div>
    );
  }
}

export default App;
