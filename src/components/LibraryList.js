// Render the list of libraries from store to the user
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';  // connect
import ListItem from './ListItem';
// Connect helper from the 'react-redux' library helps us to get access to our
// application state inside of a given component (LibraryList)

class LibraryList extends Component {
	// The instant the component is about to render, we can tell ListView
	// ...where to get its data from

	// This is 100% copy/pasteable
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		// dataSource is just a fancy little wrapper for what we want to show
		// ...inside the list
		this.dataSource = ds.cloneWithRows(this.props.libraries);
	}

	// How to show a single item in the list
	renderRow(library) {
		return <ListItem library={library} />;
	}

	render() {
		return (
			<ListView
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

function mapStateToProps(state) {
	return {
		libraries: state.libraries
	};
}

// Calls "connect()" and returns another function, which we call with
// 'LibraryList'.
export default connect(mapStateToProps)(LibraryList);
