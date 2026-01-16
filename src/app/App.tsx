import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import RootProvider from '@/providers/RootProvider';
import Navigation from '@/navigation';

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