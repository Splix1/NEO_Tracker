import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { NEO as NEOType } from '../types';
import { NEO } from './NEO';

interface NEOGridProps {
  NEOs: NEOType[];
}

export const NEOGrid = ({ NEOs }: NEOGridProps) => {
  const scrollRef = useRef<ScrollView>(null);
  const getRandomPosition = () => Math.floor(Math.random() * 3); // 0, 1, or 2

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
