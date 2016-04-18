import React from 'react';


export default class Main extends React.Component{
	logIn(){
		var name = prompt("Enter your NickName");
		this.props.changeTitle(`Welcome back, ${name}`);
		this.props.logDate();

	}

	render() {
		return (
			<div class="btn">
				<button onClick={this.logIn.bind(this)}>Log In</button>
			</div>
		);
	}
}