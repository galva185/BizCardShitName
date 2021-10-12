import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
} from "react-native";
import { useFonts } from "expo-font";

const Card = (props) => {
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
        <View style={styles.cardView}>
            <Image
                style={styles.cardImage}
                source={require("../../assets/Avatar.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    cardView: {
        marginBottom: 10,
        backgroundColor: "#c4c4c4",
        marginRight: 23,
        borderRadius: 10,
        height: 175,
        marginLeft: 23,
    },

    cardText: {
        color: "#000",
        fontFamily: "Medium",
        fontSize: 14,
    },

    cardImage: {
        maxHeight: "100%",
        maxWidth: "100%",
    },
});

export default Card;
