import React, {Component} from 'react';
import './App.css';

class Apagar extends Component {

    render() {
        return (
            <div className="apagar"
            onClick={() => this.props.handleClear()}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Apagar;