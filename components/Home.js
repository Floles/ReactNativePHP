import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Button } from 'react-native';
import { Alert } from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class Home extends React.Component {

constructor(props){
	super(props)
		this.state={
			email:""
		};
}

	render() {
		console.log(this.state)
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Image source={require('../images/cerf.png')}/>
				<TextInput style={{width: 250, height: 30, marginBottom: 15}}
				placeholder='Votre email' value={this.state.email} onChangeText={(email) =>this.setState({email})} />
				<Button
				onPress={() =>
					navigate('Signup')}
				title="Submit"
				color="#EB9800"
				accessibilityLabel="Learn more about this submit"
			/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
});


