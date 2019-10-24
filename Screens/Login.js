import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import instagramTextLogo from './Component_login/img/logo_text.png';

export default function Login() {
    return (
        <View style={login_styles.container}>
            <View style={login_styles.mainLoginBox}>
            <Image source={instagramTextLogo} style={login_styles.instaLogoImg}/>
            <View
                style={{width: "100%"}}
            >
                <TextInput
                placeholder=" 전화번호, 사용자 이름 또는 이메일"
                style={login_styles.textInput}
                />
            </View>
            <View
                style={{width: "100%"}}
            >
                <TextInput
                placeholder=" 비밀번호"
                style={login_styles.textInput}
                />
            </View>
            <View
                style={login_styles.forgetPW}
            >
                <Text
                style={{color: "#3897f0", fontWeight: "bold", fontSize:14}}
                >
                비밀번호를 잊으셨나요?
                </Text>
            </View>
            <TouchableOpacity style={login_styles.loginBtn}>
                <Text style={{color: "#fff", fontWeight: "bold", fontSize: 20}}>로그인</Text>
            </TouchableOpacity>
            </View>
    
            <View style={login_styles.secLoginBox}>
            <Text style={{fontSize:12}}>
                Instagram from Facebook
            </Text>
            </View>
    
            {/* <Text style={login_styles.appDwnTextBox}>
            앱을 다운로드하세요.
            </Text>
    
            <View style={login_styles.storeLinkBox}>
            <Image
                style={login_styles.storeImg}
                source={appStoreImg}
            />
            <Image
                style={login_styles.storeImg}
                source={playStoreImg}
            />
            </View> */}
        </View>
    );
}

const login_styles = StyleSheet.create({
    container: {
      justifyContent: "flex-end",
      height: "100%",
      padding: 5,
      alignItems: "center",
      backgroundColor: "#fafafa", //"gray",
    },
    mainLoginBox: {
      height: "95%",
      padding: 10,
      //marginTop: 100,
      marginBottom: 2,
      width: "100%",
      //flexDirection: "column",
      //flexWrap: "nowrap",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#efefef",
      borderRadius: 4,
    },
    textInput: {
      height: 50,
      width: "100%",
      borderWidth: 1,
      borderColor: "#efefef",
      borderRadius: 4,
      marginBottom: 2,
    },
    instaLogoImg: {
      width:200,
      resizeMode: "contain",
      marginVertical: 20,
    },
    forgetPW: {
      margin: 3,
      width: "100%",
      flexDirection: "row-reverse",
    },
    loginBtn: {
      marginTop: 2,
      width: "100%",
      height: 50,
      borderRadius: 4,
      backgroundColor: "#3897f0",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.3,
    },
    secLoginBox: {
      width: "100%",
      height: 40,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#efefef",
      borderRadius: 4,
    },
    // appDwnTextBox: {
    //   fontSize: 14,
    //   marginVertical: 20,
    // },
    // storeLinkBox: {
    //   flexDirection: "row",
    //   alignItems: "center",
    //   justifyContent: "space-around",
    // },
    // storeImg: {
    //   width: 136,
    //   height: 40,
    //   marginHorizontal: 5,
    //   borderRadius: 4,
    // },
  });