import React from 'react';

class Entry extends React.Component {
  constructor(props){
	super(props)
	this.state = {
	  entry: "your definition here",
	  query: "your search term here"
	}
  }
  render(){
  	return (
  	  <div>
      <textarea rows="6" cols="50" style={{overflow: "hidden"}} placeholder={this.state.query ? this.state.query : "input"}></textarea>
  	  <textarea rows="6" cols="50" style={{overflow: "hidden"}} placeholder={this.state.entry ? this.state.entry : "definition"}></textarea>
  	  </div>
  	)
  }
}

export default Entry;
