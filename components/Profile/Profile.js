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
import { ScrollView } from "react-native-gesture-handler";

//remove these imports when other pages are made succesfully
import Signup from "../Signup/Signup.js";
import LandingPage from "../LandingPage/LandingPage.js";
import CategoryTab from "../CategoryTab/CategoryTab.js";
import Card from "../Card/Card.js";
import Camera from "../Camera/Camera.js";

function Profile(props) {
    const { route, navigation } = props;
    const { firstname } = route.params;
    const [search, setSearch] = useState("");

    const [loaded] = useFonts({
        Regular: require("../../assets/fonts/SF-Pro-Display-Regular.otf"),
        Semibold: require("../../assets/fonts/SF-Pro-Display-Semibold.otf"),
        Bold: require("../../assets/fonts/SF-Pro-Display-Bold.otf"),
        Medium: require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
    });

    const handleSubmit = () => {};

    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps="always"
            scrollEnabled={true}
            bounces={false}
            contentContainerStyle={styles.container}
        >
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
                    style={styles.searchBar}
                    onSubmitEditing={() => handleSubmit()}
                    placeholder="Search"
                    placeholderTextColor="rgba(235,235,245,.30)"
                    onChangeText={(search) => setSearch(search)}
                />
            </View>
            <View style={{ height: "5%", marginTop: 17, width: "88%" }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View
                        style={{
                            height: "100%",
                            width: "80%",
                            flexDirection: "row",
                            marginLeft: 0,
                        }}
                    >
                        <CategoryTab />
                    </View>
                </ScrollView>
            </View>
            <View style={{ marginTop: 12, height: "60%", width: "100%" }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ScrollView>
            </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        alignItems: "center",
    },

    helloTextView: {
        marginTop: "20%",
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
    btn: {
        backgroundColor: "#fff",
        borderRadius: 10,
        justifyContent: "center",
        marginRight: 10,
    },
    categoryTab: {
        color: "#000",
        fontFamily: "Medium",
        fontSize: 14,
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
        marginTop: "7%",
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
        color: "#fff",
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

export default Profile;
