/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import snoowrap from 'snoowrap';

function Square(props) {
	return (
		<button className="square">
			{props.value}
		</button>
	);
} 

class Board extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
				squares : [],
				loading: true,
				response: [],
			};
		}

	componentDidMount(){
		const apiObj = new snoowrap({
			userAgent: 'Abcasdasd',
			clientId: 'h7ADaCnt60mBhg',
			clientSecret: '',
			username: 'USERNAME',
			password: 'PASSWORD'
		});
		apiObj.getHot().map(post => post.title).then((res)=>{
			this.setState({
				response: res,
				loading: false,
			})
		});
	}
	
  renderSquare(i) {	
    return (
		<Square value={ i }/>);
  }

  createbox = (num) => {
		var boxes = [];

	//   for(var i = 0 ; i < 5 ; i++) {
		//   boxes.push(<div className="board-row">{this.renderSquare(num[i])}</div>);
	//   }

	// instead of using For loop we will use Map or ForEach, this is good practise.

	  num.forEach((nu, index)=>{
		   boxes.push(<Square value={nu} />)
		// boxes.push(<div className="board-row">{this.renderSquare(nu)}</div>);
		// setTimeout(()=>{
		// 	console.log('hello', index);
		// }, 5000);
	  })
	  return boxes;

  }


  render() {
		const { loading, response } = this.state;

    return (
      <div>
		  { !loading ? <div>{this.createbox(response)}</div> : <div>LOADING...</div>}

        {/* {!loading ? <div> <div className="status">{status}</div>
			{this.createbox()</div>
			} */}
		
      </div>
    );
  }
}

class Game extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			history: [{
				squares: [], 
			}],
		};
	}
	
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);