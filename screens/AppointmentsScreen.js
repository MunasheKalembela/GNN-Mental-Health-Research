import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const AppointmentsScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Appointments</Text>
      {/* List of appointments would go here */}
      <Button title="Schedule New Appointment" onPress={() => { /* Scheduling logic */ }} />
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

export default AppointmentsScreen;