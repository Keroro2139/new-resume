import { combineReducers } from 'redux';
import stickyHeaderReducer from '../reducers/stickyHeaderReducer'

const allReducers = combineReducers({
    // state: (state = {}) => state
    stickyHeader: stickyHeaderReducer
});

export default allReducers;