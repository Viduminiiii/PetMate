//importing necessary components from react native
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

//Petowner_Settings component recieves a 'navigation' prop which allows to navigate between different screens in the app
const Petowner_Settings = ({ navigation }) => {
  const handlePress = () => {
    console.log("Button pressed");
  };

  return (
    <View style={styles.container}>
      {/*main container for the whole component*/}
      <View style={styles.nav_bar}>
        {/*nav_bar container which contains the components related to create the navbar*/}
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <Image
            source={require("../../AppPics/Logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.nav_text}>SETTINGS</Text>
        {/*adding a text to display*/}
      </View>

      <View style={styles.user}>
        <Image
          source={require("../../AppPics/User_icon.png")}
          style={styles.image1}
        />
        {/*inserting an image*/}
      </View>

      <View style={styles.text1}>
        <Text style={styles.username}>Marsh Smith</Text>
      </View>

      <View style={styles.text2}>
        <Text style={styles.email}>marshsmith@gmail.com</Text>
      </View>

      <View style={styles.notification_btns}>
        <View style={styles.container_1}>
          <TouchableOpacity
            style={styles.text_input3}
            onPress={() => navigation.navigate("Petowner_NotificationPage")}
          >
            <Text style={styles.notification}>Notifications</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container_3}>
        <TouchableOpacity
          style={styles.signoutbutton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.signout_buttonText}>SIGN OUT</Text>
        </TouchableOpacity>
      </View>

      {/*creating the footer*/}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <Image
            source={require("../../AppPics/Footer_Menu.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Image
            source={require("../../AppPics/Footer_Chat.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("LocateVetClinics")}
        >
          <Image
            source={require("../../AppPics/Footer_VetClinic.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("DocChannelling")}>
          <Image
            source={require("../../AppPics/Footer_appointment.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Medicalrecords")}>
          <Image
            source={require("../../AppPics/Footer_medicalRecords.png")}
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
    backgroundColor: "#CEEFA3",
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
    marginLeft: -120,
  },
  nav_text: {
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 15,
  },
  user: {
    marginBottom: 620,
  },
  image1: {
    width: 100,
    height: 100,
  },
  text1: {
    marginTop: -650,
    textAlign: "right",
  },
  username: {
    fontSize: 25,
    fontWeight: "bold",
  },
  email: {
    fontSize: 18,
  },
  text2: {
    marginTop: -25,
    fontSize: 20,
  },
  notification_btns: {
    marginTop: -30,
  },
  container_1: {
    backgroundColor: "white",
    width: 300,
    height: 50,
    borderRadius: 20,
    marginTop: 50,
    justifyContent: "center",
  },
  notification: {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 30,
  },
  container_2: {
    backgroundColor: "white",
    width: 300,
    height: 50,
    borderRadius: 20,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
  dark_mode: {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 30,
    marginTop: 12,
  },
  image_2: {
    resizeMode: "contain",
    width: 55,
    height: "90%",
    marginLeft: 120,
    marginTop: 3,
  },
  container_3: {
    justifyContent: "center",
    alignItems: "center",
  },
  signoutbutton: {
    backgroundColor: "#F2E5E5",
    paddingVertical: 15,
    paddingHorizontal: 55,
    borderRadius: 20,
    marginTop: 20,
  },
  signout_buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    height: 65,
    justifyContent: "center",
    alignItems: "center", //aligning items at center vertically
  },
  menu_img: {
    width: 40,
    height: 40,
    margin: 15,
  },
});
export default Petowner_Settings;
