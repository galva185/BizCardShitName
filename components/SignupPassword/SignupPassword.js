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
    const { email } = route.params;

    const [loaded] = useFonts({
        Regular: require("../../assets/fonts/SF-Pro-Display-Regular.otf"),
        Semibold: require("../../assets/fonts/SF-Pro-Display-Semibold.otf"),
        Bold: require("../../assets/fonts/SF-Pro-Display-Bold.otf"),
        Medium: require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
    });

    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const refInput2 = useRef();

    const handleSubmit = () => {
        if (password === password2 && password2 != "") {
            navigation.navigate("Signup FullName", {
                email: email,
                password: password,
            });
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
                        <Text style={styles.h1}>What is your password?</Text>
                    </View>
                    <View>
                        <TextInput
                            keyboardAppearance="dark"
                            autoCompleteType="off"
                            autoCorrect={false}
                            secureTextEntry={true}
                            autoFocus={true}
                            style={styles.input}
                            onSubmitEditing={() => {
                                refInput2.current.focus();
                            }}
                            placeholder="Password"
                            placeholderTextColor="rgba(235,235,245,.30)"
                            onChangeText={(password) => setPassword(password)}
                        />
                        <TextInput
                            ref={refInput2}
                            keyboardAppearance="dark"
                            autoCompleteType="off"
                            autoCorrect={false}
                            secureTextEntry={true}
                            style={styles.input}
                            onSubmitEditing={() => handleSubmit()}
                            placeholder="Confirm Password"
                            placeholderTextColor="rgba(235,235,245,.30)"
                            onChangeText={(password2) =>
                                setPassword2(password2)
                            }
                        />
                    </View>
                </View>

                {/** Validate if user entered an password */}
                {(password != password2 ||
                    (password === "" && password2 === "")) && (
                    <TouchableOpacity
                        disabled={true}
                        onPress={() => navigation.navigate("Signup FullName")}
                    >
                        <Text style={styles.btn}>Continue</Text>
                    </TouchableOpacity>
                )}

                {password === password2 && password2 != "" && (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Signup FullName", {
                                email: email,
                                password: password,
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
        backgroundColor: "#0D1120",
        alignItems: "center",
        width: "100%",
    },
    h1: {
        color: "#AEAEB2",
        fontFamily: "Medium",
        fontSize: 24,
        textAlign: "center",
        marginTop: -180,
        paddingHorizontal: 20,
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
        marginTop: 65,
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
        marginTop: 65,
    },
});

export default SignupPassword;
