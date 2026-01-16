import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store';

interface RootProviderProps {
  children: React.ReactNode;
}

const RootProvider = (props: RootProviderProps) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default RootProvider;