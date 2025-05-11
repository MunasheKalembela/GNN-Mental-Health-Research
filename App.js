import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import TherapistDetailScreen from './screens/TherapistDetailScreen';
import PatientHomeScreen from './screens/PatientHomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="TherapistDetail" component={TherapistDetailScreen} />
        <Stack.Screen name="PatientHome" component={PatientHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;