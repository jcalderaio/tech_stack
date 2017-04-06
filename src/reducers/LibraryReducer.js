import data from './LibraryList.json'; // not .js, so must specify

export default () => data; // not very small

// because no ACTIONS are telling this reducer how to update the state, we will
// always get returned this static list of data
