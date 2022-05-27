import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Botao(props) {
  return (
    <button className="botao" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function BotaoL(props) {
  return (
    <button className="botaoL" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visor: "",
    };
  }

  handleClick(i){
    if(i === "="){
      this.setState({
        visor: eval(this.state.visor)
      });
    } else if(i === "C") {
      this.setState({
        visor: "",
      });
    } else if( i === "±" ){
      this.setState({
        visor: eval(this.state.visor) * -1,
      });
    } else {
      this.setState({
        visor: this.state.visor + i,
      });
    }
  }

  renderBotao(i) {
    return (
      <Botao 
        value={i} 
        onClick={() => this.handleClick(i)}
      />
    );
  }
  renderBotaoL(i) {
    return (
      <BotaoL 
        value={i} 
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div className='calculadora'>
        <div className="visor">{this.state.visor}</div>
        <div className="teclado-row">
          {this.renderBotao("C")}
          {this.renderBotao("")}
          {this.renderBotao("±")}
          {this.renderBotao("/")}
        </div>
        <div className="teclado-row">
          {this.renderBotao(7)}
          {this.renderBotao(8)}
          {this.renderBotao(9)}
          {this.renderBotao("*")}
        </div>
        <div className="teclado-row">
          {this.renderBotao(4)}
          {this.renderBotao(5)}
          {this.renderBotao(6)}
          {this.renderBotao("-")}
        </div>
        <div className="teclado-row">
          {this.renderBotao(1)}
          {this.renderBotao(2)}
          {this.renderBotao(3)}
          {this.renderBotao("+")}
        </div>
        <div className="teclado-row">
          {this.renderBotaoL(0)}
          {this.renderBotao(".")}
          {this.renderBotao("=")}
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Calculadora />);