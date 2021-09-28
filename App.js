import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login/Login.js'
import Signup from './components/Signup/Signup.js'
import LandingPage from './components/LandingPage/LandingPage.js'

export default function App() {
  return (
      <Signup />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
