import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🍽️ FoodAI Mobile</Text>
        <Text style={styles.subtitle}>React Native 0.82 + React 19.1.1</Text>
        <Text style={styles.description}>
          Welcome to the latest React Native with New Architecture!
        </Text>

        <View style={styles.features}>
          <Text style={styles.featureTitle}>✨ Latest Features:</Text>
          <Text style={styles.feature}>• React 19.1.1 support</Text>
          <Text style={styles.feature}>• New Architecture only</Text>
          <Text style={styles.feature}>• Hermes V1 (experimental)</Text>
          <Text style={styles.feature}>• DOM Node APIs</Text>
          <Text style={styles.feature}>• Performance improvements</Text>
        </View>
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  features: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  feature: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    paddingLeft: 10,
  },
});

export default App;