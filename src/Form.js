import React, { Component } from 'react';



class Form extends Component {
	render() {
		return (
			<button onClick ={this.props.getCharacter}>
			Get Character
			</button>
		);
	}
}

export default Form;