import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ route, navigation }) => {
  const { userType } = route.params;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Logging in as ${userType}:`, { email, password });
    if (userType === 'patient') {
      navigation.navigate('PatientHome'); // Navigate to PatientHomeScreen
    } else {
      navigation.navigate('TherapistHome'); // Replace with actual therapist home screen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login as {userType === 'patient' ? 'Patient' : 'Therapist'}</Text>
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
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.signupText}>
        Don't have an account?{' '}
        <Text
          style={styles.signupLink}
          onPress={() => navigation.navigate('Signup')}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
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

export default LoginScreen;