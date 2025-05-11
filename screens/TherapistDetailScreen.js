import React from 'react';
import { View, Text } from 'react-native';

const TherapistDetailScreen = ({ route }) => {
  const { therapist } = route.params;

  return (
    <View>
      <Text>Name: {therapist.name}</Text>
      <Text>Specialty: {therapist.specialty}</Text>
      {/* Add more details as necessary */}
    </View>
  );
};

export default TherapistDetailScreen;