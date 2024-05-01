import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Switch } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { formatToLabel } from "../config/helper";
const config = require("../config/config");

const Petowner_Settings = ({ navigation }) => {
  const baseURL = config.DB_HOST + ":" + config.DB_PORT;

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
      {/* Navigation Bar */}
      <View style={styles.nav_bar}>
        {/*nav_bar container which contains the components related to create the navbar*/}
        <TouchableOpacity
          style={{ width: "20%" }}
          onPress={() => navigation.navigate("VetMenu")}
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

      {/* User Profile Section */}
      <View style={styles.user}>
        <Image
          source={require("../../AppPics/User_icon.png")}
          style={styles.image1}
        />
      </View>
      {/* User Details */}
      <View style={styles.text1}>
        <Text style={styles.username}>Marsh Smith</Text>
      </View>

      <View style={styles.text2}>
        <Text style={styles.email}>marshsmith@gmail.com</Text>
      </View>

      <View style={styles.notifications}>
        <View
          style={[
            styles.container_1,
            { backgroundColor: isEnabled ? "white" : "#ecfad9" },
          ]}
        >
          <Text style={styles.reminders}>Reminders</Text>
          <Switch
            disabled={!isEnabled}
            editable={!isEnabled}
            trackColor={{ false: "#767577", true: "#81b0ff" }} // Optional: Customize track color
            thumbColor={isEnabledReminder ? "#f5dd4b" : "#f4f3f4"} // Optional: Customize thumb color
            onValueChange={isEnabled ? toggleSwitchReminder : null} //function called when switch value changes
            value={isEnabledReminder} //value determining the state of the switch
            style={[{ marginRight: 10, marginTop: -25 }]}
          />
        </View>
      </View>

      {/* Sign Out Button */}
      <View style={styles.container_3}>
        <TouchableOpacity
          style={styles.signoutbutton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.signout_buttonText}>SIGN OUT</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("VetMenu")}>
          <Image
            source={require("../../AppPics/Footer_Menu.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
          <Image
            source={require("../../AppPics/Footer_Chat.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("VetPrescription")}
        >
          <Image
            source={require("../../AppPics/PharFooter_Prescription.png")}
            style={styles.prescription_img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("VetReminder")}>
          <Image
            source={require("../../AppPics/Footer_appointment.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("VetAvailability")}
        >
          <Image
            source={require("../../AppPics/Footer_VetAvailability.png")}
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
  email: {
    fontSize: 18,
  },
  text2: {
    marginTop: 10,
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
    // color: "rgba(0, 0, 0, 0.5)",
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
    alignItems: "center",
  },
  menu_img: {
    width: 40,
    height: 40,
    margin: 15,
  },
  prescription_img: {
    width: 50,
    height: 50,
    margin: 15,
  },
});
export default Petowner_Settings;
