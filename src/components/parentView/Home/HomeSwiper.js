import React, { PureComponent } from 'react';
import { Text, Dimensions, Image, StyleSheet, View } from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';
import Axios from 'axios';

export default class HomeSwiper extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            trendings: []
        }
    }

    componentDidMount() {
        Axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=9824a5ecced9b0e31bda819babb795b0')
            .then(response => {
                this.setState({
                    trendings: response.data.results
                })
            })
    }

    render() {
        console.log('trending data', this.state.trendings)
        return (
            <View style={styles.container}>
                <SwiperFlatList
                    autoplay
                    autoplayDelay={2}
                    autoplayLoop
                    index={this.state.trendings.length}
                    showPagination
                    paginationStyleItem={{width: 10, height:10}}
                    paginationActiveColor="yellow"
                >
                    {
                        this.state.trendings.slice(0,6).map((tren, index) =>
                            <View key={index}>
                                <Image
                                    style={{ height: 170, width: width }}
                                    source={{ 
                                        uri: `https://image.tmdb.org/t/p/w500/${tren.backdrop_path}`
                                    }}
                                />
                            </View>
                        )
                    }

                </SwiperFlatList>

            </View>
        );
    }
}

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: 'white'
    },
    child: {
        height: height * 0.3,
        width,
        justifyContent: 'center'
    },
    text: {
        fontSize: width * 0.5,
        textAlign: 'center'
    }
});