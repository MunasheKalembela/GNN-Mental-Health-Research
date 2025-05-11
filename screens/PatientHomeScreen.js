import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const therapists = [
  { id: '1', name: 'Dr. Smith', specialty: 'Cognitive Behavioral Therapy' },
  { id: '2', name: 'Dr. Johnson', specialty: 'Family Therapy' },
  // Add more therapists as needed
];

const PatientHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended Therapists</Text>
      <FlatList
        data={therapists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.therapistCard}>
            <Text style={styles.therapistName}>{item.name}</Text>
            <Text style={styles.therapistSpecialty}>{item.specialty}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('TherapistDetail', { therapist: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  therapistCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 2,
  },
  therapistName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  therapistSpecialty: {
    fontSize: 14,
    color: '#777',
  },
});

export default PatientHomeScreen;