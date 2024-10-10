import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import FunctionalComponent  from './components/FunctionalComponent';
import FunctionalComponent2 from './components/FunctionalComponent2';


export default function App() {
  return (
     <ScrollView>
      <Text>Text 1</Text>
      <Text>Text 2</Text>
      <ActivityIndicator></ActivityIndicator>
      <FunctionalComponent default={0}/>
      <FunctionalComponent2 default={"Hello"} />
     </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 500,
    height: 500,
  },
});
