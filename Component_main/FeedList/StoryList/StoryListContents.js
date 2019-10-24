import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

class StoryListContents extends React.Component {
    render(){
        return (
            <View style={storylist_style.ProfileContainer}>
                <TouchableOpacity style={storylist_style.TouchableOpacityContainer}>
                    <Image
                        style={storylist_style.ProfileImg}
                        source={this.props.imgSrc}
                    />
                <Text style={storylist_style.ProfileText}>
                    {this.props.username}
                </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default StoryListContents

const storylist_style = StyleSheet.create({
    ProfileContainer: {
        width: 100,
        padding: 10,
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        //justifyContent: "center",
    },
    TouchableOpacityContainer: {
        alignItems: "center",
    },
    ProfileImg: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        borderRadius: 35,
        borderWidth: 3,
        borderColor: "hotpink",
    },
    ProfileText: {
        marginTop: 5,
        color: "#fff",
    },
})