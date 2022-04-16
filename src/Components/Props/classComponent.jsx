import React, { Component } from 'react';
class classComponent extends Component {
	constructor(props) {
		super(props);
	}
	state = {};
	render() {
		return (
			<>
				<h2>This is a small demo of Dream Land for {this.props.name} - {this.props.age}</h2>
			</>
		);
	}
}

export default classComponent;
