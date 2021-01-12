import React, { Component } from 'react'
import { ReactSVG as Svg } from 'react-svg';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="Search">
                <input type="text" placeholder="Search" />
                <Svg src="assets/icons/search.svg"/>
            </div>
        )
    }
}

export default Search