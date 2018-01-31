import React from 'react';
import {StackNavigator} from 'react-navigation';
import Home from './components/Home';
import Signup from './components/Signup';
import Camera from './components/Camera';

export default StackNavigator({
  Home: { screen: Home},
  Signup: {screen: Signup},
  Camera: {screen: Camera}
}); 
