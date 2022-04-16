import React, { Component } from 'react';


class classComponent extends Component {
	state = {
		name: 'Patrick Hill',
		age:43
	};
	stateChanger=()=>{
		this.setState({ age : 18 })
	}
	
	render() {
		return (
			<>
				<h3>Learning States from your one and Only {this.state.name} and his age is {this.state.age}</h3>
				<button onClick={this.stateChanger}>Change</button>
			</>
		);
	}
}

export default classComponent;
