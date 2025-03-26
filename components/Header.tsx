import { Header as RNEHeader } from '@rneui/themed';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Date } from './Date';

const { width } = Dimensions.get('window');

interface HeaderProps {
  date: Date;
  onDateChange: (date: Date) => void;
}

export const Header = ({ date, onDateChange }: HeaderProps) => {
  return (
    <RNEHeader
      leftComponent={{
        text: 'NEO Tracker',
        style: styles.headerTitle
      }}
      rightComponent={
        <Date date={date} onDateChange={onDateChange} />
      }
      containerStyle={styles.header}
      backgroundColor="transparent"
      barStyle="light-content"
      placement="left"
      centerContainerStyle={styles.centerContainer}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 0,
    elevation: Platform.OS === 'android' ? 0 : undefined,
    shadowOpacity: Platform.OS === 'ios' ? 0 : undefined,
    width: '100%',
    paddingHorizontal: width * 0.05,
    paddingTop: Platform.OS === 'ios' ? 10 : 5,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: Platform.OS === 'ios' 
      ? Math.min(width * 0.06, 24)
      : Math.min(width * 0.055, 22),
    fontWeight: Platform.OS === 'ios' ? 'bold' : '700',
    textAlign: 'left',
  },
});
