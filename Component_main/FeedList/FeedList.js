import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import {articleData, logOnUserData} from './FeedListData';
import Feedheader from './Feedheader';
import FeedMainImage from './FeedMainImage';
import FeedInteraction from './FeedInteraction';
import FeedContentBox from './FeedContentBox';
import StoryList from '../FeedList/StoryList/StoryList';


class FeedList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            feedsData: articleData,
            logOnUserData: logOnUserData,
            onlineUserName: logOnUserData[0].logOnUserName,
        }
    }
    
    render(){
        
        const { 
            feedsData,
            logOnUserData,
            onlineUserName
        } = this.state;

        return (
            <ScrollView style={feedList_style.feedListScrollViewContainer}>
                <StoryList />
                <FlatList
                    data={feedsData}
                    renderItem={({item})=>
                        <View
                            style={feedList_style.feedListContainer}
                        >
                            <Feedheader
                                writerName={item.writerUserName}
                                writerProfileImg={item.writerUserProfile}
                            />
                            <FeedMainImage
                                imgSrc={item.articleImg}
                            />
                            <FeedInteraction/>
                            <FeedContentBox
                                setStateFunc={this.handlerSetState}
                                feedEachData={item}
                                logOnUserData={logOnUserData}
                                onlineUserName={onlineUserName}
                            />
                        </View>
                    }
                    keyExtractor={item => item.id.toString()}
                />
            </ScrollView>
            
            // <ScrollView style={feedList_style.feedListScrollViewContainer}>
            //     <StoryList />
            //     {feedsData.map((el,id)=>{
            //         let _feedsData = [];
            //         _feedsData.push(
            //             <View
            //                 style={feedList_style.feedListContainer}
            //                 key={id}
            //             >
            //                 <Feedheader
            //                     writerName={el.writerUserName}
            //                     writerProfileImg={el.writerUserProfile}
            //                 />
            //                 <FeedMainImage
            //                     imgSrc={el.articleImg}
            //                 />
            //                 <FeedInteraction/>
            //                 <FeedContentBox
            //                     setStateFunc={this.handlerSetState}
            //                     feedEachData={el}
            //                     logOnUserData={logOnUserData}
            //                     onlineUserName={onlineUserName}
            //                 />
            //             </View>
            //         )
            //         return _feedsData;
            //     })}
            // </ScrollView>
        )
    }
}
export default FeedList

const feedList_style = StyleSheet.create({
    feedListScrollViewContainer: {
        height: 530,
    },
    feedListContainer: {
        flexDirection: "column",
    },
    test: {
        borderColor: "#fff",
        borderWidth: 1,
        fontSize: 100,
        color: "#fff",
    }
})