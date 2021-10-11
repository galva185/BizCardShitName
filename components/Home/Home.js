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
import { useFonts } from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//remove these imports when other pages are made succesfully
import Signup from "../Signup/Signup.js";
import LandingPage from "../LandingPage/LandingPage.js";
import Login from "../Login/Login.js";
import CategoryTab from "../CategoryTab/CategoryTab.js";
import Card from "../Card/Card.js";

function HomePage(props) {
    const { route, navigation } = props;
    const { firstname } = route.params;
    console.log(firstname + "fnwoefinb");

    const [loaded] = useFonts({
        Regular: require("../../assets/fonts/SF-Pro-Display-Regular.otf"),
        Semibold: require("../../assets/fonts/SF-Pro-Display-Semibold.otf"),
        Bold: require("../../assets/fonts/SF-Pro-Display-Bold.otf"),
        Medium: require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
    });

    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps="always"
            scrollEnabled={true}
            bounces={false}
            contentContainerStyle={styles.container}
        >
            <StatusBar style="light" />
            <View style={styles.helloTextView}>
                <Text style={styles.helloText}>Hello {firstname}!</Text>
            </View>
            <View style={styles.exploreTextView}>
                <Text style={styles.exploreText}>Explore your cards</Text>
            </View>
            <View style={styles.searchBarView}>
                <Icon
                    style={styles.searchIcon}
                    name="search"
                    size={20}
                    color="#FFF"
                />
                <TextInput
                    keyboardAppearance="dark"
                    autoCompleteType="off"
                    autoCorrect={false}
                    secureTextEntry={true}
                    style={styles.searchBar}
                    onSubmitEditing={() => handleSubmit()}
                    placeholder="Search Categories"
                    placeholderTextColor="rgba(235,235,245,.30)"
                    onChangeText={(password2) => setPassword2(password2)}
                />
            </View>
            {/**        //Cannot figure out the horizontal scroll
            <View style={styles.categoryContainer}>
                <CategoryTab />
            </View>
             */}
            <Card />
        </KeyboardAwareScrollView>
    );
}

const Tab = createBottomTabNavigator();

const Home = (props) => {
    const { route, navigation } = props;
    const { email, firstname } = route.params;

    const handlePress = () => {};

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home Page") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Login") {
                        iconName = focused ? "log-in" : "log-in-outline";
                    } else if (route.name === "Signup") {
                        iconName = focused ? "person" : "person-outline";
                    }
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white",
                tabBarStyle: { backgroundColor: "#000" },
            })}
            initialRouteName="Home Page"
        >
            <Tab.Screen
                name="Home Page"
                component={HomePage}
                initialParams={{ firstname: firstname }}
                options={({ route }) => ({
                    tabBarShowLabel: false,
                })}
            />
            <Tab.Screen
                name="Login"
                component={Login}
                options={({ route }) => ({
                    tabBarShowLabel: false,
                })}
            />
            <Tab.Screen
                name="Signup"
                component={Signup}
                options={({ route }) => ({
                    tabBarShowLabel: false,
                })}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        alignItems: "center",
    },

    helloTextView: {
        marginTop: "25%",
        marginLeft: "12%",
        width: "100%",
        justifyContent: "flex-start",
    },

    exploreTextView: {
        marginTop: "5%",
        marginLeft: "12%",
        width: "100%",
        justifyContent: "flex-start",
    },

    helloText: {
        color: "#FFF",
        fontSize: 16,
        fontFamily: "Medium",
    },

    categoryContainer: {
        marginTop: "4%",
        marginLeft: "12%",
        marginRight: "12%",
        padding: "0%",
        width: "88%",
        backgroundColor: "#ABABAB",
        height: "9%",
        flex: 1,
        flexDirection: "row",
    },

    exploreText: {
        color: "rgb(255,255,255)",
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: "Bold",
    },

    searchBarView: {
        marginTop: "15%",
        marginLeft: "12%",
        marginRight: "12%",
        padding: "4%",
        width: "88%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(54, 54, 54, .8)",
        borderRadius: 10,
    },

    searchBar: {
        width: "100%",
    },

    searchIcon: {
        paddingRight: 10,
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
