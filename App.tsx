import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Platform } from 'react-native';
import { Header } from './components/Header';
import { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { getNEOsByDate } from './services/NASA/NEOWebService';
const backgroundImage = require('./assets/images/background.jpg');

export default function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const fetchNEOs = async () => {
      const startDate = selectedDate.toISOString().split('T')[0];
      const endDate = selectedDate.toISOString().split('T')[0];
      const NEOS = await getNEOsByDate(startDate, endDate);
      console.log(NEOS);
    }
    fetchNEOs();
  }, [selectedDate]);

  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>
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
