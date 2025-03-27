import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { NEO } from '../types';

interface NEOModalProps {
  NEO: NEO;
  visible: boolean;
  onClose: () => void;
}

export const NEOModal = ({ NEO, visible, onClose }: NEOModalProps) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.modalOverlay} 
        activeOpacity={1} 
        onPress={onClose}
      >
        <TouchableOpacity 
          activeOpacity={1} 
          onPress={e => e.stopPropagation()}
        >
          <View style={styles.modalContent}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{NEO.name}</Text>
            
            <Text style={styles.label}>Approx. diameter:</Text>
            <Text style={styles.value}>{NEO.diameter} feet</Text>
            
            <Text style={styles.label}>Relative velocity:</Text>
            <Text style={styles.value}>{NEO.velocity} mph</Text>
            
            <Text style={styles.label}>Missed by:</Text>
            <Text style={styles.value}>{NEO.distance} miles</Text>
            
            <Text style={styles.label}>Possibly hazardous:</Text>
            <Text style={styles.value}>{NEO.isHazardous ? 'Yes' : 'No'}</Text>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  modalContent: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
    minWidth: 250,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 2,
  },
  value: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 10,
  },
});
