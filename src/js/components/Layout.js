import React from "react";

import Header from "./Header.js"
import Footer from './Footer.js';
import Main from './Main.js';

export default class Layout extends React.Component{
	constructor(){
		super();
		this.state = {
			title:"Welcome, guest!",
			date:"Guest visiting"
		};
	}

	changeTitle(title){
		this.setState({title});
	}
	logDate(){
		var newDate = new Date();
		this.setState({date:`Logged: ${newDate.toString()}`});
	}


	render() {
			// this.state.setState({title:"Welcome, guest"});
			
		return (
			<div>
				
				<Header  title={this.state.title} />
				<Main changeTitle = {this.changeTitle.bind(this)} logDate={this.logDate.bind(this)} />
				<Footer newDate={this.state.date}/>
			</div>
		);
	}
}