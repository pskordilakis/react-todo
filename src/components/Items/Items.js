import React, { Component } from 'react'
import './Items.css'

import Item from '../Item/Item'

class Items extends Component {
  listItems () {
    return this.props.value.map((item, index) => (<Item key={index} value={item.text} />))
  }

  render () {
    return (
      <div className="Items">
        { this.listItems() }
      </div>
    )
  }
}

export default Items