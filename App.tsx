import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Platform } from 'react-native';
import { Header } from './components/Header';
import { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { getNEOsByDate } from './services/NASA/NEOWebService';
import { NEO as NEOType } from './types';
import { NEOGrid } from './components/NEOGrid';
const backgroundImage = require('./assets/images/background.jpg');

export default function App() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [NEOs, setNEOs] = useState<NEOType[]>([]);

  useEffect(() => {
    const fetchNEOs = async () => {
      const date = selectedDate.toISOString().split('T')[0];
      const NEOSResponse = await getNEOsByDate(date);
      const NEOSResult = NEOSResponse.map((NEO: any) => {

        const diameter = (NEO.estimated_diameter.feet.estimated_diameter_min + NEO.estimated_diameter.feet.estimated_diameter_max) / 2;
        
        return {
          name: NEO.name,
          diameter: diameter,
          velocity: NEO.close_approach_data[0].relative_velocity.miles_per_hour,
          distance: NEO.close_approach_data[0].miss_distance.miles,
          isHazardous: NEO.is_potentially_hazardous_asteroid
        }
      })
      setNEOs(NEOSResult);
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
            <NEOGrid NEOs={NEOs} />
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
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: Platform.OS === 'ios' ? 16 : 14,
  },
});
