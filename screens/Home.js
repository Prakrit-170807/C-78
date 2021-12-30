import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                }}>
                <ImageBackground source={require("../assets/bg.png")} style={styles.bg}>
                    <Text style={styles.txt}>Space Station Pinger</Text>
                    <TouchableOpacity style={styles.TOuchOPA} onPress={()=> {this.props.navigation.navigate("Location Screen")}}>
                        <Text style={styles.txt1}> 1 </Text>
                        <Image source={require("../assets/ISS.png")} style={styles.img} />
                        <Text style={styles.txt2}>Location</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TOuchOPA} onPress={()=> {this.props.navigation.navigate("Meteor Screen")}}>
                        <Text style={styles.txt1}> 2 </Text>
                        <Image source={require("../assets/meteor.png")} style={styles.img2} />
                        <Text style={styles.txt2}>Meteor</Text>
                        
                    </TouchableOpacity>
                </ImageBackground>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        resizeMode: "cover",
    },
    img: {
        flex: 1,
        position: "absolute",
        resizeMode: "contain",
        width: "100%",
        height: "100%",
        marginTop: -70,
        transform: [{rotate:"30deg"}],
    },
    img2: {
        flex: 1,
        position: "absolute",
        resizeMode: "contain",
        width: "100%",
        height: "100%",
        marginTop: -50,
        transform: [{rotate:"-100deg"}],
    },
    txt: {

        color: "white",
        textAlign: "left",
        fontSize: 40,
        marginTop: 70,
        marginLeft: 10,
        fontWeight: "bold",
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 2,
        textShadowColor: 'grey',
    },
    txt1: {
        color: "white",
        right: 20,
        bottom: -35,
        position: "absolute",
        fontSize: 80,
        marginTop: 70,
        marginLeft: 0,
        fontWeight: "bold",
        opacity: 0.5,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        textShadowColor: 'black',
    },
    txt2: {
        color: "white",
        textAlign: "left",
        fontSize: 40,
        marginTop: 70,
        marginLeft: 30,
        marginBottom: 15,
        fontWeight: "bold",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        textShadowColor: 'black',
    },
    TOuchOPA: {
        backgroundColor: "#282424",
        margin: 20,
        marginTop: 100,
        borderRadius: 30,
    }
});