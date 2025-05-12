import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const TherapistHome = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Therapist Home</Text>
      <Button title="View Appointments" onPress={() => navigation.navigate('Appointments')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Messages" onPress={() => navigation.navigate('Messages')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default TherapistHome;