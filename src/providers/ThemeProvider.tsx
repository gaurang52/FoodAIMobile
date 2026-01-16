import React from 'react';
import {theme} from '../theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  // In a real implementation, this would provide theme context
  // For now, just pass through children
  return <>{props.children}</>;
};