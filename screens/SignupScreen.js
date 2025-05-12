import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('patient'); // Default to patient

  const handleSignUp = () => {
    console.log(`Signing up as ${userType}:`, { name, email, password });
    // Add sign-up logic here (e.g., API call)
    navigation.navigate(userType === 'patient' ? 'PatientHome' : 'TherapistHome');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.userTypeContainer}>
        <Button
          title="Sign Up as Patient"
          onPress={() => setUserType('patient')}
          color={userType === 'patient' ? '#4CAF50' : '#ccc'}
        />
        <Button
          title="Sign Up as Therapist"
          onPress={() => setUserType('therapist')}
          color={userType === 'therapist' ? '#2196F3' : '#ccc'}
        />
      </View>
      <Button title="Create Account" onPress={handleSignUp} />

      <Text style={styles.loginText}>
        Already have an account?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Login', { userType })}>
          <Text style={styles.loginLink}>Log In</Text>
        </TouchableOpacity>
      </Text>
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
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '100%', // Full width
  },
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  loginText: {
    textAlign: 'center',
    marginTop: 20,
  },
  loginLink: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;