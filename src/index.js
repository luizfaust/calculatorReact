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

  render() {
    return (
      <div className='calculadora'>
        <div className="visor">{this.state.visor}</div>
        <div className="board-row">
          {this.renderBotao("+")}
          {this.renderBotao("-")}
          {this.renderBotao("=")}
        </div>
        <div className="board-row">
          {this.renderBotao(7)}
          {this.renderBotao(8)}
          {this.renderBotao(9)}
        </div>
        <div className="board-row">
          {this.renderBotao(4)}
          {this.renderBotao(5)}
          {this.renderBotao(6)}
        </div>
        <div className="board-row">
          {this.renderBotao(1)}
          {this.renderBotao(2)}
          {this.renderBotao(3)}
        </div>
        <div className="board-row full">
          {this.renderBotao(0)}
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Calculadora />);