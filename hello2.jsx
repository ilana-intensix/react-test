import React from 'react';
import InfiniteGrid from 'react-infinite-grid';
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

	    var items = [];
	    for (let i = 0; i< 20; i++) {
	    	items.push(
	    				<MeasurableCard > 
							<BarStackChart
								data= {generalChartData}
								width= {this.props.cardDimensions.width}
								height= {this.props.cardDimensions.height}
								chartSeries = {chartSeries}
								x= {x}
								xScale= {xScale}
								yTickFormat= {yTickFormat}
								showLegend = {false}
						    />	
						</MeasurableCard>);
	    }

		return (
				<Provider store={this.props.store}>
					<div>
						<AppBar relative flat >
							ICUnitor V2
						</AppBar>
						<InfiniteGrid entries={items} 
							height={this.props.cardDimensions.height} 
							width={this.props.cardDimensions.height} />

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