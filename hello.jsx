import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib/index';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

class Hello extends React.Component {
	// beds = [
	// 			{number: 1}, 
	// 			{number: 2},
	// 			{number: 3},
	// 			{number: 4},
	// 			{number: 5},
	// 			{number: 6},
	// 			{number: 7},
	// 			{number: 8},
	// 			{number: 9},
	// 			{number: 10}

	// 		];

	render() {
		return (
			<div>
				<h1>Hello World why did this take so long</h1>
				<Grid>
					<Row>
						<Col xs={12} md={3}>
							<Card>
								<CardTitle
						    		avatar="https://placeimg.com/80/80/animals"
									title="Avatar style title"
									subtitle="Subtitle here"
								/>
							</Card>
						</Col>
						<Col xs={12} md={3}>Hello, world!</Col>
						<Col xs={12} md={3}>Hello, world!</Col>
					</Row>
					<Row>
						<Col xs={12} md={3}>Hello, world!</Col>
						<Col xs={12} md={3}>Hello, world!</Col>
						<Col xs={12} md={3}>Hello, world!</Col>
					</Row>
				</Grid>
			</div>
			);
	}

}

export default Hello;