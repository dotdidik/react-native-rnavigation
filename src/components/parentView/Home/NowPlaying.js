import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import HomeSwiperPotrait from './HomeSwiperPotrait';

export default class NowPlaying extends Component {
    render() {
        return (
            <View style={suek.Container}>
                <View style={suek.judul}>
                    <View>
                        <Text style={suek.nowPlaying}>Now Playing</Text>
                    </View>
                    <View>
                        <Text>See All  ></Text>
                    </View>
                </View>
                <HomeSwiperPotrait />
            </View>
        )
    }
}

const suek = StyleSheet.create({
    Container: {
        marginTop: 10
    },
    judul : {
        flexDirection: 'row', 
        justifyContent: 'space-between' ,
        padding: 10
    },
    nowPlaying:{
        fontSize: 14,
        fontWeight: 'bold'
    }
})
