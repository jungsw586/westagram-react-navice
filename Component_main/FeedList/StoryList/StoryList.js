import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import ProfileImgWework from './StoryListImg/weworkprofile.jpg';
import storyListData from './StoryListData';
import StoryListContents from './StoryListContents';

class StoryList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            storyListData : storyListData,
        }
    }
    render(){
        const { storyListData } = this.state
        return (
            <ScrollView
                style={storylist_style.storylistContainer}
                horizontal={true}
            >
                <View style={storylist_style.myProfileContainer}>
                    <TouchableOpacity style={storylist_style.TouchableOpacityContainer}>
                        <Image
                            style={storylist_style.myProfileImg}
                            source={ProfileImgWework}
                        />
                        <Text style={storylist_style.myProfileText}>
                            내 스토리
                        </Text>
                    </TouchableOpacity>
                </View>
                {storyListData.map((el,id)=>{
                    let _storyLists = [];
                    _storyLists.push(
                        <StoryListContents
                            key={id}
                            username={el.user}
                            imgSrc={el.imgSrc}
                        />
                    )
                    return _storyLists; 
                })}
                {/* <FlatList
                    horizontal={true}
                    data={storyListData}
                    keyExtractor={(item) => {item.id}}
                    renderItem={({item})=>{
                        console.log(item.user);
                        <StoryListContents story={item}/>
                    }}
                /> */}
            </ScrollView>
        )
    }
}

export default StoryList

const storylist_style = StyleSheet.create({

    storylistContainer: {
        borderBottomColor: '#efefef',
        borderBottomWidth: 1,
        //marginTop: 10,
        //marginBottom: 20,
        flexDirection: 'row',
        //justifyContent: 'center',
        height: 110,
    },
    TouchableOpacityContainer: {
        alignItems: "center",
    },
    myProfileContainer: {
        width: 100,
        padding: 10,
        flexDirection: "column",
        alignItems: "center",
    },
    myProfileImg: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        borderRadius: 35,
    },
    myProfileText: {
        marginTop: 5,
        color: "#fff",
    },
})
