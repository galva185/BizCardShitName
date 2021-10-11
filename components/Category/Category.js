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

export default function Category(props) {
    const { title } = props;
    return (
        <View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.categoryTab}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

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
