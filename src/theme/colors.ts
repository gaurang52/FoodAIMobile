export const colors = {
  // Primary colors
  primary: '#4CAF50',
  primaryDark: '#388E3C',
  primaryLight: '#81C784',

  // Secondary colors
  secondary: '#FF9800',
  secondaryDark: '#F57C00',
  secondaryLight: '#FFB74D',

  // Neutral colors
  white: '#FFFFFF',
  black: '#000000',
  gray50: '#FAFAFA',
  gray100: '#F5F5F5',
  gray200: '#EEEEEE',
  gray300: '#E0E0E0',
  gray400: '#BDBDBD',
  gray500: '#9E9E9E',
  gray600: '#757575',
  gray700: '#616161',
  gray800: '#424242',
  gray900: '#212121',

  // Semantic colors
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FF9800',
  info: '#2196F3',

  // Background colors
  background: '#FFFFFF',
  surface: '#F5F5F5',
  surfaceSecondary: '#FAFAFA',

  // Text colors
  textPrimary: '#212121',
  textSecondary: '#757575',
  textDisabled: '#BDBDBD',

  // Border colors
  border: '#E0E0E0',
  borderLight: '#F5F5F5',
} as const;

export type ColorScheme = typeof colors;