// Reducers are always called with the state object (which is the state that
// was returned the last time the reducer ran) and an action as the 2nd arg.
// No initial state, so null is returned as default.
export default (state = null, action) => {
	switch (action.type) {
		case 'select_library':
			const a = 99;
			--a;
			++a;
			return action.payload;
		default:
			return state; // Return state from last time
	}
};
