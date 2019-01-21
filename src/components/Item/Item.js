import React, { Component } from 'react'
import './Item.css'

class Item extends Component {
  render () {
    return (<div className="Item">
      <div className="Text">{this.props.value}</div>

      <button className="Remove" onClick={ this.props.onRemoveItem } >Remove</button>
    </div>)
  }
}

export default Item
