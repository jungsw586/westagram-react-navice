import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Main from './Screens/Main';

export default function App() {
  return (
    <View style={backGround_styles.backgroundContainer}>
      <Main />
    </View>
  );
}

const backGround_styles = StyleSheet.create({
  backgroundContainer: {
    flex:1,
    flexDirection: "column",
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "#fff",
  },
})
