import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import { tsPropertySignature, removeProperties } from '@babel/types';

//EXERCICIO 1
/*
class Welcome extends React.Component {
    render(){
        return <h1>Hello, {this.props.name}</h1>;
    }
}

//function Welcome(props){
  //  return <h1>Hello, {props.name}</h1>
//}



function App(){
    return (
        <div>
            <Welcome name="Felipe" />
            <Welcome name ="Fernandes" />
            <Welcome name="Bastos" />
        </div>
    );
}
  ReactDOM.render(<App />, document.getElementById('root'));
*/

/*class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date:new Date()};
    }
    
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }      

    tick(){
        this.setState({
            date: new Date()
        });
    }
    
    render(){
        return(
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <h3>This id {this.timerID}</h3>
            </div>
        );
    }

}
*/

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
            firstNumber: 0,
            secondNumber: 0
        }

        // This binding is necessary to make `this` work in the callback
        //this.handleInputChange = this.handleInputChange.bind(this);
        this.sumClick = this.sumClick.bind(this);
    }

    sumClick() {
        this.setState({
            result: Number(this.state.firstNumber) * Number(this.state.secondNumber),
            firstNumber: 0,
            secondNumber: 0
        });
    }

    handleInputChange(jsonState) {
        this.setState(jsonState, () => {
            this.setState({
                result: Number(this.state.firstNumber) + Number(this.state.secondNumber)
            })
        });
    }

    render() {
        return (
            <div className='calculadora'>

                <label>
                    firstNumber:
                    <input
                        name="firstNumber"
                        type="number"
                        value={this.state.firstNumber}
                        onChange={evento => this.handleInputChange({ firstNumber: evento.target.value })} />
                </label>
                <label>
                    secondNumber:
                    <input
                        name="secondNumber"
                        type="number"
                        value={this.state.secondNumber}
                        onChange={evento => this.handleInputChange({ secondNumber: evento.target.value })} />
                </label>
                <label>
                    result:
                    <a>
                        {this.state.result}
                    </a>
                </label>

                {/* <button onClick={this.sumClick}>
                    Sum
                </button> */}
            </div>
        )
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);


/* class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
  );
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
