import React, {Component} from 'react';
import './App.css';

class Tecla2 extends Component {
    isOperator = val => {
        return !isNaN(val) || val === "," || val === "=";
    };

    render() {
        return (
            <div className="tecla2"
            onClick={() => this.props.handleClick(this.props.children)}>
                {this.props.children}
            </div>
        );
    }
}

export default Tecla2;