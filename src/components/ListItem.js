import React, { Component } from 'react';
import {
	Text,
	TouchableWithoutFeedback,
	View,
	LayoutAnimation
 } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
	// Is called right before component is updated
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	render() {
		const { titleStyle, descriptionStyle } = styles;
		const { title, id, description } = this.props.library;
		const { selectLibrary, expanded } = this.props;

		// console.log(TouchableWithoutFeedback, View, CardSection, Text);

		return (
			<TouchableWithoutFeedback
				onPress={() => selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
					{
					(expanded) &&
						<CardSection>
							<Text style={descriptionStyle}>
								{description}
							</Text>
						</CardSection>
					}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	},
	descriptionStyle: {
		fontSize: 14,
		textAlign: 'justify',
		color: 'blue',
		padding: 5
	}
};

// The "ownProps" property is exactly equal to "this.props" inside of this
// component (ListItem)
function mapStateToProps(state, ownProps) {
	return {
		expanded: state.selectedLibraryId === ownProps.library.id
	};
}

// The first arguement is explicitly
// 'mapStateToProps'. For the second arguement, we pass in the entire actions
// object. This says take these action creators, and make sure whenever they
// are called, the actions go to the right place. And then pass these actions
// into the component as props.

export default connect(mapStateToProps, actions)(ListItem);

/*
{ If id === this.props.selectedLibraryId}
{ (id === this.props.selectedLibraryId) && description}
*/
