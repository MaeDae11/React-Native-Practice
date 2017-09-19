import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

class CatPicture extends Component {
    render() {
        let pic = {
            uri: 'http://www.owldiy.com/wp-content/uploads/2017/04/4-ways-cheer-up-depressed-cat.jpg'
        };
        return (
            <Image source={pic} style={{width: 300, height: 200}}/>
        )
    }
};

export default CatPicture