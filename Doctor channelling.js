import React, {Component} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";

const DocChannelling = () => {
    const handlePress = () => {
        console.log("Button pressed");
    }
    return (
       <View style = {styles.container}>
            <View style = {styles.nav_bar}>
                <TouchableOpacity>
                    <Image source={require ('../PetMate/AppPics/Logo.png')} style = {styles.logo}/>
                </TouchableOpacity>
                <Text style = {styles.nav_text}>
                    DOCTOR CHANNELLING
                </Text>
                <TouchableOpacity>
                    <Image source={require ('../PetMate/AppPics/Setting.png')} style = {styles.settings}/>
                </TouchableOpacity>
            </View>
            <View style={styles.container1}>
                <Text style = {styles.schedule_text}>Schedule an appointment</Text>
            </View>
            <View style ={styles.search_page}>
                <Text style={styles.text}>Type</Text>
                <View style={styles.search_box}>
                    <Image source={require ('../PetMate/AppPics/Search.png')} style={styles.search_img}/>
                    <Text style={styles.text1}>Search</Text>
                    <Image source={require ('../PetMate/AppPics/DoctorChan_dropDown.png')} style={styles.arrow_img}/>
                </View>
                <Text style={styles.text}>Doctor's Name</Text>
                <View style={styles.search_box}>
                    <Image source={require ('../PetMate/AppPics/Search.png')} style={styles.search_img}/>
                    <Text style={styles.text1}>Search</Text>
                    <Image source={require ('../PetMate/AppPics/DoctorChan_dropDown.png')} style={styles.arrow_img}/>
                </View>
                <Text style={styles.text}>Hospital's Name</Text>
                <View style={styles.search_box}>
                    <Image source={require ('../PetMate/AppPics/Search.png')} style={styles.search_img}/>
                    <Text style={styles.text1}>Search</Text>
                    <Image source={require ('../PetMate/AppPics/DoctorChan_dropDown.png')} style={styles.arrow_img}/>
                </View>
                <Text style={styles.text}>Date</Text>
                <View style={styles.search_box}>
                    <Image source={require ('../PetMate/AppPics/Calender.png')} style={styles.calendar_img}/>
                </View>
                <TouchableOpacity>
                    <View style ={styles.button}>
                        <Text style={styles.search_btn}>Search</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1, //fill the whole screen
        backgroundColor:'#BAFAD0',
        justifyContent: 'flex-start', //start from the top
        alignItems:'center',
        paddingTop:30,
    },
    nav_bar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    logo: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
        // alignSelf: 'flex-start', // Center the image horizontally
        // paddingLeft: 30,
        // paddingRight: 30,
        borderRadius: 90,
        marginRight:20,
    },
    nav_text: {
        fontSize: 20,
        fontWeight: 'bold',
        // alignSelf: 'center'
    },
    settings: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
        // alignSelf: 'flex-start', // Center the image horizontally
        // paddingLeft: 30,
        // paddingRight: 30,
        borderRadius: 90,
        marginLeft:20,
    },
    container1: {
        paddingTop: 50,
        justifyContent: 'center',
        alignContent: 'center',
        
    },
    schedule_text:{
        fontWeight:'bold',
        fontSize: 30,
    },
    search_page:{
        backgroundColor: '#E6B4EB',
        width:'85%',
        height: '73%',
        borderRadius: 20,
        marginTop: 30,
        // justifyContent: 'center',
        alignItems: 'center',
        // alignContent: 'center',
    },
    text: {
        fontSize: 25,
        padding: 20,
        alignSelf: 'flex-start',
    },
    search_box:{
        backgroundColor: 'white',
        width:'85%',
        height:'8%',
        justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row', // Use 'column' for vertical split
        padding:10,
        marginTop:-10,
        // alignContent: 'flex-start',
    },
    search_img: {
        width: 30,
        height: 30,
        // alignSelf: 'flex-start',
        marginRight: 10,
        // padding: 5,
    },
    text1: {
        fontSize: 20,
        color: 'rgba(0, 0, 0, 0.5)', // 50% transparent text
        marginLeft: 10,
    },
    arrow_img: {
        width: 30,
        height: 30,
        marginLeft: 90,
    },
    calendar_img: {
        width: 30,
        height: 30,
        marginLeft: 200,
        // padding: 10,
    },
    button: {
        height: 60,
        width: 180,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    search_btn: {
        fontWeight: 'bold',
        fontSize: 25
    }
})
export default DocChannelling