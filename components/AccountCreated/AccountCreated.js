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

const AccountCreated = (props) => {
    const { route, navigation } = props;
    const email = "leo@gmail.com";
    const { password } = "password123";
    const firstname = "leo"; //change these back to the curly braces ADIOADBADIB
    const { lastname } = "pants";
    const { phonenumber } = "786506";
    //const { email, password, firstname, lastname, phonenumber } = route.params;
    console.log(email);

    const [loaded] = useFonts({
        Regular: require("../../assets/fonts/SF-Pro-Display-Regular.otf"),
        Semibold: require("../../assets/fonts/SF-Pro-Display-Semibold.otf"),
        Bold: require("../../assets/fonts/SF-Pro-Display-Bold.otf"),
        Medium: require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
    });

    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps="always"
            scrollEnabled={false}
            bounces={false}
            contentContainerStyle={styles.container}
        >
            <StatusBar style="light" />
            <View style={styles.main}>
                <View>
                    <View style={styles.imageContainer}>
                        <Image source={require("../../assets/Avatar.png")} />
                    </View>
                    <View>
                        <Text style={styles.h1}>
                            Congratulations {firstname}!
                        </Text>
                    </View>
                    <View style={styles.subtextview}>
                        <Text style={styles.subtext}>
                            You have successfully created your account, press
                            continue to access your BizCards.
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("Home", {
                            email: email,
                            password: password,
                            firstname: firstname,
                            lastname: lastname,
                            phonenumber: phonenumber,
                        })
                    }
                >
                    <Text style={styles.btnActive}>Continue</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D1120",
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
        color: "#fff",
        fontFamily: "Bold",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        marginTop: "40%",
        paddingHorizontal: 10,
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
        marginBottom: 125,
        color: "#FFFFFF",
    },
    already: {
        color: "rgba(0,122,255, 100)",
        fontSize: 14,
        fontFamily: "Bold",
        paddingTop: 20,
        paddingBottom: 15,
        marginBottom: 70,
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
    },
    subtext: {
        color: "rgba(174,174,178,1.0)",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "500",
        fontFamily: "Bold",
    },
    subtextview: {
        marginBottom: "50%",
        marginTop: "10%",
        width: "80%",
        textAlign: "center",
        alignContent: "center",
    },
    imageContainer: {
        marginTop: "25%",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
});

export default AccountCreated;
