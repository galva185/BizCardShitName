import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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

const SignupEmail = (props) => {
  const { navigation } = props;

  const [loaded] = useFonts({
    Regular: require("../../assets/fonts/SF-Pro-Display-Regular.otf"),
    Semibold: require("../../assets/fonts/SF-Pro-Display-Semibold.otf"),
    Bold: require("../../assets/fonts/SF-Pro-Display-Bold.otf"),
    Medium: require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
  });

  const [email, setEmail] = useState("");



  return (
    <KeyboardAwareScrollView
    
    bounces={false}
    contentContainerStyle={styles.container}
    extraHeight={350}>
        <View style={styles.container}>
          <StatusBar style="light" />
          <View>
            <Text style={styles.h1}>What is your email address?</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="rgba(235,235,245,.30)"
                onChangeText={(email) => setEmail(email)}
              />
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.already}>Already have an account</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/** Validate if user entered an email */}
          {email === "" && (
            <TouchableOpacity
              disabled={true}
              onPress={() => navigation.navigate("SignupPassword")}
            >
              <Text style={styles.btn}>Continue</Text>
            </TouchableOpacity>
          )}
          {email != "" && (
            <TouchableOpacity
              onPress={() => navigation.navigate("SignupPassword")}
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
  },
  h1: {
    color: "#AEAEB2",
    fontFamily: "Medium",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 200,
    marginTop: 150,
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
    color: "#FFFFFF",
  },
  already: {
    color: "rgba(0,122,255, 100)",
    fontSize: 14,
    fontFamily: "Bold",
    paddingTop: 25,
    textAlign: "center",
    marginBottom: 200,
  },
  btn: {
    backgroundColor: "rgba(255,255,255,0.2)",
    fontFamily: "Semibold",
    fontSize: 17,
    textAlign: "center",
    paddingVertical: 15,
    paddingHorizontal: 130,
    marginBottom: "10%",
    borderRadius: 20,
    overflow: "hidden",
    width: "100%",
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
    marginBottom: "10%",
    borderRadius: 20,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignupEmail;
