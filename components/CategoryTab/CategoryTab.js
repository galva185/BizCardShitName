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

    return (
        <View style={{ flex: 1 }}>
            <ScrollView horizontal style={styles.categoryTabView}>
                {testArray.map((test) => (
                    <TouchableOpacity key={test} style={styles.btn}>
                        <Text style={styles.categoryTab}>{test}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryTabView: {
        backgroundColor: "#ABABAB",
        padding: "3%",
    },

    categoryTab: {
        color: "#000",
        fontFamily: "Medium",
        fontSize: 14,
    },

    btn: {
        marginRight: 10,
        padding: "5%",
        paddingHorizontal: "11%",
        borderRadius: 10,
        backgroundColor: "#FFF",
        marginBottom: "50%",
    },
});

export default CategoryTab;
