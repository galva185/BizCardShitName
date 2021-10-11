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
import Category from "../Category/Category.js";

const CategoryTab = (props) => {
    const [loaded] = useFonts({
        Regular: require("../../assets/fonts/SF-Pro-Display-Regular.otf"),
        Semibold: require("../../assets/fonts/SF-Pro-Display-Semibold.otf"),
        Bold: require("../../assets/fonts/SF-Pro-Display-Bold.otf"),
        Medium: require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
    });

    const testArray = [
        "Contruction",
        "Law",
        "Electrician",
        "Plumber",
        "Painter",
    ];

    /**
     *  {testArray.map((test) => (
                <TouchableOpacity key={test} style={styles.btn}>
                    <Text style={styles.categoryTab}>{test}</Text>
                </TouchableOpacity>
            ))}
     */

    return (
        <View style={{ height: "100%", flexDirection: "row" }}>
            {testArray.map((test) => (
                <TouchableOpacity key={test} style={styles.btn}>
                    <Text style={styles.categoryTab}>{test}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    categoryTabView: {
        backgroundColor: "#ABABAB",
        padding: 5,
    },

    categoryTab: {
        color: "#000",
        fontFamily: "Medium",
        fontSize: 14,
    },

    btn: {
        marginRight: 15,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: "#FFF",
    },
});

export default CategoryTab;
