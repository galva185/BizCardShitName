import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
const axios = require("axios");

const CategoryTab = (props) => {
    const [loaded] = useFonts({
        Regular: require("../../assets/fonts/SF-Pro-Display-Regular.otf"),
        Semibold: require("../../assets/fonts/SF-Pro-Display-Semibold.otf"),
        Bold: require("../../assets/fonts/SF-Pro-Display-Bold.otf"),
        Medium: require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
    });

    const [activeCategory, setActiveCategory] = useState("");

    const userId = 1;

    const categoryArray = [
        "Contruction",
        "Law",
        "Electrician",
        "Plumber",
        "Painter",
    ];

    useEffect(() => {
        axios({
            method: "get",
            url: "https://business-card-backend-qkym9.ondigitalocean.app/getcards",
            params: {
                id: userId,
            },
            //need the query strings i believe
        })
            .then(function (response) {
                categories = response.data;
                categories.forEach((category) =>
                    categoryArray.append(category)
                );
                //ADD EVERY CATEGORY TO THE CATEGORY ARRAY TO DISPLAY IN HORIZONTAL SCROLL
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
    });

    const handlePress = (item) => {
        if (activeCategory === item) {
            setActiveCategory("");
        } else {
            setActiveCategory(item);
        }
    };

    return (
        <View style={{ height: "100%", flexDirection: "row" }}>
            {categoryArray.map((item) => {
                return activeCategory === item ? (
                    <TouchableOpacity
                        key={item}
                        style={styles.btnActive}
                        onPress={() => handlePress(item)}
                    >
                        <Text style={styles.categoryTab}>{item}</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        key={item}
                        style={styles.btn}
                        onPress={() => handlePress(item)}
                    >
                        <Text style={styles.categoryTab}>{item}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    categoryTabView: {
        backgroundColor: "#0247FB",
        padding: 5,
    },

    categoryTab: {
        color: "#FFF",
        fontFamily: "Medium",
        fontSize: 14,
    },

    btn: {
        marginRight: 15,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        backgroundColor: "#212F46",
    },

    btnActive: {
        marginRight: 15,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        backgroundColor: "#0247FB",
    },
});

export default CategoryTab;
