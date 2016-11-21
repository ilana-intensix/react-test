import React from 'react';
import Measure from 'react-measure';
import { Card } from 'react-toolbox/lib/card';
import {resizeCard} from './redux/action-creators.js';
import {connect} from 'react-redux';

class _MeasurableCard extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this._measureComponent.measure();
	}

	componentDidUpdate() {
		this._measureComponent.measure();
	}

	render() {
		return (
			<Measure
				ref = {c => this._measureComponent = c}
				onMeasure={(dimensions) => {
					console.log("New dimensions: " + {dimensions});
					this.props.updateDimensions(dimensions);
				}}
			>
				<Card>
					{this.props.children}
				</Card>
			</Measure>
		
		);
	}
}

const mapStateToProps = (state) => {
	return {};
}

const mapDispatchToProps = function(dispatch){
	return {
		updateDimensions: function(dimensions) { dispatch(resizeCard(dimensions))}
	}
}

const MeasurableCard = connect(mapStateToProps, mapDispatchToProps)(_MeasurableCard);

export default MeasurableCard;