import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import camera from './HeaderImg/camera.png';
import instagramTextLogo from './HeaderImg/instagramTextLogo.png';  
import send from './HeaderImg/send.png';

export default function Header() {
    return (
        <View style={header_style.headerContainer}>
            <View style={header_style.imgContainer}>
                <Image
                    style={header_style.headerimg}
                    source={camera}
                />
            </View>
            <View style={header_style.textLogoContainer}>
                <Image
                    style={header_style.headerTextLogo}
                    source={instagramTextLogo}
                />
            </View>
            <View style={header_style.imgContainer}>
                <Image
                    style={header_style.headerimg}
                    source={send}
                />
            </View>
        </View>
    )
}

const header_style = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#141414",
        paddingVertical: 5,
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 60,
        justifyContent: "space-between",
    },
    imgContainer: {
        width: 30,
        height: 30,
        justifyContent: "center",
    },
    textLogoContainer: {
        width: "40%",
        height: "100%",
        justifyContent: "center",
    },
    headerTextLogo: {
        resizeMode: "contain",
        width: "100%",
        height: "100%",
    },
    headerimg: {
        resizeMode: "contain",
        width: "100%",
        height: "100%",
    },
  })