// needs to be a React component with a render method and it needs to be exported
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.js';

class App extends React.Component{
  //constructor(props){
  // 	super(props)
  // 	this.state = {

  // 	}
  // }
  render() {
    return (
      <div>
        <p>
          Welcome, type a search word in the bar to get started!
        </p>
        <div>
          <Search/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));