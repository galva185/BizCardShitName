import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  NavigationContainer,
  CommonActions,
  StackActions,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../contexts/AuthContext';
const axios = require('axios');

const Signup = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [userpassword, setPassword] = useState('');
  const [firstname, setFirstName] = useState(null);
  const [lastname, setLastName] = useState(null);
  const [username, setUsername] = useState(null);
  const [password2, setPassword2] = useState('');

  const { signup } = useAuth();

  const handlePress = (event) => {
    console.log(email);
    if (userpassword === password2) {
      axios({
        method: 'post',
        url: 'https://business-card-backend-qkym9.ondigitalocean.app/createuser',
        data: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          userpassword: userpassword,
          username: username,
        },
      })
        .then(function (response) {
          console.log(response.request);
          navigation.navigate('AddBook');
        })
        .catch(function (error) {
          if (error.response) {
            // Request made and server responded
            if (error.response.data === 'Username is taken') {
              setUsernameError(true);
            } else if (error.response.data === 'Email is taken') {
              setEmailError(true);
            }
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
        });
    } else {
      setPasswordError(true);
    }
    setEmail(null);
    setPassword('');
    setPassword2('');
    setFirstName('');
    setLastName('');
    setUsername('');
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          autoCorrect={false}
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          autoCorrect={false}
          onChangeText={(firstName) => setFirstName(firstName)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          autoCorrect={false}
          onChangeText={(lastName) => setLastName(lastName)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          autoCompleteType="email"
          keyboardType="email-address"
          autoCorrect={false}
          textContentType="emailAddress"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Retype Password"
          placeholderTextColor="#003f5c"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(password2) => setPassword2(password2)}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.forgot_button}>
          Already have an account? Log In
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          handlePress();
        }}
      >
        <Text style={styles.loginText}>SIGNUP</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 0,
    resizeMode: 'contain',
    width: '40%',
  },

  inputView: {
    backgroundColor: '#eee',
    borderRadius: 8,
    width: '80%',
    height: 60,
    marginBottom: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: '5%',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    color: '#21b58b',
  },

  forgot_button: {
    height: 30,
    marginBottom: 0,
    marginTop: 3,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    backgroundColor: '#21b58b',
  },
});

export default Signup;
