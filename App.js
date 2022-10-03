import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import styles from 'react-native-calendar/components/styles';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {LogContextProvider} from './contexts/LogContext';
// import {SearchContextProvider} from './contexts/SearchContext';
import CalendarScreen from './screens/CalendarScreen';
import FeedsScreen from './screens/FeedsScreen';
// import {Header, Contents, Footer} from './components/Layout';

function App() {
  return (
    <NavigationContainer>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
    </NavigationContainer>
  );
}

export default App;