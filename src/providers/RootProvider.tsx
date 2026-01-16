import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store';
import {ThemeProvider} from './ThemeProvider';

interface RootProviderProps {
  children: React.ReactNode;
}

const RootProvider = (props: RootProviderProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        {props.children}
      </ThemeProvider>
    </Provider>
  );
};

export default RootProvider;