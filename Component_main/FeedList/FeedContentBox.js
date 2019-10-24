import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import FeedContent from './FeedContent';
import FeedCommentPost from './FeedCommentPost';


export default class FeedContentBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            feedEachData: this.props.feedEachData,
            logOnUserData: this.props.logOnUserData,
            onlineUserName: this.props.onlineUserName,
            commentsData: this.props.feedEachData.comments,
            commentsStatus: '',
        }
    }

    onChange = (newComment) => {
        this.setState({
            commentsStatus: newComment
        })
    }

    handlerPressPost = (e) => {
        let newComment = {
            username: this.state.onlineUserName,
            articleContent: this.state.commentsStatus,
            id: this.state.commentsData.length + 1,
        }
        let updatedFeedsComment= this.state.commentsData.concat(newComment)
        this.setState({
            commentsData: updatedFeedsComment,
        })
    }

    render() {
        const {
            feedEachData,
            logOnUserData,
            onlineUserName,
            commentsStatus,
            commentsData,
        } = this.state;

        return (
            <View>
                <FeedContent
                    likes={feedEachData.likes}
                    article={feedEachData.articleContent}
                    commentsData={commentsData}
                />
                <FeedCommentPost
                    imgSrc={logOnUserData[0].logOnUserProfile}
                    onlineUserName={onlineUserName}
                    onChange={this.onChange}
                    handlerPressPost={this.handlerPressPost}
                />
            </View>
        )
    }
}
