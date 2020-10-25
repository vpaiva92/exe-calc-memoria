import React, {Component} from 'react';
import './App.css';

class Tecla extends Component {
    isOperator = val => {
        return !isNaN(val) || val === "," || val === "=";
    };

    render() {
        return (
            <div className={`tecla ${this.isOperator(this.props.children) ? "": "operador"}`}
            onClick={() => this.props.handleClick(this.props.children)}>
                {this.props.children}
            </div>
        );
    }
}

export default Tecla;