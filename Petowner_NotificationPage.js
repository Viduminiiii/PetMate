import React, { Component, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";

const Petowner_NotificationPage = () => {
  const handlePress = () => {
    console.log("Button pressed");
  };
  return (
    <View style={styles.container}>
      <View style={styles.nav_bar}>
        <TouchableOpacity onPress={() => handlePress("Logo")}>
          <Image
            source={require("../PetMate/AppPics/Logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.nav_text}>NOTIFICATIONS</Text>
      </View>

        <View style={styles.notifications}>
          <View style={styles.container_1}>
            <TextInput style={styles.reminders}>Reminders</TextInput>
            <TouchableOpacity
              style={styles.notification_settings}
              onPress={handlePress}
            >
              <Image
                source={require("../PetMate/AppPics/Settings_Switch.png")}
                style={styles.image2}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.container_2}>
            <TextInput style={styles.reminders_2}>Appointment Reminders</TextInput>
            <TouchableOpacity
              style={styles.notification_settings}
              onPress={handlePress}
            >
              <Image
                source={require("../PetMate/AppPics/Settings_Switch.png")}
                style={styles.image3}
              />
            </TouchableOpacity>
          </View>
        </View>
      

        <View style={styles.footer}>
        <TouchableOpacity onPress={() => handlePress("Home")}>
          <Image
            source={require("../PetMate/AppPics/Footer_Menu.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Chat")}>
          <Image
            source={require("../PetMate/AppPics/Footer_Chat.png")}
            style={styles.menu_img}
          />
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
    flex: 1,
    backgroundColor: "#BAFAD0",
    justifyContent: "space-between",
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
    marginLeft: -80,
  },
  nav_text: {
    fontSize: 25,
    fontWeight: "bold",
    marginRight: -30,
  },
  logo2: {
    marginBottom: 620,
  },
  image1: {
    width: 300,
    height: 300,
  },
  notifications:{
    marginTop: -350
  },
  container_1: {
    backgroundColor: "white",
    width: 300,
    height: 50,
    borderRadius: 20,
    flexDirection: "row",
  },
  reminders: {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 30,
  },
  image2: {
    width: 50,
    height: "100%",
    marginLeft: 120,
  },
  container_2: {
    backgroundColor: "white",
    width: 300,
    height: 50,
    borderRadius: 20,
    marginTop: 25,
    flexDirection: "row",
  },
  reminders_2: {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 20,
  },
  image3: {
    width: 50,
    height: "100%",
    marginLeft: 20,
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
export default Petowner_NotificationPage;
