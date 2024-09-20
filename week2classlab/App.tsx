import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
     <ScrollView>
      <Text>Text 1</Text>
      <Text>Text 2</Text>
      <ActivityIndicator></ActivityIndicator>
      <Image
        style={styles.logo}
        source={{uri: "data:image/jpeg;base64,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"}}
      />
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