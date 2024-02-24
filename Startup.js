import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

// This is a functional component named "Startup" which is call in "App.js".
const Startup = ({ navigation }) => {
    // A function to handle events or perform actions in response to user triggers.
    const handlePress = () => {
        console.log("Button pressed");
    }
    return(
        <View style={styles.container}>
            <Image
                source={require("../PetMate/AppPics/Start up.jpg")}
                style={styles.image}
            />
            <View style={styles.text}>
                <Text style={[styles.textItem, {paddingLeft: 10}]}>Your furry friend</Text>
                <Text style={styles.textItem}>deserves the best</Text>
                <Text style={[styles.textItem, {paddingLeft: 60}]}>and now,</Text>
                <Text style={styles.textItem}>it's just a tap away!</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UserCategory')} style={styles.button}>
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
        </View>
    );
};

// This method is used to define styles for all the components in the "Startup.js" file.
const styles = StyleSheet.create({
    container:{
        flex: 1, // Expand to fill all the available space in the screen.
        backgroundColor: "#BAFAD0",
        alignItems: "center",
    },
    image:{
        width: "100%",
        height: "45%",
    },
    text:{
        paddingTop: 30,
    },
    // Styles that start with "font" can only be used with the "Text" component.
    textItem:{
        fontSize: 28,
    },
    button:{
        backgroundColor: "white",
        margin: 40, // "margin" property is used to create space around elements.
        marginBottom: 5,
        width: 300,
        height: 60,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 27,
        fontWeight: "bold",
    }
})

export default Startup; // Export this file to make it available for import in other files.