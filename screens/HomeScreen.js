import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>GoTherapy</Text>
      <Text style={styles.slogan}>Your mental wellness companion</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Sign In as Patient"
          onPress={() => navigation.navigate('Login', { userType: 'patient' })}
          color="#4CAF50"
        />
        <Button
          title="Sign In as Therapist"
          onPress={() => navigation.navigate('Login', { userType: 'therapist' })}
          color="#2196F3"
        />
      </View>

      <Text style={styles.signupText}>
        If you do not have an account,{' '}
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  slogan: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
  },
  buttonContainer: {
    width: '100%', // Full width
    marginBottom: 20,
  },
  signupText: {
    textAlign: 'center',
    marginTop: 20,
  },
  signupLink: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
});

export default HomeScreen;