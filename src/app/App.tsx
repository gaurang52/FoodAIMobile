import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import RootProvider from './RootProvider';
import Navigation from './Navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <RootProvider>
        <Navigation />
      </RootProvider>
    </SafeAreaProvider>
  );
};

export default App;