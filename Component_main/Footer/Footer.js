import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Home from './FooterImg/Home.png';
import Search from './FooterImg/Search.png';
import New from './FooterImg/New.png';
import Heart from './FooterImg/Heart.png';
import Mypage from './FooterImg/Mypage.png';

export default function Footer() {
    return (
        <View style={footer_style.footerContainer}>
            <TouchableOpacity
                style={footer_style.footerIconBox}
            >
                <Image
                    style={footer_style.footerIconImg}
                    source={Home}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={footer_style.footerIconBox}
            >
                <Image
                    style={footer_style.footerIconImg}
                    source={Search}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={footer_style.footerIconBox}
            >
                <Image
                    style={footer_style.footerIconImg}
                    source={New}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={footer_style.footerIconBox}
            >
                <Image
                    style={footer_style.footerIconImg}
                    source={Heart}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={footer_style.footerIconBox}
            >
                <Image
                    style={footer_style.footerIconImg}
                    source={Mypage}
                />
            </TouchableOpacity>
        </View>
    )
}

const footer_style = StyleSheet.create({
    footerContainer : {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#141414",
    },
    footerIconBox: {
        justifyContent: "center",
        alignItems: "center",
        width: 30,
        height: 55,
    },
    footerIconImg: {
        resizeMode: "contain",
        width: "100%",
        height: "100%",
    },
})