import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

export default class Test extends Component {
    render() {
        return (
            <TextInput
                onChange={this.props.onChange}>
             </TextInput>
        )
    }
}
