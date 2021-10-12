import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
const axios = require("axios");
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
    const { route, navigation } = props;
    let { email, password, firstname, lastname } = route.params;

    email = String(email);
    password = String(password);
    firstname = String(firstname);
    lastname = String(lastname);

    const [loaded] = useFonts({
        Regular: require("../../assets/fonts/SF-Pro-Display-Regular.otf"),
        Semibold: require("../../assets/fonts/SF-Pro-Display-Semibold.otf"),
        Bold: require("../../assets/fonts/SF-Pro-Display-Bold.otf"),
        Medium: require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
    });

    const [phoneNumber, setPhoneNumber] = useState("");
    const [accountFailedCreation, setAccountFailedCreation] = useState(false);

    const handleSubmit = (e) => {
        if (phoneNumber != "") {
            console.log(email);
            axios({
                method: "post",
                url: "https://business-card-backend-qkym9.ondigitalocean.app/createuser",
                data: {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    userpassword: password,
                    username: "DavyThebornboZEDGOD2345BIGHAIRegrerg",
                },
            })
                .then(function (response) {
                    if (response.status === 200) {
                        navigation.navigate("AccountCreated", {
                            email: email,
                            password: password,
                            firstname: firstname,
                            lastname: lastname,
                            phonenumber: phoneNumber,
                        });
                    } else {
                        setAccountFailedCreation(true);
                        setPhoneNumber("");
                        console.log(response.status);
                    }
                })
                .catch(function (error) {
                    if (error.response) {
                        // Request made and server responded
                        if (error.response.data === "Username is taken") {
                            setUsernameError(true);
                        } else if (error.response.data === "Email is taken") {
                            setEmailError(true);
                        }
                    } else if (error.request) {
                        // The request was made but no response was received
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log("Error", error.message);
                    }
                });
        } else {
            console.log("No phone number provided");
        }
    };

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
                    <View>
                        <Text style={styles.h1}>
                            What is your phone number?
                        </Text>
                    </View>
                    <View>
                        <TextInput
                            keyboardType="number-pad"
                            autoCompleteType="off"
                            autoCorrect={false}
                            keyboardAppearance="dark"
                            enablesReturnKeyAutomatically={true}
                            returnKeyType="next"
                            returnKeyLabel="continue"
                            onSubmitEditing={() => {
                                handleSubmit();
                            }}
                            autoFocus={true}
                            style={styles.input}
                            placeholder="Phone Number"
                            placeholderTextColor="rgba(235,235,245,.30)"
                            onChangeText={(phoneNumber) =>
                                setPhoneNumber(phoneNumber)
                            }
                        />
                    </View>
                </View>
                {accountFailedCreation && (
                    <View style={styles.accounrErrorView}>
                        <Text style={styles.accountError}>
                            An account with that email already exists.
                        </Text>
                        <Text style={styles.accountError}>
                            Please try a different email.
                        </Text>
                    </View>
                )}
                {!accountFailedCreation && (
                    <View style={styles.accounrErrorView}></View>
                )}

                {/** Validate if user entered an phoneNumber */}
                {phoneNumber === "" && (
                    <TouchableOpacity
                        disabled={true}
                        onPress={() =>
                            navigation.navigate("AccountCreated", {
                                email: email,
                                password: password,
                                firstname: firstname,
                                lastname: lastname,
                                phonenumber: phoneNumber,
                            })
                        }
                    >
                        <Text style={styles.btn}>Continue</Text>
                    </TouchableOpacity>
                )}
                {phoneNumber != "" && (
                    <TouchableOpacity
                        onPress={() => {
                            handleSubmit();
                        }}
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
        backgroundColor: "#0D1120",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    main: {
        backgroundColor: "#0D1120",
        alignItems: "center",
        width: "100%",
    },
    accountError: {
        color: "rgba(255,0,0,.8)",
        fontSize: 13,
        textAlign: "center",
    },
    accounrErrorView: {
        height: 40,
        width: "80%",
    },
    h1: {
        color: "#AEAEB2",
        fontFamily: "Medium",
        fontSize: 24,
        textAlign: "center",
        marginTop: -180,
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
        marginBottom: 90,
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
});

export default SignupEmail;
