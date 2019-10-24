import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import HeartLogoImg from './FeedImages/Heart.png';
import CommnetLogoImg from './FeedImages/Comment.png';
import SendLogoImg from './FeedImages/send.png';
import BookMarkImg from './FeedImages/BookMark.png';

export default class FeedInteraction extends Component {
    render() {
        return (
            <View style={feedInteraction_style.feedInteractionContainer}>
                <View
                 style={feedInteraction_style.feedInteractionImgBox}
                >
                    <Image
                        style={feedInteraction_style.feedInteractionLogoImg}
                        source={HeartLogoImg}
                    />
                    <Image
                        style={feedInteraction_style.feedInteractionLogoImg}
                        source={CommnetLogoImg}
                    />
                    <Image
                        style={feedInteraction_style.feedInteractionLogoImg}
                        source={SendLogoImg}
                    />
                </View>
                <View
                 style={feedInteraction_style.feedInteractionImgBox}
                >
                    <Image
                        style={feedInteraction_style.feedInteractionLogoImg}
                        source={BookMarkImg}
                    />
                </View>
            </View>
        )
    }
}
const feedInteraction_style = StyleSheet.create({
    feedInteractionContainer: {
        marginVertical: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    feedInteractionImgBox: {
        marginHorizontal: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    feedInteractionLogoImg: {
        resizeMode: "contain",
        margin: 8,
        width: 26,
        height:26,
    }
})