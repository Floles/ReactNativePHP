import React from 'react';
import { StyleSheet, Text, ScrollView, TextInput, Image } from 'react-native';
import { Button } from 'react-native';
import { Alert } from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Keyboard} from 'react-native';
import axios from 'axios';

export default class Home extends React.Component {

constructor(props){
	super(props)
		this.state={
		};
}

onSubmit() {
	axios
	.post ('https://a5d68759.ngrok.io/socks/web/app_dev.php/api/user/', {
		email: this.state.email
	})
	.then(response => {
		this.setState({ 
			email: ""
		});
		})
		.catch((error) => {
		console.log(error);
	})
	axios
	.get('https://a5d68759.ngrok.io/socks/web/app_dev.php/api/user/')
	.then(function (response) {
		if(response.status == 200){
			console.log(response.status);
			
		}
	})
	.catch(function (error) {
		console.log(error);
	});
}

	render() {
		return (
			<ScrollView style={styles.container} alignItems={'center'} justifyContent= {'center'} >
				<Image source={require('../images/cerf.png')}/>
				<TextInput style={{width: 250, height: 30, marginBottom: 15}} keyboardType='email-address'
				placeholder='Votre email' value={this.state.email} onChangeText={(email) =>this.setState({email})}
				onSubmitEditing={Keyboard.dismiss} />
				<Button
				onPress={()=>this.onSubmit()}
				title="Submit"
				color="#EB9800"
				accessibilityLabel="Learn more about this submit"
			/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		paddingBottom: 150
	},
});


