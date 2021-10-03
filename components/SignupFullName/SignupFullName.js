import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { ColorAndroid } from "react-native/Libraries/StyleSheet/PlatformColorValueTypesAndroid";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const SignupPassword = (props) => {
  const { route, navigation } = props;
  const { email, password } = route.params;

  const [loaded] = useFonts({
    Regular: require("../../assets/fonts/SF-Pro-Display-Regular.otf"),
    Semibold: require("../../assets/fonts/SF-Pro-Display-Semibold.otf"),
    Bold: require("../../assets/fonts/SF-Pro-Display-Bold.otf"),
    Medium: require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const refInput2 = useRef()

  const handleSubmit = (e) => {
    if (lastName != "" && firstName != "") {
        navigation.navigate("SignupPhone", {
            email: email,
            password: password,
            firstname: firstName,
            lastname: lastName
        })
    } else {
    }
  };


  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="always"
      scrollEnabled={false}
      bounces={false}
      contentContainerStyle={styles.container}
      keyboardOpeningTime={10}
    >
      <StatusBar style="light" />
      <View style={styles.main}>
        <View>
          <View>
            <Text style={styles.h1}>What is your full name?</Text>
          </View>
          <View>
            <TextInput
            onSubmitEditing={() => { refInput2.current.focus(); }}
            blurOnSubmit={false}
              keyboardAppearance="dark"
              autoCompleteType="off"
              autoCorrect={false}
              autoFocus={true}
              enablesReturnKeyAutomatically={true}
              returnKeyType="next"
              returnKeyLabel="continue"
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="rgba(235,235,245,.30)"
              onChangeText={(firstName) => setFirstName(firstName)}
            />
            <TextInput
            ref={refInput2}
            keyboardAppearance="dark"
              autoCompleteType="off"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              returnKeyType="next"
              returnKeyLabel="continue"
              onSubmitEditing={() => handleSubmit()}
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="rgba(235,235,245,.30)"
              onChangeText={(lastName) => setLastName(lastName)}
            />
          </View>
        </View>

        {/** Validate if user entered an password */}
        {!(firstName != '' && lastName != '') && (
          <TouchableOpacity
            disabled={true}
            onPress={() => navigation.navigate("SignupPhone")}
          >
            <Text style={styles.btn}>Continue</Text>
          </TouchableOpacity>
        )}

        {firstName != '' && lastName != '' && (
          <TouchableOpacity
            onPress={() => navigation.navigate("SignupPhone", {
                email: email,
                password: password,
                firstname: firstName,
                lastname: lastName
            })}
          >
            <Text style={styles.btnActive}>Continue</Text>
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
      },
      main: {
        backgroundColor: "#000000",
        alignItems: "center",
        width: "100%",
      },
      h1: {
        color: "#AEAEB2",
        fontFamily: "Medium",
        fontSize: 24,
        textAlign: "center",
        marginTop: -180,
        paddingHorizontal: 20
      },
      input: {
        width: "100%",
        fontFamily: "Medium",
        fontSize: 17,
        borderStyle: "solid",
        borderWidth: 0.5,
        borderBottomColor: "rgba(84,84,88,.65)",
        paddingLeft: 10,
        paddingBottom: 10,
        paddingTop: 10,
        marginBottom: 10,
        color: "#FFFFFF",
      },
      already: {
        color: "rgba(0,122,255, 100)",
        fontSize: 14,
        fontFamily: "Bold",
        paddingTop: 20,
        paddingBottom: 15,
        marginBottom: 15,
        textAlign: "center",
      },
      btn: {
        backgroundColor: "rgba(255,255,255,0.2)",
        fontFamily: "Semibold",
        fontSize: 17,
        textAlign: "center",
        paddingVertical: 15,
        paddingHorizontal: 130,
        borderRadius: 20,
        overflow: "hidden",
        width: "100%",
        marginTop: 65
      },
      btncontainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
      },
      btnActive: {
        backgroundColor: "rgba(255,255,255,100)",
        fontFamily: "Semibold",
        fontSize: 17,
        textAlign: "center",
        paddingVertical: 15,
        paddingHorizontal: 130,
        borderRadius: 20,
        overflow: "hidden",
        width: "100%",
        marginTop: 65
      },
});

export default SignupPassword;
