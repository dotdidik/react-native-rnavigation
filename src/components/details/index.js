import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class DetailsScreen extends Component {
    static navigationOptions = {
        title: 'Detail',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Details!</Text>
                <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
            </View>
        );
    }
}

export default DetailsScreen
