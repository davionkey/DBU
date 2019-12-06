import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image,Animated,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeValue: new Animated.Value(0),
        }
    }
   
    async componentDidMount(){
        Animated.sequence([
            Animated.timing(this.state.fadeValue,{
                toValue: 1,
                duration: 3000,
            }),
        ]).start(() => {

        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Animated.Image style={[styles.logo,{opacity: this.state.fadeValue}]}
                        source={require('../images/QBU.jpg')}>
                    </Animated.Image>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logo: {
        width: 356.3,
        height: 409.6,
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 170,
        padding: 20,
        // backgroundColor: 'red',
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(128,128,128,1)',
        borderColor: 'gray',
        color: '#FFF',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 5,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: 'blue',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
})