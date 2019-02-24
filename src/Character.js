import React, { Component } from 'react';

class Character extends Component {
	render() {
		return (
			<div>
				{ this.props.name && <p>Name: {this.props.name}</p>}
				{ this.props.height && <p>Height: {this.props.height}</p>}
				{ this.props.hair_color && <p>Hair Colour: {this.props.hair_color}</p>}
				{ this.props.eye_color && <p>Eye Colour: {this.props.eye_color}</p>}
				{ this.props.birth_year && <p>Birth Year: {this.props.birth_year}</p>}
			<img alt='characters' src={`https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/888457/580/386/m1/fpnw/wm0/cover-.jpg?1452189058&s=6eb7d5f55a515cbddfe8bcaf695deba0`}/>
			</div>
			);
	}
}

export default Character;