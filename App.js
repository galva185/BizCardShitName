import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";
import LandingPage from "./components/LandingPage/LandingPage.js";
import Home from "./components/Home/Home.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="Landing Page"
            >
                <Stack.Screen name="Landing Page" component={LandingPage} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>

            {/** 
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="Landing Page"
            >
                <Tab.Screen name="Landing Page" component={LandingPage} />
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="Signup" component={Signup} />
            </Tab.Navigator>
            */}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
