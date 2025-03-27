import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

interface NEOProps {
  name: string;
}

export const NEO = ({ name }: NEOProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Image 
        source={require('../assets/images/asteroid.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  image: {
    width: 100,
    height: 100,
  },
});
