import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import styles from 'react-native-calendar/components/styles';
// import {NavigationContainer} from '@react-navigation/native';
// import RootStack from './screens/RootStack';
// import {LogContextProvider} from './contexts/LogContext';
import CalendarScreen from './CalendarScreen';
import FeedsScreen from './FeedsScreen';

function MainScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <View style={styles.contents}>
          <CalendarScreen />
        </View>
        <View style={styles.footer}>
          <FeedsScreen />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      // alignItems: 'center',
      // justifycontent: 'center',
  },
  header: {
      height: 80,
  },
  contents: {
      height: 360,
  },
  footer: {
      height: 360,
  },
});

export default MainScreen;