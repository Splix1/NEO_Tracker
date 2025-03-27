import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NEO as NEOType } from '../types';
import { NEOModal } from './NEOModal';

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
          source={require('../assets/images/asteroid.png')}
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
