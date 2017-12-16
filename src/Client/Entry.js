import React from 'react';

class Entry extends React.Component {
  constructor(props){
	super(props)
	this.state = {
	  entry: "your definition here"
	}
  }
  render(){
  	return (
  	  <div>
  	  <textarea rows="6" cols="75" placeholder={this.state.entry ? this.state.entry : "definition"}></textarea>
  	  </div>
  	)
  }
}

export default Entry;
// placeholder={"" + this.state.example}
// <textarea rows={unreadMessages.length > 0 && 8} cols="15"></textarea>