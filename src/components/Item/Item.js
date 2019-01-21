import React, { Component } from 'react'
import './Item.css'

class Item extends Component {
    render () {
        return (<div>{this.props.value}</div>)
    }
}

export default Item