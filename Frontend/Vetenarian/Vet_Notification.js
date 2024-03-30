import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";

// Functional component for managing vet notifications
const Vet_Notification = ({ navigation }) => {
  const handlePress = () => {
    console.log("Button pressed");
  };

  // State to manage switch value
  const [isEnabledReminder, setIsEnabledReminder] = useState(false);
  // State to manage switch value 
  const [isEnabledAppReminder, setIsEnabledAppReminder] = useState(false);
  // Function to toggle the switch
  const toggleSwitchReminder = () =>
    setIsEnabledReminder((previousState) => !previousState);

  // Function to toggle the switch for appointment reminders
  const toggleSwitchAppReminder = () =>
    setIsEnabledAppReminder((previousState) => !previousState);

  return (
    <View style={styles.container}>
       {/* Navigation Bar */}
      <View style={styles.nav_bar}>
        {/* Button to navigate back to VetMenu */}
        <TouchableOpacity onPress={() => navigation.navigate("VetMenu")}>
          <Image
            source={require("../../AppPics/Logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.nav_text}>NOTIFICATIONS</Text>
      </View>

      {/* Container for notification settings */}
      <View style={styles.notifications}>
         {/* Container for general reminders */}
        <View style={styles.container_1}>
          <Text style={styles.reminders}>Reminders</Text>
          {/* Switch for toggling general reminders */}
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }} // Optional: Customize track color
            thumbColor={isEnabledReminder ? "#f5dd4b" : "#f4f3f4"} // Optional: Customize thumb color
            onValueChange={toggleSwitchReminder}
            value={isEnabledReminder}
            style={[styles.switch, { marginLeft: 120 }]}
          />
        </View>

        {/* Container for appointment reminders */}
        <View style={styles.container_2}>
          <Text style={styles.reminders_2}>Appointment Reminders</Text>
          {/* Switch for toggling appointment reminders */}
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }} // Optional: Customize track color
            thumbColor={isEnabledAppReminder ? "#f5dd4b" : "#f4f3f4"} // Optional: Customize thumb color
            onValueChange={toggleSwitchAppReminder}
            value={isEnabledAppReminder}
            style={[styles.switch, { marginLeft: 20 }]}
          />
        </View>
      </View>


      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("VetMenu")}>
          <Image
            source={require("../../AppPics/Footer_Menu.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        {/* Button to navigate to ReceivedMessages */}
        <TouchableOpacity
          onPress={() => navigation.navigate("ChatScreen")}
        >
          <Image
            source={require("../../AppPics/Footer_Chat.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        {/* Button to navigate to VetPrescription */}
        <TouchableOpacity
          onPress={() => navigation.navigate("VetPrescription")}
        >
          <Image
            source={require("../../AppPics/PharFooter_Prescription.png")}
            style={styles.prescription_img}
          />
        </TouchableOpacity>
        {/* Button to navigate to VetReminder */}
        <TouchableOpacity onPress={() => navigation.navigate("VetReminder")}>
          <Image
            source={require("../../AppPics/Footer_appointment.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        {/* Button to navigate to VetAvailability */}
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
    flexDirection: "row",
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
    margin: 20,
  },
});
export default Vet_Notification;
