import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
	render() {
		const { titleStyle } = styles;
		const { title, id } = this.props.library;

		console.log(TouchableWithoutFeedback, View, CardSection, Text);

		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

// The first arguement is 'mapStateToProps', but since we don't want to pass
// that in here, we pass in 'null'. Again, the first arguement is explicitly
// 'mapStateToProps'. For the second arguement, we pass in the entire actions
// object. This says take these action creators, and make sure whenever they
// are called, the actions go to the right place. And then pass these actions
// into the component as props.

export default connect(null, actions)(ListItem);
