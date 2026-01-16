import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../features/foodAnalysis/screens/HomeScreen';
import {UploadScreen} from '../features/foodAnalysis/screens/UploadScreen';
import {PreviewScreen} from '../features/foodAnalysis/screens/PreviewScreen';
import {ResultScreen} from '../features/foodAnalysis/screens/ResultScreen';

export type RootStackParamList = {
  Home: undefined;
  Upload: undefined;
  Preview: {imageUri: string};
  Result: {result: any};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4CAF50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'FoodAI Mobile'}}
        />
        <Stack.Screen
          name="Upload"
          component={UploadScreen}
          options={{title: 'Upload Food Image'}}
        />
        <Stack.Screen
          name="Preview"
          component={PreviewScreen}
          options={{title: 'Preview'}}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{title: 'Analysis Result'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;