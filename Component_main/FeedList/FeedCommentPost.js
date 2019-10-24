import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

export default class FeedCommentPost extends Component {
    handle = () => {
        console.log('work!')
    }
    render() {
        return (
            <View
                style={feedCommentPost_style.feedCommentPostContainer}
            >
                <View
                    style={feedCommentPost_style.feedCommentPostProfileBox}
                >
                    <Image
                        source={this.props.imgSrc}
                        style={feedCommentPost_style.feedCommentPostProfileImg}
                    />
                </View>
                <View
                    style={feedCommentPost_style.feedCommentPostTextInputBox}
                >
                    <TextInput
                        style={feedCommentPost_style.feedCommentPostTextInput}
                        placeholder={"댓글 달기..."}
                        onChangeText={this.props.onChange}
                    />
                </View>
                <View
                    style={feedCommentPost_style.feedCommentPostProfilePostBox}
                >
                    <TouchableOpacity
                        style={feedCommentPost_style.feedCommentPostProfilePostBox}
                        onPress={this.props.handlerPressPost}
                    >
                        <Text style={feedCommentPost_style.feedCommentPostText}>
                            게시
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const feedCommentPost_style = StyleSheet.create({
    feedCommentPostContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    feedCommentPostProfileBox: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5,
        marginHorizontal: 10,
    },
    feedCommentPostProfilePostBox: {
        width: 40,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    feedCommentPostProfileImg: {
        resizeMode: "contain",
        width: 26,
        height: 26,
        borderRadius: 13,
    },
    feedCommentPostTextInputBox: {
        width: 275,
        justifyContent: "space-between",
        alignItems: "center",
    },
    feedCommentPostTextInput: {
        width: "100%",
        color: "#fff",
        fontSize: 15,
    },
    feedCommentPostText: {
        color: "#fff",
    },
})