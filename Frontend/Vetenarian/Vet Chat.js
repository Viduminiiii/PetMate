import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

const VetChat = ({ navigation }) => {
  const handlePress = () => {
    console.log("Button pressed");
  };
  return (
    <View style={styles.container}>
      <View style={styles.nav_bar}>
        <TouchableOpacity onPress={() => navigation.navigate("VetMenu")}>
          <Image
            source={require("../../AppPics/Logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.nav_text}>CHAT</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Vet_Settings")}>
          <Image
            source={require("../../AppPics/Setting.png")}
            style={styles.settings}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.blueBox}>
        <Text style={styles.blueBoxText}>Pet owner name</Text>
      </View>
      <View style={styles.page1}>
        {/* <View style={{ flex: 1 }} />  */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Type your message here"
          />
          {/* <TouchableOpacity>
            <Image
              source={require("../../AppPics/Chat_Mic.png")}
              style={styles.inputImage1}
            />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
            <Image
              source={require("../../AppPics/Chat_Send.png")}
              style={styles.inputImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("VetMenu")}>
          <Image
            source={require("../../AppPics/Footer_Menu.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ChatScreen")}
        >
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
    flex: 1, //fill the whole screen
    backgroundColor: "#CEEFA3",
    justifyContent: "flex-start", //start from the top
    alignItems: "center",
    paddingTop: 30,
  },
  text: {
    fontSize: 20,
  },
  nav_bar: {
    flexDirection: "row",
  },
  logo: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    borderRadius: 90,
    marginRight: 90,
  },
  settings: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    borderRadius: 90,
    marginLeft: 90,
  },
  page1: {
    backgroundColor: "white",
    width: "93%",
    height: "73%",
    borderRadius: 5,
    alignItems: "center",
  },
  blueBox: {
    backgroundColor: "#6B68F7",
    width: "93%",
    height: "8%", // Adjust height as needed
    marginTop: 20, // Add margin here
    borderRadius: 5,
  },
  blueBoxText: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 14,
  },
  inputText: {
    width: "72%",
    height: 45,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 10,
    fontWeight: "bold",
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 540,
  },
  inputImage: {
    width: 40,
    height: 40,
  },
  inputImage1: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
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
  nav_text: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10, // Adjusted margin
  },
});
export default VetChat;
