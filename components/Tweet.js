import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PageAvatar from '../components/PageAvatar'
import { AntDesign, FontAwesome, FontAwesome5, Feather } from '@expo/vector-icons'
import colors from './colors'

export default function Tweet(props){
    const [isComment, setComment] = useState(false)
    const [isLove, setLove] = useState(false)
    const [isRetweet, setRetweet] = useState(false)
    const [isShare, setShare] = useState(false)

    
    const timeConverter = (UNIX_timestamp) => {
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(UNIX_timestamp * 1);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        // Will display time in 10:30:23 format
        return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + ' ' + date.getDate() + months[date.getMonth()] + date.getFullYear()
        //return date.getFullYear()
    }

    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'column', width: '20%'}}>
                <PageAvatar navigation={props.navigation}/>
            </View>
            <View style={{flexDirection: 'column', width: '80%'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>{props.login}</Text>
                    <FontAwesome name={'check-circle'} color={'white'} size={16} style={{marginHorizontal: 4}}/>
                    <Text style={{color: colors.grey, fontSize: 16}}>@...</Text>
                    <Text style={{color: colors.grey, textAlign:'right', fontSize: 16}}>{timeConverter(props.posted)}</Text>
                    <TouchableOpacity>
                        <AntDesign name={'down'} color={colors.grey} size={12} style={{marginLeft: 5}}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.mainTweet}>
                    <Text style={{color: 'white', fontSize: 14}}>{props.text}</Text>
                </View>

                {
                    props.hasPicture &&
                    <View style={styles.picture}>
                        <Text style={{color: 'white'}}>Here's the picture of the tweet</Text>
                    </View>
                }

                {
                    props.hasPoll &&
                    <View style={styles.poll}>
                        <TouchableOpacity style={styles.pollOption}>
                            <Text style={styles.pollText}>Option 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pollOption}>
                            <Text style={styles.pollText}>Option 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pollOption}>
                            <Text style={styles.pollText}>Option 3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pollOption}>
                            <Text style={styles.pollText}>Option 4</Text>
                        </TouchableOpacity>
                        <Text style={{color: colors.grey, fontSize: 14}}>6000 chosen options. 8 hours left</Text>
                    </View>
                }

                {
                    props.hasClosedPoll && 
                    <View style={styles.poll}>
                        <View style={styles.closedPoll}>
                            <Text style={styles.closedPollText}>Option 1</Text>
                            <Text style={styles.closedPollText}>25%</Text>
                        </View>
                        <View style={styles.closedPoll}>
                            <Text style={styles.closedPollText}>Option 2</Text>
                            <Text style={styles.closedPollText}>25%</Text>
                        </View>
                        <View style={styles.closedPoll}>
                            <Text style={styles.closedPollText}>Option 3</Text>
                            <Text style={styles.closedPollText}>25%</Text>
                        </View>
                        <View style={styles.closedPoll}>
                            <Text style={styles.closedPollText}>Option 4</Text>
                            <Text style={styles.closedPollText}>25%</Text>
                        </View>
                        <Text style={{color: colors.grey, fontSize: 14}}>6000 chosen options. 8 hours left</Text>
                    </View>
                }

                <View style={styles.controllerTweet}>
                    <TouchableOpacity 
                        style={{flexDirection: 'row', alignItems: 'center'}}
                        onPress={() => setComment(!isComment)}
                    >
                        <FontAwesome 
                            name={'comment-o'} 
                            color={isComment ? colors.lightblue : colors.grey} 
                            size={16}
                        />
                        <Text style={[styles.controllerItemText, isComment && {color: colors.lightblue}]}>100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{flexDirection: 'row', alignItems: 'center'}}
                        onPress={() => setRetweet(!isRetweet)}
                    >
                        <AntDesign 
                            name={'retweet'} 
                            color={isRetweet ? colors.green : colors.grey} 
                            size={16} 
                        />
                        <Text style={[styles.controllerItemText, isRetweet && {color: colors.green}]}>100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{flexDirection: 'row', alignItems: 'center'}}
                        onPress={() => setLove(!isLove)}
                    >
                        <FontAwesome 
                            name={isLove ? 'heart' : 'heart-o'} 
                            color={isLove ? colors.pink : colors.grey} 
                            size={16}
                        />
                        <Text style={[styles.controllerItemText, isLove && {color: colors.pink}]}>100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setShare(!isShare)}
                    >
                        <AntDesign name={'upload'} color={isShare ? colors.lightblue :colors.grey} size={18}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        width: '100%',
        paddingVertical: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    mainTweet: {
        paddingRight: 10
    },
    controllerTweet: {
        width: '95%',
        marginVertical: 5,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    picture: {
        width: '95%', 
        height: 150, 
        borderRadius: 10, 
        backgroundColor: colors.grey, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginVertical: 10, 
        paddingRight: 5
    },
    poll: {
        width: '95%',
        flexDirection: 'column',
    },
    pollOption: {
        width: '100%',
        height: 28,
        borderColor: colors.lightblue,
        borderWidth: 1,
        borderRadius: 36,
        marginVertical: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pollText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.lightblue
    },
    closedPoll: {
        backgroundColor: colors.grey,
        height: 28,
        width: '100%',
        borderRadius: 4,
        marginVertical: 4,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    closedPollText: {
        color: 'white',
        fontSize: 14
    },
    controllerItemText: {
        fontSize: 14, 
        color: colors.grey, 
        paddingLeft: 5
    }
})