import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const MessagesScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Messages</Text>
      {/* List of messages would go here */}
      <Button title="Send New Message" onPress={() => { /* Sending logic */ }} />
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

export default MessagesScreen;