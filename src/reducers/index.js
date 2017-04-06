import { combineReducers } from 'redux';  // combineReducers
import LibraryReducer from './LibraryReducer';  // LibraryReducer
import SelectionReducer from './SelectionReducer';

// combineReducers makes many different reducers get along together
export default combineReducers({
	libraries: LibraryReducer,
	selectedLibraryId: SelectionReducer
});

// At any point in time when we use the word "DATA", the data inside of our
// application, we need to be thinking of reducers. Reducers produce our
// application state, and our state is what holds all the data for our app.

// A reducer is a function that returns some amount of data

// First you need to understand how your app works and how many states you need.
// For each state, you need another reducer
