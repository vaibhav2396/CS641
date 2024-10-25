import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Home = ({navigation}) =>{
  return(
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title={"Settings"} onPress={()=>{ navigation.push('Settings')}}/>
      <Button title={"Profile"} onPress={()=>{ navigation.push('Profile')}}/>
    </View>
  )
}

const Settings = ({navigation}) =>{
  return(
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button title={"Home"} onPress={()=>{ navigation.push('Home')}}/>
      <Button title={"Profile"} onPress={()=>{ navigation.push('Profile')}}/>
    </View>
  )
}

const Profile = ({navigation}) =>{
  return(
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title={"Home"} onPress={()=>{ navigation.push('Home')}}/>
      <Button title={"Settings"} onPress={()=>{ navigation.push('Settings')}}/>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Settings' component={Settings} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
