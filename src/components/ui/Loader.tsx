import React from 'react';
import {ActivityIndicator, View, StyleSheet, ViewStyle} from 'react-native';
import {colors} from '@/theme';

interface LoaderProps {
  size?: 'small' | 'large';
  color?: string;
  style?: ViewStyle;
}

const Loader: React.FC<LoaderProps> = ({
  size = 'large',
  color = colors.primary,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;