// In AppNavigator.js
import React from 'react';
import { Router, Scene } from 'react-native-router-flux'
import UserCategory from './UserCategory';
import SignUp from './SignUp';

const Stack = createNativeStackNavigator();


const AppNavigator = () => (
  <Router>
     <Scene key = "root">
        <Scene key = "userCategory" component = {UserCategory} title = "UserCategory" initial = {true} />
        <Scene key = "signUp" component = {SignUp} title = "SignUp" />
     </Scene>
  </Router>
)
export default AppNavigator;
