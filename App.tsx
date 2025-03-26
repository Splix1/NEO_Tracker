import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Platform } from 'react-native';
import { Header } from './components/Header';
import { useState } from 'react';

const backgroundImage = require('./assets/images/background.jpg');

export default function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ImageBackground 
          source={backgroundImage}
          style={styles.backgroundImage}
        >
          <Header 
            date={selectedDate} 
            onDateChange={setSelectedDate}
          />
          <View style={styles.content}>
            <StatusBar style="light" />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  text: {
    color: '#fff',
    fontSize: Platform.OS === 'ios' ? 16 : 14,
  },
});
