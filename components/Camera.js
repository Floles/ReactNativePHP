import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, TouchableOpacity, Vibration } from 'react-native';
import { Constants, Camera, Permissions } from 'expo';
import axios from 'axios';

export default class App extends React.Component {

constructor(props) {
	super(props);

	this.capture = this.capture.bind(this);

	this.state = {
	hasCameraPermission: null,
	type: Camera.Constants.Type.back,
	isLoading: false
	}
}


async componentWillMount() {
	const { status } = await Permissions.askAsync(Permissions.CAMERA);
	this.setState({ hasCameraPermission: status === 'granted' });
}

capture() {
	if (this.camera) {
	let formData = new FormData();

	this.camera.takePictureAsync({ quality: 0 }).then(data => {
		this.setState({
		isLoading: true
		});

		formData.append('picture', { uri: data.uri, name: 'photo.jpg', type: 'image/jpg' });

		axios
		.post('https://a5d68759.ngrok.io/socks/web/app_dev.php/api/user/', formData)
		.then(res => {
			Vibration.vibrate();
			this.setState(prevState => {
			return {
				isLoading: false
			}
			});
		})
		.catch(error => console.error(error));
	});
	}
}


render() {
	return (
	<Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref }}>
		<View
		style={{
			flex: 1,
			backgroundColor: 'transparent',
			flexDirection: 'row',
		}}>
		<TouchableOpacity style={{
			flex: 1,
			flexDirection: 'column',
			alignSelf: 'flex-end',
			alignItems: 'center',
		}}>
			<Button title="Capture" onPress={this.capture} />
		</TouchableOpacity>
		</View>
	</Camera>
	);
}
}