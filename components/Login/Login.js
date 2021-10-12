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
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";

const Login = (props) => {
    const { navigation } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [failedLogin, setFailedLogin] = useState(false);

    const refInput2 = useRef();

    const [loaded] = useFonts({
        Regular: require("../../assets/fonts/SF-Pro-Display-Regular.otf"),
        Semibold: require("../../assets/fonts/SF-Pro-Display-Semibold.otf"),
        Bold: require("../../assets/fonts/SF-Pro-Display-Bold.otf"),
        Medium: require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
    });

    const handleSubmit = (e) => {
        if (password != "") {
            console.log(email);
            axios({
                method: "post",
                url: "https://business-card-backend-qkym9.ondigitalocean.app/loginuser",
                data: {
                    email: email,
                    userpassword: password,
                },
            })
                .then(function (response) {
                    if (response.status === 200) {
                        navigation.navigate("Home", {
                            email: email,
                            password: password,
                            firstname: firstname,
                            lastname: lastname,
                            phonenumber: phoneNumber,
                        });
                    } else {
                        setFailedLogin(true);
                        setEmail("");
                        setPassword("");
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
            <View style={styles.container}>
                <View>
                    <View>
                        <Text style={styles.h1}>Login</Text>
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            keyboardAppearance="dark"
                            autoCompleteType="off"
                            autoCorrect={false}
                            autoFocus={true}
                            style={styles.input}
                            onSubmitEditing={() => {
                                refInput2.current.focus();
                            }}
                            placeholder="Email"
                            placeholderTextColor="rgba(235,235,245,.30)"
                            onChangeText={(email) => setEmail(email)}
                        />
                        <TextInput
                            ref={refInput2}
                            keyboardAppearance="dark"
                            autoCompleteType="off"
                            autoCorrect={false}
                            secureTextEntry={true}
                            style={styles.input}
                            onSubmitEditing={() => handleSubmit()}
                            placeholder="Password"
                            placeholderTextColor="rgba(235,235,245,.30)"
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                </View>

                {/** Validate if user entered an password */}
                {!(email != "" && password != "") && (
                    <TouchableOpacity
                        disabled={true}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Text style={styles.btn}>Continue</Text>
                    </TouchableOpacity>
                )}

                {email != "" && password != "" && (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Home", {
                                email: email,
                                password: password,
                                firstname: firstName,
                                lastname: lastName,
                            })
                        }
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
        backgroundColor: "#000000",
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
        marginTop: "-80%",
        paddingHorizontal: "30%",
    },
    inputView: {
        marginTop: "-8%",
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
        marginTop: "8%",
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
        marginVertical: 15,
        paddingHorizontal: 130,
        borderRadius: 20,
        overflow: "hidden",
        width: "100%",
        marginTop: "8%",
    },
});

export default Login;
