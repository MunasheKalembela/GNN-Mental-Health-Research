import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const TherapistDetail = ({ route }) => {
  const { therapist } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{therapist.name}</Text>
      <Text style={styles.specialty}>{therapist.specialty}</Text>
      <Button title="Book Appointment" onPress={() => { /* Booking logic */ }} />
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
    fontSize: 28,
    marginBottom: 10,
    textAlign: 'center',
  },
  specialty: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default TherapistDetail;