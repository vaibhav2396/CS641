/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import HomeScreen from './components/pages/Home/Home';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});

export default App;
