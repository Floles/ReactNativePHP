import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Alert } from 'react-native';

export default class Signup extends React.Component {
	onPressSubmit(){
		Alert.alert('Vous êtes inscrit !')
	}
	render() {
		return (
			<View style={styles.container}>
				<TextInput style={{width: 250, height: 30, marginBottom: 35}}
				placeholder='FirstName'></TextInput>
				<TextInput style={{width: 250, height: 30, marginBottom: 35}}
				placeholder='LastName'></TextInput>
				<Button
				onPress={this.onPressSubmit}
				title="Submit"
				color="#EB9800"
				accessibilityLabel="Learn more about registration"
			/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});