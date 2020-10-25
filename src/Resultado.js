import React, {Component} from 'react';
import './App.css';

class Resultado extends Component {

    render() {
        return (
            <div className="resultado">
                {this.props.children}
            </div>
        );
    }
}

export default Resultado;