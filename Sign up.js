import React from "react";
import {View,Text,StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';

const SignUp = ()=>{
    const handlePress = () => {
        console.log("Button pressed");
    }
    return(
        <View style={styles.container}>
            <View style = {styles.nav_bar}>
                <Text style = {styles.nav_text}>
                   PET OWNER REGISTRATION
                </Text>   
            </View>
            <View style={styles.container1}>
                <Text style={styles.text}>Pet Owner Information</Text>
            </View>
            <View style={styles.container2}>
                <TextInput style={styles.textInput}>Full name</TextInput>
            </View>
            <View style={styles.container2}>
                <TextInput style={styles.textInput}>Username</TextInput>
            </View>
            <View style={styles.container2}>
                <TextInput style={styles.textInput}>Email</TextInput>
            </View>
            <View style={styles.container1}>
                <Text style={styles.text}>Pet information</Text>
            </View>
            <View style={styles.container2}>
                <TextInput style={styles.textInput}>Pet name</TextInput>
            </View>
            <View style={styles.container2}>
                <TextInput style={styles.textInput}>Age</TextInput>
            </View>
            <View style={styles.container3}>
                <View style={styles.inputWithImage}>
                    <TextInput style={styles.textInput}>Password</TextInput>
                    <TouchableOpacity>
                        <Image source={require('../PetMate/AppPics/Password.png')} style={styles.imageStyle} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.signUpButton} onPress={handlePress}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.container5}>
                <Text style={styles.text}>or continue with</Text>
            </View>
            <View style={styles.imageContainer}>
                <TouchableOpacity>
                    <Image source={require('../PetMate/AppPics/FB.png')} style={styles.image} />
                </TouchableOpacity>
                <View style={styles.space} />
                <TouchableOpacity>
                    <Image source={require('../PetMate/AppPics/Google.png')} style={styles.image} />
                </TouchableOpacity>
            </View>
            <View style={styles.container4}>
                <Text style={styles.text}>Do you have an account?</Text>
                <TouchableOpacity><Text style={styles.loginText}>LOGIN</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex:1, //fill the whole screen
        backgroundColor:'#BAFAD0',
        justifyContent: 'flex-start', //start from the top
        alignItems:'center',
        paddingTop:30,
    },
    container1: {
        marginLeft: -150,
        paddingTop: 20,
    }, 
    text: {
        fontSize: 20,
    },  
    container2: {
        backgroundColor: 'white',
        width: '80%',
        height: '5%',
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 2,
        marginTop:25,
        justifyContent: 'center'
    },
    container3: {
        backgroundColor: 'white',
        width: '50%',
        height: '5%',
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 2,
        marginTop:25,
        justifyContent: 'center'
    },
    textInput: {
        fontSize:15,
        color: 'rgba(0, 0, 0, 0.5)', // 50% transparent text
        marginLeft: 10,
    },
    inputWithImage: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageStyle: {
        width: 20,
        height: 20,
        marginLeft: 98,
    },
    signUpButton: {
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 55,
        borderRadius: 10,
        marginTop: 20,
    },
    signUpButtonText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    continueWithImage: {
        width: 50,
        height: 50,
        flexDirection: 'row',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20, 
        marginTop: 10, 
    },
    image: {
        width: 50, // Adjust image width 
        height: 50, // Adjust image height 
    },
    space: {
        width: 60, // Adjust the space between images 
    },
    loginText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    container4: {
        paddingTop: 20,
        alignItems:'center',
        flexDirection: 'row'
    }, 
    nav_text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    container5: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
})

export default SignUp
