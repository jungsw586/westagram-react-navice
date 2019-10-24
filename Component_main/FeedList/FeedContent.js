import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import smallLikeLogo from './FeedImages/Heart.png';

export default class FeedContent extends Component {
    render() {
        const data = this.props.commentsData
        return (
            <View style={feedContent_style.feedContentContainer}>
                <View
                    style={feedContent_style.feedTextContainer}
                >
                    <Text
                        style={feedContent_style.feedContentText}
                    >
                        {"좋아요 " + this.props.likes + "개"}
                    </Text>
                </View>
                <View
                    style={feedContent_style.feedTextContainer}
                >
                    <Text
                        style={feedContent_style.feedContentText}
                    >
                        {this.props.article}
                    </Text>
                </View>
                {data.map((el,id) => {
                    let _comments = [];
                    _comments.push(
                        <View
                            style={feedContent_style.feedTextContainer}
                            key={id}
                        >
                            <Text
                                style={feedContent_style.feedContentText}
                            >
                                {el.username + "   " + el.articleContent}
                            </Text>
                            <Image
                                style={feedContent_style.feedContentSmallLikeImg}
                                source={smallLikeLogo}
                            />
                        </View>
                    )
                    return _comments;
                })}
            </View>
        )
    }
}
const feedContent_style = StyleSheet.create({
    feedContentContainer:{
        marginHorizontal: 5,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    feedTextContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    feedContentText: {
        marginHorizontal: 13,
        marginVertical: 4,
        fontSize: 15,
        fontWeight: "bold",
        color: "#fff",
    },
    feedContentSmallLikeImg: {
        resizeMode: "contain",
        width: 15,
        height: 15,
        marginRight: 10,
    },
})