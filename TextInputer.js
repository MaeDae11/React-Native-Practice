import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

class TextInputer extends Component {
    constructor(props){
        super(props);
        this.state = {text: ""};
    }

    render(){
        return (
            <View>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && "cat").join(' ')}
                </Text>
            </View>
        )
    }
};

export default TextInputer