import React, { Component} from 'react';
import './Search.css'

class Search extends Component {
    render () {
        return (
            <div className="Search">
                <input type="search" placeholder="Search..." />
            </div>
        )
    }
}

export default Search