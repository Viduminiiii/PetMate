//importing necessary components from react native
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";

//Petowner_NotificationPage component recieves a 'navigation' prop which allows to navigate between different screens in the app
const Petowner_NotificationPage = ({ navigation }) => {
  const handlePress = () => {
    console.log("Button pressed");
  };
  // State to manage switch value
  const [isEnabledReminder, setIsEnabledReminder] = useState(false);
  const [isEnabledAppReminder, setIsEnabledAppReminder] = useState(false);
  // Function to toggle the switch
  const toggleSwitchReminder = () =>
    setIsEnabledReminder((previousState) => !previousState);
  const toggleSwitchAppReminder = () =>
    setIsEnabledAppReminder((previousState) => !previousState);

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
        <Text style={styles.nav_text}>NOTIFICATIONS</Text>
        {/*adding a text to display*/}
      </View>

      <View style={styles.notifications}>
        <View style={styles.container_1}>
          <Text style={styles.reminders}>Reminders</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }} // Optional: Customize track color
            thumbColor={isEnabledReminder ? "#f5dd4b" : "#f4f3f4"} // Optional: Customize thumb color
            onValueChange={toggleSwitchReminder} //function called when switch value changes
            value={isEnabledReminder} //value determining the state of the switch
            style={[styles.switch, { marginLeft: 120 }]}
          />
        </View>

        <View style={styles.container_2}>
          <Text style={styles.reminders_2}>Appointment Reminders</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }} // Optional: Customize track color
            thumbColor={isEnabledAppReminder ? "#f5dd4b" : "#f4f3f4"} // Optional: Customize thumb color
            onValueChange={toggleSwitchAppReminder}
            value={isEnabledAppReminder}
            style={[styles.switch, { marginLeft: 20 }]}
          />
        </View>
      </View>

      <View style={styles.footer}>
        {/*creating the footer*/}
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
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
  notifications: {
    marginTop: -350,
  },
  container_1: {
    backgroundColor: "white",
    width: 300,
    height: 50,
    borderRadius: 20,
    flexDirection: "row", //aligning items horizontally
  },
  reminders: {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 30,
    marginTop: 12,
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
    marginTop: 12,
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
    alignItems: "center", //aligning items at center vertically
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
