import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const UserSearch = ({ navigation }) => {
  const handlePress = () => {
    console.log("Button pressed");
  };
  return (
    <View style={styles.page}>
      {/* Navigation bar */}
      <View style={styles.nav_bar}>
        {/* Logo */}
        <TouchableOpacity onPress={() => navigation.navigate("VetMenu")}>
          <Image
            source={require("../../AppPics/Logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.nav_text}>SELECT A PET OWNER</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Vet_Settings")}>
          <Image
            source={require("../../AppPics/Setting.png")}
            style={styles.settings}
          />
        </TouchableOpacity>
      </View>
      <View>
        {/* List of users */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Medicalrecordss")}
        >
          <View style={styles.user_btn}>
            <Text style={styles.user}>Anne</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Medicalrecordss")}
        >
          <View style={styles.user_btn}>
            <Text style={styles.user}>John</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Medicalrecordss")}
        >
          <View style={styles.user_btn}>
            <Text style={styles.user}>Peter</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Medicalrecordss")}
        >
          <View style={styles.user_btn}>
            <Text style={styles.user}>Atlas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Medicalrecordss")}
        >
          <View style={styles.user_btn}>
            <Text style={styles.user}>Lily</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Medicalrecordss")}
        >
          <View style={styles.user_btn}>
            <Text style={styles.user}>Oliver</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* Footer navigation */}
      <View style={styles.footer}>
        {/* Menu button */}
        <TouchableOpacity onPress={() => navigation.navigate("VetMenu")}>
          <Image
            source={require("../../AppPics/Footer_Menu.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        {/* Chat button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("ChatScreen")}
        >
          <Image
            source={require("../../AppPics/Footer_Chat.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        {/* Prescription button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("VetPrescription")}
        >
          <Image
            source={require("../../AppPics/PharFooter_Prescription.png")}
            style={styles.prescription_img}
          />
        </TouchableOpacity>
        {/* Appointment button */}
        <TouchableOpacity onPress={() => navigation.navigate("VetReminder")}>
          <Image
            source={require("../../AppPics/Footer_appointment.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        {/* Vet availability button */}
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
  page: {
    flex: 1, //fill the whole screen
    backgroundColor: "#CEEFA3",
    justifyContent: "space-between", // This ensures the footer is pushed to the bottom
    alignItems: "center",
    paddingTop: 10,
  },
  nav_bar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  logo: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    borderRadius: 90,
    marginRight: 20,
  },
  nav_text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  settings: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    marginLeft: 20,
  },
  user_btn: {
    backgroundColor: "#6B68F7",
    width: 320,
    height: 65,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  user: {
    fontSize: 25,
    color: "white",
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
  }
});
export default UserSearch;
