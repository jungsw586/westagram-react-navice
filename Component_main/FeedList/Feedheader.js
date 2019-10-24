import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import moreImg from './FeedImages/moreImage.png';

export default class Feedheader extends Component {
    render() {
        return (
            <View style={feedHeader_style.feedHeaderContainer}>
                <View style={feedHeader_style.feedHeaderContainer}>
                    <Image
                        style={feedHeader_style.feedHeaderProfileImg}
                        source={this.props.writerProfileImg}
                    />
                    <Text
                        style={feedHeader_style.feedHeaderProfileText}
                    >
                        {this.props.writerName}
                    </Text>
                </View>
                <View style={feedHeader_style.feedHeaderContainer}>
                    <Image
                        style={feedHeader_style.feedHeaderMoreImg}
                        source={moreImg}
                    />
                </View>
            </View>
        )
    }
}
const feedHeader_style = StyleSheet.create({
    feedHeaderContainer : {
        padding: 3,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // borderWidth: 1,
        // borderColor: "#fff",
    },
    // feedHeaderContainerRigth: {

    // },
    // feedHeaderContainerLeft: {
    // },
    feedHeaderProfileImg: {
        margin: 5,
        resizeMode: "contain",
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    feedHeaderProfileText: {
        paddingLeft: 5,
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
    },
    feedHeaderMoreImg: {
        resizeMode: "contain",
        marginRight: 15,
        width: 25,
        height: 5,
    },
})