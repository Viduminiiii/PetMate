//importing necessary components from react native
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../config/AuthContext";
import { Switch } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { formatToLabel } from "../config/helper";
const config = require("../config/config");

//Pharmacy_Settings component recieves a 'navigation' prop which allows to navigate between different screens in the app
const Pharmacy_Settings = ({ navigation }) => {
  const baseURL = config.DB_HOST + ":" + config.DB_PORT;
  // console.log("baseURL: " + baseURL);

  const { user, userID, userType, logout } = useAuth();
  const [appData, setAppData] = useState([]);
  const [isEnabledReminder, setIsEnabledReminder] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  // Function to toggle the switch
  const toggleSwitchReminder = () =>
    setIsEnabledReminder((previousState) => !previousState);

  const toggleTextInput = () => {
    if (isEnabled) {
      console.log("  ----1---isEnabled: " + isEnabled);
      // UpdateData();
    }
    setIsEnabled(!isEnabled); // Toggle the value of isEnabled
  };
  const handlePress = () => {
    console.log("Button pressed");
  };
  return (
    <View style={styles.container}>
      {/*main container for the whole component*/}
      <View style={styles.nav_bar}>
        {/*nav_bar container which contains the components related to create the navbar*/}
        <TouchableOpacity
          style={{ width: "20%" }}
          onPress={() => navigation.navigate("PharmacyPrescription")}
        >
          <Image
            source={require("../../AppPics/Logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.nav_text}>SETTINGS</Text>
        <TouchableOpacity
          style={{ width: "20%" }}
          onPress={() => toggleTextInput()}
        >
          {!isEnabled ? (
            <Text>
              <Feather name="edit" size={50} color="black" />
            </Text>
          ) : (
            <Text>
              <Feather name="save" size={50} color="black" />
            </Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.user}>
        <Image
          source={require("../../AppPics/User_icon.png")}
          style={styles.image1}
        />
      </View>

      <View style={styles.text1}>
        <Text style={styles.username}>Marsh Smith</Text>
        {/*adding a text to display*/}
      </View>

      <View style={styles.text2}>
        <Text style={styles.email}>marshsmith@gmail.com</Text>
      </View>

      <View style={styles.container_3}>
        {/*creating the sign out button*/}
        <TouchableOpacity
          style={styles.signoutbutton}
          onPress={() => navigation.navigate("Login")}
        >
          {/*naviagting to the login screen by clicking*/}
          <Text style={styles.signout_buttonText}>SIGN OUT</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        {/*creating the footer*/}
        <TouchableOpacity
          onPress={() => navigation.navigate("PharmacyPrescription")}
        >
          <Image
            source={require("../../AppPics/PharFooter_Prescription.png")}
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
    paddingTop: 30, //adds padding from the top of the container
  },
  nav_bar: {
    flexDirection: "row", //arranges items of the container horizontally to place in a row
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    borderRadius: 90,
    marginLeft: 10,
  },
  nav_text: {
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 15,
    textAlign: "center",
    width: "50%",
  },
  user: {
    padding: 10,
    marginTop: 10,
  },
  image1: {
    width: 100,
    height: 100,
  },
  text1: {
    marginTop: 20,
    textAlign: "right",
    borderStyle: "solid",
    marginBottom: 20,
  },
  username: {
    fontSize: 25,
    fontWeight: "bold",
  },
  text2: {
    marginTop: 10,
    fontSize: 20,
  },
  notifications_btns: {
    marginTop: -30,
  },
  container_2: {
    backgroundColor: "white",
    width: 350,
    height: "25%",
    borderRadius: 20,
    flexDirection: "row",
  },
  dark_mode: {
    fontSize: 18,
    marginLeft: 30,
    marginTop: 12,
  },
  image_2: {
    width: 55,
    height: "80%",
    marginLeft: 150,
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
    width: 50,
    height: 55,
    margin: 15,
  },
});
export default Pharmacy_Settings;
