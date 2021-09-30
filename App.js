import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";
import SignupEmail from "./components/SignupEmail/SignupEmail.js";
import SignupPassword from "./components/SignupPassword/SignupPassword.js";
import LandingPage from "./components/LandingPage/LandingPage.js";
import Home from "./components/Home/Home.js";
import Camera from "./components/Camera/Camera.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { setCustomText } from "react-native-global-props";
import { useFonts } from "expo-font";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true,
                }}
                initialRouteName="Landing Page"
            >
                {/** DAVY */}
                <Stack.Screen
                    name="Signup Email"
                    options={{ header: () => null }}
                    component={SignupEmail}
                />
                {/** REY */}
                <Stack.Screen
                    name="Signup Password"
                    options={{ header: () => null }}
                    component={SignupPassword}
                />
                <Stack.Screen
                    name="Landing Page"
                    options={{ header: () => null }}
                    component={LandingPage}
                />
                <Stack.Screen
                    name="Login"
                    options={{ header: () => null }}
                    component={Login}
                />
                <Stack.Screen
                    name="Signup"
                    options={{ header: () => null }}
                    component={Signup}
                />
                <Stack.Screen
                    name="Home"
                    options={{ header: () => null }}
                    component={Home}
                />
                <Stack.Screen
                    name="Camera"
                    options={{
                        headerTransparent: true,
                        headerTitleStyle: styles.headerTextStyle,
                        headerTitle: "Scan BizCard",
                    }}
                    component={Camera}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center",
    },

    headerTextStyle: {
        color: "#000",
    },
});
