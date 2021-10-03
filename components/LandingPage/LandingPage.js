import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

const LandingPage = (props) => {
    const { navigation } = props;

    const [loaded] = useFonts({
        Regular: require("../../assets/fonts/SF-Pro-Display-Regular.otf"),
        Semibold: require("../../assets/fonts/SF-Pro-Display-Semibold.otf"),
        Bold: require("../../assets/fonts/SF-Pro-Display-Bold.otf"),
        Medium: require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
    });

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("../../assets/Avatar.png")} />
            </View>
            <Text style={styles.text}>Welcome To BizCards</Text>
            <View style={styles.subTextView}>
                <Text style={styles.subText}>
                    The new and innovative way to save and share business cards.
                </Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => navigation.navigate("Signup Email")}
                >
                    <Text style={styles.loginText}>Get Started</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => navigation.navigate("Camera")}
                >
                    <Text style={styles.loginText}>USE CAMERA(DEV)</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{ color: "#FFFFFF", marginTop: "4%" }}>
                        Already have an account? Log In
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        marginBottom: "25%"
    },

    container: {
        flex: 1,
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "30%",
    },

    subTextView: {
        marginTop: "12%",
        width: "70%",
    },

    text: {
        color: "rgb(255,255,255)",
        fontFamily: "Bold",
        fontSize: 28,
        fontWeight: "bold",
    },

    subText: {
        color: "#AEAEB2",
        fontFamily: "Medium",
        fontSize: 16,
        textAlign: "center",
    },

    loginText: {
        fontFamily: "Semibold",
        fontSize: 17,
    },

    btnContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        marginBottom: "15%",
        alignItems: "center",
    },

    loginBtn: {
        width: "80%",
        borderRadius: 20,
        fontFamily: "Regular",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FFFFFF",
    },
});

export default LandingPage;
