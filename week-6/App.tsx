import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import RefreshControlExample from './components/RefreshControlExample';
import FlatListExample from './components/FlatListExample';
import ModalExample from './components/ModalExample';

const App = () => {
  const [displayText, setDisplayText] = useState('');
  function longPress(){
    displayText? setDisplayText('') : setDisplayText('Long Pressed')
  }
  return (
    // <View style={styles.container}>
    //   { <Text>{displayText}</Text>
    //   <Pressable onLongPress={longPress} delayLongPress={1000}>
    //     <Text>Button Text </Text> 
    //   </Pressable> }  
    // </View>
    //<RefreshControlExample></RefreshControlExample>
    <FlatListExample />
    //<ModalExample />
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

export default App;