import React, { Component } from 'react';
import { AppRegistry, 
        View, 
        Button, 
        Alert, 
        StyleSheet 
    } from 'react-native';


class BasicButton extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }
    render() {
        return(
            <View style={styles.container}>
                <Button
                    onPress={this._onPressButton}
                    title="Press Me"
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'pink',
        opacity: .8,
    }
})

export default BasicButton




