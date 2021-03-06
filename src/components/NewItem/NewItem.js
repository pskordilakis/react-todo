import React, { Component } from 'react'
import './NewItem.css'

class NewItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      item: '',
    }
  }

  updateItem = event => {
    const item = event.target.value

    this.setState({ item })
  }

  addItem = () => {
    if (this.state.item) {
      this.props.onAddItem(this.state.item)
    }
  }

  render () {
    return (
      <div className="NewItem">
        <input type="input" placeholder="New Item" onChange={this.updateItem}/>

        <button className="Add" onClick={this.addItem}>Add</button>
      </div>
    );
  }
}

export default NewItem
