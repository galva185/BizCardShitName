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

const LandingPage = (props) => {
    const { navigation } = props;

    const handlePress = () => {
    };


    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <Text style={styles.TextInput} >
                CARDS
            </Text>
            <Text>Your new </Text>
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => navigation.navigate("AddBook")}
            >
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => navigation.navigate("AddBook")}
            >
                <Text style={styles.loginText}>SIGN UP</Text>
            </TouchableOpacity>
            
        </KeyboardAwareScrollView>


    )    
}

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

export default LandingPage

