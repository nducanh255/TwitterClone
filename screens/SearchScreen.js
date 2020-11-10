import React, { useState, useLayoutEffect } from 'react'
import { View, Text, TextInput, StyleSheet, Image, ImageBackground, ScrollView, FlatList } from 'react-native'
import colors from '../components/colors'

export default function SearchScreen({navigation}){
    const [isFocused, setFocused] = useState(false)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => 
            <TextInput 
                style={isFocused ? styles.focusedInput : styles.input} 
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder='Search Twitter'
                placeholderTextColor={colors.grey}
            />
          ,
        })
    }, [navigation])

    return(
        <ScrollView>
            <View style={[styles.container, styles.column]}>
                <ImageBackground
                    source={require('../assets/mask.jpg')}
                    style={{height: 200, width: '100%'}}
                >
                    <Text style={styles.trendHeading}>Covid 19 Updates</Text>
                </ImageBackground>
            </View>
            <FlatList 
                data={[{title: 'Trend 1', tweets: '123'},{title: 'Trend 1', tweets: '123'},{title: 'Trend 1', tweets: '123'},{title: 'Trend 1', tweets: '123'},{title: 'Trend 1', tweets: '123'},{title: 'Trend 1', tweets: '123'},{title: 'Trend 1', tweets: '123'},{title: 'Trend 1', tweets: '123'},]}
                renderItem={({item}) => (
                    <View style={styles.trendContainer}>
                        <Text style={[styles.trendtweets, {paddingTop: 0}]}>Popular trend in somewhere</Text>
                        <Text style={styles.trendText}>{item.title}</Text>
                        <Text style={styles.trendtweets}>{item.tweets + ' N Tweet'}</Text>
                    </View>
                )}
                style={{backgroundColor: colors.darkblue}}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkblue
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    input: {
        width: '100%', 
        height: 30, 
        backgroundColor: colors.darkgrey, 
        borderRadius: 30,
        color: 'white',
        paddingLeft: 20,
    },
    focusedInput: {
        width: '100%', 
        height: 30, 
        backgroundColor: colors.darkgrey, 
        borderRadius: 3,
        borderColor: colors.lightblue,
        borderWidth: 1,
    },
    trendHeading: {
        color: 'white', 
        position: 'absolute', 
        bottom: 4,
        left: 4,
        fontWeight: 'bold',
        fontSize: 32
    },
    trendContainer: {
        paddingLeft: 15,
        paddingVertical: 10,
        borderBottomColor: colors.grey,
        borderBottomWidth: 1
    },
    trendText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    trendtweets: {
        paddingTop: 4,
        fontSize: 14,
        color: colors.grey
    }
})