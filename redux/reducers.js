import {combineReducers} from 'redux';

function dimensionsReducer(state={cardDimensions: {}}, action) {
	console.log('dimensionsReducer was called with state', state, 'and action', action);
	switch (action.type) {
		case 'RESIZE_CARD':
			return Object.assign({}, state, {
				cardDimensions: action.dimensions
			});
		default:
			return state;
	}
}

var reducers = combineReducers({
	dimensionState: dimensionsReducer
});

export default reducers;