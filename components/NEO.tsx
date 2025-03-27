import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NEO as NEOType } from '../types';
import { NEOModal } from './NEOModal';

const { width, height } = Dimensions.get('window');

const asteroidImage = require('../assets/images/asteroid.png');


interface NEOProps {
  NEO: NEOType;
}


export const NEO = ({ NEO }: NEOProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.name}>{NEO.name}</Text>
        <Image
          source={asteroidImage}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <NEOModal
        NEO={NEO}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: width * 0.04,
  },
  name: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginBottom: height * 0.015,
  },
  image: {
    width: width * 0.1,
    height: width * 0.1,
  },
});
