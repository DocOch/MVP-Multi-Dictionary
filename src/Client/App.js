// needs to be a React component with a render method and it needs to be exported
import React from 'react';
import ReactDOM from 'react-dom';
// import searchBar from './searchBar.js';
class search extends React.Component {
 render(){
	 return (
		  <h3>Hello World</h3>
	 )	
 }
}
console.log('search is', search)
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
        <div>
          
          <search/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));