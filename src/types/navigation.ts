// Global navigation types
export type RootStackParamList = {
  Home: undefined;
  Upload: undefined;
  Preview: {imageUri: string};
  Result: {result: any};
};

// Screen names for type safety
export type ScreenName = keyof RootStackParamList;

// Navigation props types
export type NavigationProps<T extends ScreenName> = {
  navigation: any; // Would use proper React Navigation types
  route: {
    params: RootStackParamList[T];
  };
};