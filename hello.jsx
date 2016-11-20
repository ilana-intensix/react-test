import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib/index';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button, IconButton} from 'react-toolbox/lib/button';
import AppBar from 'react-toolbox/lib/app_bar';

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
				<AppBar relative flat >
					ICUnitor V2
				</AppBar>
				<Grid>
					<Row>
						<Col xs={12} md={3}>
							<Card>
								<CardTitle
						    		avatar="https://placeimg.com/80/80/animals"
									title="Avatar style title"
									subtitle="Subtitle here"
								/>
								<CardMedia
							      aspectRatio="wide"
							      image="https://placeimg.com/800/450/nature"
							    />
							    <CardTitle
							      title="Title goes here"
							      subtitle="Subtitle here"
							    />
							    <CardText>Here is some card text</CardText>
							    <CardActions>
							      <Button label="Action 1" />
							      <Button label="Action 2" />
							    </CardActions>
							</Card>
						</Col>
						<Col xs={12} md={3}>
							<Card>
								<CardTitle
						    		avatar="https://placeimg.com/80/80/animals"
									title="Avatar style title"
									subtitle="Subtitle here"
								/>
								<CardMedia
							      aspectRatio="wide"
							      image="https://placeimg.com/800/450/nature"
							    />
							    <CardTitle
							      title="Title goes here"
							      subtitle="Subtitle here"
							    />
							    <CardText>Here is some card text</CardText>
							    <CardActions>
							      <Button label="Action 1" />
							      <Button label="Action 2" />
							    </CardActions>
							</Card>
						</Col>
						<Col xs={12} md={3}>
							<Card>
								<CardTitle
						    		avatar="https://placeimg.com/80/80/animals"
									title="Avatar style title"
									subtitle="Subtitle here"
								/>
								<CardMedia
							      aspectRatio="wide"
							      image="https://placeimg.com/800/450/nature"
							    />
							    <CardTitle
							      title="Title goes here"
							      subtitle="Subtitle here"
							    />
							    <CardText>Here is some card text</CardText>
							    <CardActions>
							      <Button label="Action 1" />
							      <Button label="Action 2" />
							    </CardActions>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col xs={12} md={3}>
							<Card>
								<CardTitle
						    		avatar="https://placeimg.com/80/80/animals"
									title="Avatar style title"
									subtitle="Subtitle here"
								/>
								<CardMedia
							      aspectRatio="wide"
							      image="https://placeimg.com/800/450/nature"
							    />
							    <CardTitle
							      title="Title goes here"
							      subtitle="Subtitle here"
							    />
							    <CardText>Here is some card text</CardText>
							    <CardActions>
							      <Button label="Action 1" />
							      <Button label="Action 2" />
							    </CardActions>
							</Card>
						</Col>
						<Col xs={12} md={3}>
							<Card>
								<CardTitle
						    		avatar="https://placeimg.com/80/80/animals"
									title="Avatar style title"
									subtitle="Subtitle here"
								/>
								<CardMedia
							      aspectRatio="wide"
							      image="https://placeimg.com/800/450/nature"
							    />
							    <CardTitle
							      title="Title goes here"
							      subtitle="Subtitle here"
							    />
							    <CardText>Here is some card text</CardText>
							    <CardActions>
							      <Button label="Action 1" />
							      <Button label="Action 2" />
							    </CardActions>
							</Card>
						</Col>
						<Col xs={12} md={3}>
							<Card>
								<CardTitle
						    		avatar="https://placeimg.com/80/80/animals"
									title="Avatar style title"
									subtitle="Subtitle here"
								/>
								<CardMedia
							      aspectRatio="wide"
							      image="https://placeimg.com/800/450/nature"
							    />
							    <CardTitle
							      title="Title goes here"
							      subtitle="Subtitle here"
							    />
							    <CardText>Here is some card text</CardText>
							    <CardActions>
							      <Button label="Action 1" />
							      <Button label="Action 2" />
							    </CardActions>
							</Card>
						</Col>
					</Row>
				</Grid>
			</div>
			);
	}

}

export default Hello;