import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
    NavigationContainer,
    CommonActions,
    StackActions,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//remove these imports when other pages are made succesfully
import Signup from "../Signup/Signup.js";
import LandingPage from "../LandingPage/LandingPage.js";
import Login from "../Login/Login.js";

function HomePage(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.TextInput}>CARDS</Text>
            <Text>Your new </Text>
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => navigation.navigate("Signup")}
            >
                <Text style={styles.loginText}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
    );
}

const Tab = createBottomTabNavigator();

const Home = (props) => {
    const { navigation } = props;

    const handlePress = () => {};

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Home Page"
        >
            <Tab.Screen name="Home Page" component={HomePage} />
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Signup" component={Signup} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3A3A3C",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
        resizeMode: "contain",
        width: "40%",
    },

    inputView: {
        backgroundColor: "#eee",
        borderRadius: 8,
        width: "80%",
        height: 60,
        marginBottom: 20,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingLeft: "5%",
    },

    TextInput: {
        color: "rgb(255,255,255)",
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 8,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#21b58b",
    },
});

export default Home;
