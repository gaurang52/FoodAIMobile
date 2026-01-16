import React, {Suspense} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ActivityIndicator, View} from 'react-native';
import {screens} from './routes';
import {RootStackParamList} from '../types/navigation';
import {colors} from '../theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

// Loading component for lazy-loaded screens
const ScreenLoader = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <ActivityIndicator size="large" color={colors.primary} />
  </View>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <Suspense fallback={<ScreenLoader />}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Home"
            component={screens.Home}
            options={{title: 'FoodAI Mobile'}}
          />
          <Stack.Screen
            name="Upload"
            component={screens.Upload}
            options={{title: 'Upload Food Image'}}
          />
          <Stack.Screen
            name="Preview"
            component={screens.Preview}
            options={{title: 'Preview'}}
          />
          <Stack.Screen
            name="Result"
            component={screens.Result}
            options={{title: 'Analysis Result'}}
          />
        </Stack.Navigator>
      </Suspense>
    </NavigationContainer>
  );
};

export default Navigation;