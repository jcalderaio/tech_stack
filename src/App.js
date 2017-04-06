import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'; // * Provider wraps store
import { createStore } from 'redux';   // createStore
import reducers from './reducers';   // import reducers
import { Header } from './components/common';
import LibraryList from './components/LibraryList'; // import LibraryList comp.


class App extends Component {

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View style={{ flex: 1 }}>
					<Header headerText="Tech Stack" />
					<LibraryList />
				</View>
			</Provider>
		);
	}
}

export default App;
