import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { NEO as NEOType } from '../types';
import { NEO } from './NEO';
import { getNEOsByDate } from '../services/NASA/NEOWebService';

interface NEOGridProps {
  selectedDate: Date
}

export const NEOGrid = ({ selectedDate }: NEOGridProps) => {
  const [NEOs, setNEOs] = useState<NEOType[]>([]);
  const scrollRef = useRef<ScrollView>(null);
  const getRandomPosition = () => Math.floor(Math.random() * 3); // 0, 1, or 2

  // Fetch NEOs for the selected date when date changes
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

  // Reset scroll to the top when NEOs change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ y: 0, animated: false });
    }
  }, [NEOs]);

  return (
    <ScrollView ref={scrollRef} style={styles.container} contentContainerStyle={styles.scrollContent}>
      {NEOs.map((neo) => {
        
        const horizontalPosition = getRandomPosition() === 0 ? 'flex-start' : getRandomPosition() === 1 ? 'center' : 'flex-end';

        return (
          <View key={neo.name} style={{...styles.row, justifyContent: horizontalPosition}}>
            <NEO NEO={neo} />
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    paddingHorizontal: '5%',
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '5%',
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
