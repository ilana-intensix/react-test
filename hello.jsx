import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib/index';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button, IconButton} from 'react-toolbox/lib/button';
import AppBar from 'react-toolbox/lib/app_bar';
import {Chart} from 'react-d3-core';
import {BarStackChart} from 'react-d3-basic';
import MeasurableCard from './measurable-card.jsx';
import {Provider, connect} from 'react-redux';


class _Hello extends React.Component {
	render() {

		var generalChartData = [{'State': 'CA', 'Under 5 Years': -10}, 
								{'State': 'TX', 'Under 5 Years': 20}];

		var width = 100,
	    height = 400,
	    chartSeries = [
	      {
	        field: 'Under 5 Years',
	        name: 'Under 5 Years'
	      }

	    ],
	    x = function(d) {
	      return d.State;
	    },
	    xScale = 'ordinal',
	    yTickFormat = d3.format(".2s");



		return (
				<Provider store={this.props.store}>
					<div>
						<AppBar relative flat >
							ICUnitor V2
						</AppBar>
						<Grid fluid>
							<Row>
								<Col lg={10} lgOffset={1} md={10} mdOffset={1} sm={12}>
									<Grid fluid>
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
												    <CardText>
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    </CardText>
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
												    <CardText>
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    </CardText>
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
												    <CardText>
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    </CardText>
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
												    <CardText>
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    </CardText>
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
												    <CardText>
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    </CardText>
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
												    <CardText>
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    </CardText>
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
												    <CardText>
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    </CardText>
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
												    <CardText>
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    </CardText>
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
												    <CardText>
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    </CardText>
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
												    <CardText>
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    </CardText>
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
												    <CardText>
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    Here is some card text. 
												    </CardText>
												    <CardActions>
												      <Button label="Action 1" />
												      <Button label="Action 2" />
												    </CardActions>
												</Card>
											</Col>
										</Row>
										
									</Grid>
								</Col>
							</Row>
						</Grid>
						
					</div>
				</Provider>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		cardDimensions: state.dimensionState.cardDimensions
	}
}

const Hello = connect(mapStateToProps)(_Hello);

export default Hello;