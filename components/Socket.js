import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native';
import { Alert } from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class Signup extends React.Component {
	onPressSubmit(){
		Alert.alert('Vous êtes inscrit !')
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<TextInput style={{width: 250, height: 30, marginBottom: 35}}
				placeholder='FirstName'></TextInput>
				<TextInput style={{width: 250, height: 30, marginBottom: 35}}
				placeholder='LastName' onSubmitEditing={Keyboard.dismiss}></TextInput>
				<Button
				onPress={() =>
					navigate('Home')}
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