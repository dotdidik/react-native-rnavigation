import React, { Component } from 'react'
import { Text, View, FlatList, ImageBackground, StyleSheet } from 'react-native'
import Axios from 'axios';

export default class HomeSwiperPotrait extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowplaying: []
        }
    }

    componentDidMount() {
        Axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=9824a5ecced9b0e31bda819babb795b0&language=en-US&page=1')
            .then(res => {
                this.setState({
                    nowplaying: res.data.results.slice(0, 10)
                })
            })
    }

    render() {
        console.log('ini data', this.state.nowplaying)
        return (
            <View>
                <FlatList
                    horizontal='true'
                    data={this.state.nowplaying}
                    renderItem={({ item }) =>
                        <View style={styles.container}>
                            <ImageBackground
                                imageStyle={{ borderRadius: 10 }}
                                source={{
                                    uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                                }}
                                style={{ width: 140, height: 230 }}>
                                <View style={styles.textStyle}>
                                    <Text>{item.original_title.slice(0,18)}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    }
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
    },
    bgstyle: {
        borderRadius: 20,
    },
    textStyle: { 
        position: 'absolute', 
        left: 0, right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(205, 223, 221, 0.71)',
        borderBottomLeftRadius : 10, 
        borderBottomRightRadius: 10,
        height: 30
    }
})
