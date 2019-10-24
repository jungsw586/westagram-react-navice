import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
//import Test from './Test';

export default class FeedMainImage extends Component {
    // onChange = () => {
    //     console.log('hi');
    // }

    render() {
        return (
            <View style={feedMainImage_style.feedMainImageContainer}>
                <Image
                    style={feedMainImage_style.feedMainImage}
                    source={this.props.imgSrc}
                />
                {/* <Test onChange={this.onChange} /> */}
            </View>
        )
    }
}
const feedMainImage_style = StyleSheet.create({
    feedMainImageContainer: {
    },
    feedMainImage: {
        resizeMode: "contain",
        width: "100%",
        height: 230,
    },

})