import React, {Component} from 'react';
import './App.css';
import Tecla from './Tecla';
import Tecla2 from './Tecla2';
import Resultado from './Resultado';
import Apagar from './Apagar';
import Anterior from './Anterior';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: "",
      numeroAnterior: "",
      numeroAtual: "",
      operador: "",
      memo1:"",
      memo2:"",
      memo3:"",
      memo4:""
    };
  }

  adicionarAoResultado = val => {
    this.setState({resultado: this.state.resultado + val});
  }

  adicionarDecimal = val => {
    if (this.state.resultado.indexOf(",") === -1){
      this.setState({resultado: this.state.resultado + val});
    }
  }

  adicionarZeroAoResultado = val => {
    if (this.state.resultado !== "") {
      this.setState({resultado: this.state.resultado + val});
    }
  }

  apagarResultado = val => {
    this.setState({resultado: ""});
  }

  adicionar = () => {
    this.state.numeroAnterior = this.state.resultado;
    this.setState({resultado: ""});
    this.state.operador = "+";
  }

  diminuir = () => {
    this.state.numeroAnterior = this.state.resultado;
    this.setState({resultado: ""});
    this.state.operador = "-";
  }

  multiplicar = () => {
    this.state.numeroAnterior = this.state.resultado;
    this.setState({resultado: ""});
    this.state.operador = "*";
  }

  dividir = () => {
    this.state.numeroAnterior = this.state.resultado;
    this.setState({resultado: ""});
    this.state.operador = "/";
  }

  realizarOperacao = () => {
    this.state.numeroAtual = this.state.resultado;
    if (this.state.operador === "+") {
      this.setState({
        resultado: parseFloat(this.state.numeroAnterior) + parseFloat(this.state.numeroAtual)
      });
    }
    else if (this.state.operador === "-") {
      this.setState({
        resultado: parseFloat(this.state.numeroAnterior) - parseFloat(this.state.numeroAtual)
      });
    }
    else if (this.state.operador === "*") {
      this.setState({
        resultado: parseFloat(this.state.numeroAnterior) * parseFloat(this.state.numeroAtual)
      });
    }
    if (this.state.operador === "/") {
      this.setState({
        resultado: parseFloat(this.state.numeroAnterior) / parseFloat(this.state.numeroAtual)
      });
    }
  }

  apagarTodaMemo = () => {
    this.setState({memo1: ""});
    this.setState({memo2: ""});
    this.setState({memo3: ""});
    this.setState({memo4: ""});
  }

  salvar = () => {
    this.setState({memo4: this.state.memo3});
    this.setState({memo3: this.state.memo2});
    this.setState({memo2: this.state.memo1});
    this.setState({memo1: this.state.resultado});
  }

  adicionarAoMemo1 = () => {
    this.setState({
    memo1: parseFloat(this.state.memo1) + parseFloat(this.state.resultado)
    });
  }

  recuperaMemo1 = () => {
    this.setState({resultado: this.state.memo1});
  }

  recuperaMemo2 = () => {
    this.setState({resultado: this.state.memo2});
  }

  recuperaMemo3 = () => {
    this.setState({resultado: this.state.memo3});
  }

  recuperaMemo4 = () => {
    this.setState({resultado: this.state.memo4});
  }

  apagarMemo1 = () => {
    this.setState({memo1: ""});
  }

  apagarMemo2 = () => {
    this.setState({memo2: ""});
  }

  apagarMemo3 = () => {
    this.setState({memo3: ""});
  }

  apagarMemo4 = () => {
    this.setState({memo4: ""});
  }

  render() {
    return (
      <div className="App">
        <div className="compartimento">
          <div className="fileira">
              <Anterior>{this.state.numeroAnterior + " " + this.state.operador}</Anterior>
            </div>
            <div className="fileira">
              <Resultado>{this.state.resultado}</Resultado>
            </div>
            <div className="fileira">
              <Apagar handleClear={this.apagarResultado}>AC</Apagar>
            </div>
            <div className="fileira">
              <Tecla handleClick={this.apagarTodaMemo}>MC</Tecla>
              <Tecla handleClick={this.recuperaMemo1}>MR</Tecla>
              <Tecla handleClick={this.adicionarAoMemo1}>M+</Tecla>
              <Tecla handleClick={this.salvar}>MS</Tecla>
            </div>
            <div className="fileira">
              <Tecla handleClick={this.adicionarAoResultado}>7</Tecla>
              <Tecla handleClick={this.adicionarAoResultado}>8</Tecla>
              <Tecla handleClick={this.adicionarAoResultado}>9</Tecla>
              <Tecla handleClick={this.dividir}>/</Tecla>
            </div>
            <div className="fileira">
              <Tecla handleClick={this.adicionarAoResultado}>4</Tecla>
              <Tecla handleClick={this.adicionarAoResultado}>5</Tecla>
              <Tecla handleClick={this.adicionarAoResultado}>6</Tecla>
              <Tecla handleClick={this.multiplicar}>*</Tecla>
            </div>
            <div className="fileira">
              <Tecla handleClick={this.adicionarAoResultado}>1</Tecla>
              <Tecla handleClick={this.adicionarAoResultado}>2</Tecla>
              <Tecla handleClick={this.adicionarAoResultado}>3</Tecla>
              <Tecla handleClick={this.adicionar}>+</Tecla>
            </div>
            <div className="fileira">
              <Tecla handleClick={this.adicionarDecimal}>,</Tecla>
              <Tecla handleClick={this.adicionarZeroAoResultado}>0</Tecla>
              <Tecla handleClick={this.realizarOperacao}>=</Tecla>
              <Tecla handleClick={this.diminuir}>-</Tecla>
          </div>
        </div>
        <div className="compartimento3">
          <div className="fileira">
            <Resultado>{this.state.memo1}</Resultado>
          </div>
          <div className="fileira">
            <Resultado>{this.state.memo2}</Resultado>
          </div>
          <div className="fileira">
            <Resultado>{this.state.memo3}</Resultado>
          </div>
          <div className="fileira">
            <Resultado>{this.state.memo4}</Resultado>
          </div>
        </div>
        <div className="compartimento2">
          <div className="fileira">
            <Tecla2 handleClick={this.apagarMemo1}>MC</Tecla2>
            <Tecla2 handleClick={this.recuperaMemo1}>MR</Tecla2>
          </div>
          <div className="fileira">
            <Tecla2 handleClick={this.apagarMemo2}>MC</Tecla2>
            <Tecla2 handleClick={this.recuperaMemo2}>MR</Tecla2>
          </div>
          <div className="fileira">
            <Tecla2 handleClick={this.apagarMemo3}>MC</Tecla2>
            <Tecla2 handleClick={this.recuperaMemo3}>MR</Tecla2>
          </div>
          <div className="fileira">
            <Tecla2 handleClick={this.apagarMemo4}>MC</Tecla2>
            <Tecla2 handleClick={this.recuperaMemo4}>MR</Tecla2>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;