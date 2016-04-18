import React from 'react';


export default class Footer extends React.Component{
	render() {
	console.log(this.props.date);
		return (
			<h6>{this.props.newDate}</h6>
		);
	}
}