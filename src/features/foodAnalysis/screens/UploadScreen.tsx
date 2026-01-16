import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../app/Navigation';

type UploadScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Upload'
>;

export const UploadScreen: React.FC = () => {
  const navigation = useNavigation<UploadScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>📸 Upload Food Image</Text>
        <Text style={styles.subtitle}>
          Take a photo or select from gallery
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Simulate image selection
            console.log('Camera button pressed');
            // For now, navigate to preview with a placeholder
            navigation.navigate('Preview', {
              imageUri: 'https://via.placeholder.com/300x300?text=Food+Image',
            });
          }}>
          <Text style={styles.buttonText}>📷 Open Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Simulate image selection
            console.log('Gallery button pressed');
            // For now, navigate to preview with a placeholder
            navigation.navigate('Preview', {
              imageUri: 'https://via.placeholder.com/300x300?text=Food+Image',
            });
          }}>
          <Text style={styles.buttonText}>🖼️ Select from Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Back to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#666',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: 'bold',
  },
});