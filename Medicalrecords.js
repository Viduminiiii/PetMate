//import React, { Component, useState } from "react";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";

const Medicalrecords = ({ navigation }) => {
    const handlePress = () => {
        console.log("Button pressed");
      };
    return(
    <View style={styles.maincontainer}>
       <View style = {styles.nav_bar}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Image source={require ('../PetMate/AppPics/Logo.png')} style = {styles.logo}/>
                </TouchableOpacity>
                <Text style = {styles.nav_text}>
                    MEDICAL RECORDS
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Petowner_Settings')}>
                    <Image source={require ('../PetMate/AppPics/Setting.png')} style = {styles.settings}/>
                </TouchableOpacity>
        </View>
        <View style={styles.detailContainer}>
            <View style={styles.topicContainer}>
                <Text style = {styles.topic_text}>
                    Digital Prescriptions
                </Text>
            </View>
            <View style={styles.samplePrescription}>
                <TouchableOpacity onPress={() => navigation.navigate('Prescription')}>
                    <Text style={styles.sampleText}>Digital prescription</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.detailContainer2}>
            <View style={styles.topicContainer2}>
                <Text style = {styles.topic_text}>
                    Appointment Details
                </Text>
            </View>
        </View>
        <View style ={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Image source={require ('../PetMate/AppPics/Footer_Menu.png')} style={styles.menu_img}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <Image source={require ('../PetMate/AppPics/Footer_Chat.png')} style={styles.menu_img}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("LocateVetClinics")}>
                    <Image source={require ('../PetMate/AppPics/Footer_VetClinic.png')} style={styles.menu_img}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('DocChannelling')}>
                    <Image source={require ('../PetMate/AppPics/Footer_appointment.png')} style={styles.menu_img}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Medicalrecords')}>
                    <Image source={require ('../PetMate/AppPics/Footer_medicalRecords.png')} style={styles.menu_img}/>
                </TouchableOpacity>
            </View>
    </View>
    )
}
const styles = StyleSheet.create({
    nav_bar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
        borderRadius: 90,
        marginRight:20,
    },
    nav_text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    settings: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
        borderRadius: 90,
        marginLeft:20,
    },
    maincontainer: {
        flex:1, //fill the whole screen
        backgroundColor:'#CEEFA3',
        justifyContent: 'space-between', // This ensures the footer is pushed to the bottom
        alignItems:'center',
        paddingTop:30,
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menu_img: {
        width: 40,
        height: 40,
        margin:15
    },
    detailContainer: {
        //flexDirection: "row",
        backgroundColor: "#E6B4EB",
        position: "absolute",
        top: 125, 
        //left: 20,
        width: 365,
        height: 250,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailContainer2: {
        //flexDirection: "row",
        backgroundColor: "#E6B4EB",
        position: "absolute",
        top: 400, 
        //left: 20,
        width: 365,
        height: 250,
        borderRadius: 20,
    },
    topicContainer: {
        backgroundColor: "#3300FF",
        top: -85,
        width: 365,
        height: 70,
        borderRadius: 20,
    },
    samplePrescription:{
        backgroundColor: 'white',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        top: -70,
        borderRadius: 20
    },
    sampleText:{
        fontSize: 20
    },
    topicContainer2: {
        backgroundColor: "#3300FF",
        top: 0,
        width: 365,
        height: 70,
        borderRadius: 20,
    },
    topic_text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "white",
        marginTop: 18,
        marginLeft: 10,
    }
})
export default Medicalrecords