import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button title="Change Password" onPress={() => { /* Change password logic */ }} />
      <Button title="Notification Preferences" onPress={() => { /* Notifications logic */ }} />
      <Button title="Log Out" onPress={() => navigation.navigate('Home')} />
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

export default SettingsScreen;