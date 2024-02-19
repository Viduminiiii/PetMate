import React, { Component, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, DatePickerAndriod, Button,TextInput} from "react-native";

const Pharmacy_Settings = () => {
    const handlePress = () =>{
        console.log('Button pressed');
    }
    return( 
        <View style={styles.container}>
            <View style={styles.nav_bar}>
                <TouchableOpacity onPress={() => handlePress("Logo")}>
                    <Image
                        source={require("../PetMate/AppPics/Logo.png")}
                          style={styles.logo}
                    />
                </TouchableOpacity>
                <Text style={styles.nav_text}>SETTINGS</Text>
            </View>

            <View style={styles.user}>
              <Image source ={require("../PetMate/AppPics/User_icon.png")} style= {styles.image1}/>
            </View>

            <View style={styles.text1}>
              <TouchableOpacity style={styles.text_input1} onPress={handlePress}>
                <Text style={styles.username}>Marsh Smith</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.text2}>
              <TouchableOpacity style={styles.text_input2} onPress={handlePress}>
                <Text style={styles.email}>marshsmith@gmail.com</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container_1}>
                <TouchableOpacity style={styles.text_input3} onPress={handlePress}>
                  <TextInput style={styles.notification}>Notifications</TextInput>
                </TouchableOpacity>
            </View>

            <View style={styles.container_2}>
                <TextInput style={styles.notification}>Dark Mode</TextInput>
                <TouchableOpacity style={styles.image_settings} onPress={handlePress}>
                    <Image source={require("../PetMate/AppPics/Settings_Switch.png")} style={styles.image_2}/>
                </TouchableOpacity>
            </View>

            <View style={styles.container_3}>
                <TouchableOpacity style={styles.signoutbutton} onPress={handlePress}>
                  <Text style={styles.signout_buttonText}>SIGN OUT</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => handlePress("Home")}>
                  <Image source={require("../PetMate/AppPics/Footer_Menu.png")} style={styles.menu_img}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress("Chat")}>
                  <Image source={require("../PetMate/AppPics/Footer_Chat.png")} style={styles.menu_img}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress("Vet Clinic")}>
                  <Image
                    source={require("../PetMate/AppPics/Footer_VetClinic.png")}
                    style={styles.menu_img}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress("Appointment")}>
                    <Image
                      source={require("../PetMate/AppPics/Footer_appointment.png")}
                      style={styles.menu_img}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress("Medical records")}>
                    <Image
                      source={require("../PetMate/AppPics/Footer_medicalRecords.png")}
                      style={styles.menu_img}
                    />
                </TouchableOpacity>
            </View>


        </View>


    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1, //fill the whole screen
      backgroundColor: "#BAFAD0",
      justifyContent: "space-between", // This ensures the footer is pushed to the bottom
      alignItems: "center",
      paddingTop: 30,
    },
    nav_bar: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      logo: {
        resizeMode: "contain",
        width: 60,
        height: 60,
        borderRadius: 90,
        marginLeft: -120,
      },
      nav_text: {
        fontSize: 25,
        fontWeight: "bold",
        marginRight: 15,
      },
      user: {
        flex: 1,
        backgroundColor: "#BAFAD0",
        justifyContent: "flex-start", 
        alignItems: "center"
      },
      image1: {
        resizeMode: "contain",
        width: "70%",
        height: "30%",
        alignSelf:"center"

      },
      text1: {
        marginTop: 25,
        textAlign: "right",
      },
      username: {
        fontSize: 18,
        fontWeight: "bold",
      },
      text2: {
        marginTop :32,
        fontSize: 13,
        fontWeight: "bold"

      },
      container_1: {
        backgroundColor: "white",
        width: "70%",
        height: "5%",
        borderRadius: 20,
        marginTop: 25,
        justifyContent: "center",
      },
      notification: {
        fontSize: 14,
        textAlign: "left",
        marginLeft: 20,
        color: "rgba(0, 0, 0, 0.5)",

      },
      container_2: {
        backgroundColor: "white",
        width: "70%",
        height: "5%",
        borderRadius: 20,
        marginTop: 25,
        justifyContent: "center",
      },
      image_2: {
        resizeMode: "contain",
        width: "20%",
        height: "100%",
        marginLeft: 150,
      },
      container_3: {
        justifyContent: "center",
        alignItems: "center",
      },
      signoutbutton: {
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 55,
        borderRadius: 10,
        marginTop: 20,
      },
      signout_buttonText: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",

      },
      footer: {
        flexDirection: "row",
        backgroundColor: "white",
        width: "100%",
        height: 65,
        justifyContent: "center",
        alignItems: "center",
      },
      menu_img: {
        width: 40,
        height: 40,
        margin: 15,
      },

});
export default Pharmacy_Settings;