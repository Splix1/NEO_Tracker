import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const backgroundImage = require('./assets/images/background.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={backgroundImage}
        style={styles.backgroundImage}
      >
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
