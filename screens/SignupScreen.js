import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('patient');

  const handleSignup = () => {
    // Implement signup logic here
    console.log(`Signing up as ${userType}:`, { email, password });
    // Navigate to login or home page after signup
    navigation.navigate('Login', { userType });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

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

      <Text style={styles.label}>I am a:</Text>
      <Picker
        selectedValue={userType}
        style={styles.picker}
        onValueChange={(itemValue) => setUserType(itemValue)}
      >
        <Picker.Item label="Patient" value="patient" />
        <Picker.Item label="Therapist" value="therapist" />
      </Picker>

      <Button title="Sign Up" onPress={handleSignup} />
      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate('Login')}
        >
          Login
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
  label: {
    marginBottom: 10,
    textAlign: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
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

export default SignupScreen;