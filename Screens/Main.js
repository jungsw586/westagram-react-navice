import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Header from '../Component_main/Header/Header';
import FeedList from '../Component_main/FeedList/FeedList';
import Footer from '../Component_main/Footer/Footer';

export default function Main() {
    return (
        <View style={main_style.mainContainer}>
            <Header />
            <FeedList />
            <Footer />
        </View>
    )
}

const main_style = StyleSheet.create({
    mainContainer: {
        width: "100%",
        paddingTop : 20,
        flexDirection: "column",
        justifyContent: "center",
    }
})