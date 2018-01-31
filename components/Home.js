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
			marques:"",
			email:[]
		};
}

componentDidMount() {
	axios
	.get ('https://74ba2f18.ngrok.io')
	.then(response => {
		this.setState({ email: response.data });
		})
		.catch((error) => {
		console.log(error);
	})
}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<ScrollView style={styles.container} alignItems={'center'} justifyContent= {'center'} >
				<Image source={require('../images/cerf.png')}/>
				<TextInput style={{width: 250, height: 30, marginBottom: 15}} keyboardType='email-address'
				placeholder='Votre email' 
				onSubmitEditing={Keyboard.dismiss} />
				<Button
				onPress={() =>
					navigate('Signup')}
				title="Submit"
				color="#EB9800"
				accessibilityLabel="Learn more about this submit"
			/>
			{/* {this.state.email.map(emai =><Text>{emai.marques}</Text>)} */}
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


