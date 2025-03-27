import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Platform, View, Modal } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

interface DateProps {
  date: Date;
  onDateChange: (date: Date) => void;
}

export const Date = ({ date, onDateChange }: DateProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [newDate, setNewDate] = useState<Date>(date);

  // When user clicks Done button, set the new date and close the modal
  const onDone = (selectedDate: Date) => {
      onDateChange(selectedDate);
      setShow(false);
  };

  // When user clicks on the date, show the date picker
  const showDatepicker = () => {
    setShow(true);
  };

  // Format the date to be displayed
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.dateContainer} 
        onPress={showDatepicker}
      >
        <Text style={styles.dateText}>{formatDate(date)}</Text>
      </TouchableOpacity>

      {Platform.OS === 'ios' ? (
        <Modal
          visible={show}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShow(false)}
        >
          <TouchableOpacity 
            style={styles.modalContainer}
            activeOpacity={1}
            onPress={() => setShow(false)}
          >
            <View>
              <TouchableOpacity 
                activeOpacity={1} 
                onPress={e => e.stopPropagation()}
              >
                <View style={styles.pickerContainer}>
                  <View style={styles.pickerHeader}>
                    <TouchableOpacity onPress={() => onDone(newDate)}>
                      <Text style={styles.doneButton}>Done</Text>
                    </TouchableOpacity>
                  </View>
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    display="spinner"
                    onChange={(event: DateTimePickerEvent, selectedDate?: Date) => {
                        if (selectedDate) {
                            setNewDate(selectedDate);
                        }
                    }}
                    style={styles.picker}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      ) : (
        show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="default"
            onChange={(event: DateTimePickerEvent, selectedDate?: Date) => {
                setShow(false);
                if (selectedDate) {
                    onDateChange(selectedDate);
                }
            }}
          />
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dateContainer: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  dateText: {
    color: '#fff',
    fontSize: Platform.OS === 'ios' ? 16 : 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
  },
  pickerHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  doneButton: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
  picker: {
    width: '100%',
    backgroundColor: 'white',
  },
});
