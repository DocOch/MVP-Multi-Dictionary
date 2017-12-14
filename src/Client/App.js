// needs to be a React component with a render method and it needs to be exported
import React from 'react';
import ReactDOM from 'reat-dom';

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
          this is the App component in React
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App>, document.getElementById('app'));