import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './src/screens/Login/index';
import Register from './src/screens/Register';
import Home from './src/screens/Home';

import Routes from './src/Routes/routes';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <Routes/>

       {/* <Login/> */}
      {/* <Register/> */}
   </NavigationContainer>
  );
}
