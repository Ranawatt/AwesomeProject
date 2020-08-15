import React from 'react';
import { ImageBackground, StyleSheet, View, Image} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style = {styles.background}
            source={require('../assets/favicon.png') }
        >
            <Image style = {styles.logo} source = {require('../assets/web_icon.png')}></Image>
            <View style = { styles.loginButton}></View>
            <View style = { styles.registerButton}></View>
        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end"
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65"
    },
    logo: {
        width: 100,
        height: 100,
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4"
    }
})
export default WelcomeScreen;