/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import snoowrap from 'snoowrap';

function Square(props) {
	return (
		<square className="square">
			{props.value}
		</square>
	);
} 

class Board extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
				squares : [],
				loading: true,
				response: [],
				limit : 1,
			};
		}

	componentDidMount(){
		const apiObj = new snoowrap({
			userAgent: 'Abcasdasd',
			clientId: 'h7ADaCnt60mBhg',
			clientSecret: '89eM1x2Ec3JhMsJvtVQlQ6qCExo',
			username: 'OverIsopod',
			password: '1234567890'
		});
		// apiObj.getSubmission('c1xhdm').expandReplies({limit: 5, depth: 5}).then((res)=>{
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

	const {limit} = this.state;
		var boxes = [];

	//   for(var i = 0 ; i < 5 ; i++) {
		//   boxes.push(<div className="board-row">{this.renderSquare(num[i])}</div>);
	//   }
	
	// instead of using For loop we will use Map or ForEach, this is good practise.
	  num.slice((limit-1)*5, limit*5).forEach((nu, index)=>{
		   boxes.push(<Square value={nu} />)
		// boxes.push(<div className="board-row">{this.renderSquare(nu)}</div>);
		// setTimeout(()=>{
		// 	console.log('hello', index);
		// }, 5000);
	  })	
	  return boxes;

  }
handleclick = () => {
	var {limit} = this.state;
	this.setState({limit: this.state.limit + 1 });
	this.forceUpdate();
}

  render() {
		const { loading, response } = this.state;

    return (
      <div>
		  { !loading ? <div>{this.createbox(response)}</div> : <div>LOADING...</div>}

        {/* {!loading ? <div> <div className="status">{status}</div>
			{this.createbox()</div>
			} */}
			<button onClick={this.handleclick}>Load More</button>
		
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