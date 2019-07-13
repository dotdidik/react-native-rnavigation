import React, { Component } from 'react';
import { View, Text, Button, Image, Dimensions, ScrollView } from 'react-native';
import HomeSwiper from './HomeSwiper';
import NowPlaying from './NowPlaying';
import Recomendations from './Recomendations';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'MYMOVIE',
    };
    render() {
        return (
            <ScrollView>
                <View>
                    <HomeSwiper />
                    <NowPlaying />
                    <Recomendations />
                    
                </View>
                <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
            </ScrollView>
        );
    }
}

export default HomeScreen

export const { width, height } = Dimensions.get('window');