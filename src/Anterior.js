import React, {Component} from 'react';
import './App.css';

class Anterior extends Component {

    render() {
        return (
            <div className="anterior">
                {this.props.children}
            </div>
        );
    }
}

export default Anterior;