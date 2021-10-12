import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BarCodeScanner } from "expo-barcode-scanner";

const Camera = (props) => {
    const { navigation } = props;

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    const [loaded] = useFonts({
        Regular: require("../../assets/fonts/SF-Pro-Display-Regular.otf"),
        Semibold: require("../../assets/fonts/SF-Pro-Display-Semibold.otf"),
        Bold: require("../../assets/fonts/SF-Pro-Display-Bold.otf"),
        Medium: require("../../assets/fonts/SF-Pro-Display-Medium.otf"),
    });

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.backButton}>
                    <Ionicons name="close" size="20" color="white" />
                </TouchableOpacity>
                <Text style={styles.cameraHeader}>Scan QR Code</Text>
            </View>
            {scanned && (
                <Button
                    title={"Tap to Scan Again"}
                    onPress={() => setScanned(false)}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        marginBottom: "25%",
    },

    container: {
        flex: 1,
        backgroundColor: "#0D1120",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "30%",
    },

    subTextView: {
        marginTop: "12%",
        width: "70%",
    },

    buttonView: {
        width: "100%",
        flexDirection: "row",
        marginTop: "-125%",
    },

    backButton: {
        borderRadius: 100,
        padding: 10,
        color: "#000",
        backgroundColor: "#0247FB",
        fontSize: 100,
        marginLeft: "8%",
    },

    cameraHeader: {
        marginLeft: "8%",
        fontSize: 28,
        fontFamily: "Bold",
        color: "#ABB1C8",
    },

    text: {
        color: "rgb(255,255,255)",
        fontFamily: "Bold",
        fontSize: 28,
        fontWeight: "bold",
    },

    subText: {
        color: "#AEAEB2",
        fontFamily: "Medium",
        fontSize: 16,
        textAlign: "center",
    },

    loginText: {
        fontFamily: "Semibold",
        fontSize: 17,
    },

    btnContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        marginBottom: "15%",
        alignItems: "center",
    },

    loginBtn: {
        width: "80%",
        borderRadius: 20,
        fontFamily: "Regular",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FFFFFF",
    },
});

export default Camera;
