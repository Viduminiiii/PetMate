//importing necessary components from react native
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

//PetOwnerMenu component recieves a 'navigation' prop which allows to navigate between different screens in the app
const PetOwnerMenu = ({ navigation }) => {
  const handlePress = () => {
    console.log("Button pressed");
  };
  return (
    <View style={styles.page}>
      {/*main container which contains all the components*/}
      <View style={styles.nav_bar}>
        {/*nav_bar container which contains the components related to create the navbar*/}
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <Image
            source={require("../../AppPics/Logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.nav_text}>MENU</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Reminders")}>
          {/*navigating to the Reminders screen by clicking on the reminder image*/}
          <Image
            source={require("../../AppPics/Reminder.png")}
            style={styles.reminder}
          />
          {/*adding an image*/}
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Chat")}
          style={styles.button}
        >
          <View style={styles.chat}>
            <View
              style={[
                styles.halfView1,
                { backgroundColor: "#6B68F7" },
                { borderTopLeftRadius: 15 },
                { borderBottomLeftRadius: 15 },
              ]}
            >
              <Image
                source={require("../../AppPics/Menu_ChatDoc.png")}
                style={styles.chatDoc_image}
              />
            </View>
            <View
              style={[
                styles.halfView2,
                { backgroundColor: "#3300FF" },
                { borderTopRightRadius: 15 },
                { borderBottomRightRadius: 15 },
              ]}
            >
              <Text style={styles.text1}>Chat with a Doctor</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("LocateVetClinics")}
          style={styles.button}
        >
          <View style={styles.vet}>
            <View
              style={[
                styles.halfView1,
                { backgroundColor: "#6B68F7" },
                { borderTopLeftRadius: 15 },
                { borderBottomLeftRadius: 15 },
              ]}
            >
              <Image
                source={require("../../AppPics/Menu_VetClinic.png")}
                style={styles.owner_image}
              />
            </View>
            <View
              style={[
                styles.halfView2,
                { backgroundColor: "#3300FF" },
                { borderTopRightRadius: 15 },
                { borderBottomRightRadius: 15 },
              ]}
            >
              <Text style={styles.text1}>Veterinary clinics</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("DocChannelling")}
          style={styles.button}
        >
          <View style={styles.channelling}>
            <View
              style={[
                styles.halfView1,
                { backgroundColor: "#6B68F7" },
                { borderTopLeftRadius: 15 },
                { borderBottomLeftRadius: 15 },
              ]}
            >
              <Image
                source={require("../../AppPics/Menu_Channeling.png")}
                style={styles.channelling_image}
              />
            </View>
            <View
              style={[
                styles.halfView2,
                { backgroundColor: "#3300FF" },
                { borderTopRightRadius: 15 },
                { borderBottomRightRadius: 15 },
              ]}
            >
              <Text style={styles.text1}>Doctor channelling</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("LocatePharmacy")}
          style={styles.button}
        >
          <View style={styles.pharmacy}>
            <View
              style={[
                styles.halfView1,
                { backgroundColor: "#6B68F7" },
                { borderTopLeftRadius: 15 },
                { borderBottomLeftRadius: 15 },
              ]}
            >
              <Image
                source={require("../../AppPics/Menu_Pharmacy.png")}
                style={styles.phar_image}
              />
            </View>
            <View
              style={[
                styles.halfView2,
                { backgroundColor: "#3300FF" },
                { borderTopRightRadius: 15 },
                { borderBottomRightRadius: 15 },
              ]}
            >
              <Text style={styles.text1}>Pharmacy</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1, //fill the whole screen
    backgroundColor: "#CEEFA3",
    justifyContent: "flex-start", //start from the top
    alignItems: "center",
  },
  nav_bar: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 20,
  },
  logo: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    // alignSelf: 'flex-start', // Center the image horizontally
    // paddingLeft: 30,
    // paddingRight: 30,
    borderRadius: 90,
    marginRight: 45,
  },
  nav_text: {
    fontSize: 35,
    fontWeight: "bold",
    // alignSelf: 'center'
  },
  reminder: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    // alignSelf: 'flex-start', // Center the image horizontally
    // paddingLeft: 30,
    // paddingRight: 30,
    borderRadius: 90,
    marginLeft: 45,
  },
  chat: {
    flexDirection: "row", // Use 'column' for vertical split
    height: "40%",
    width: "90%",
  },
  vet: {
    flexDirection: "row", // Use 'column' for vertical split
    height: "38%",
    width: "90%",
    marginTop: 3,
  },
  channelling: {
    flexDirection: "row", // Use 'column' for vertical split
    height: "37%",
    width: "90%",
  },
  pharmacy: {
    flexDirection: "row", // Use 'column' for vertical split
    height: "37%",
    width: "90%",
  },
  halfView1: {
    justifyContent: "center",
    alignItems: "center",
    width: "35%",
  },
  halfView2: {
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
  },
  chatDoc_image: {
    width: "70%",
    height: "70%",
  },
  owner_image: {
    width: "90%",
    height: "90%",
  },
  channelling_image: {
    width: "80%",
    height: "80%",
  },
  phar_image: {
    width: "80%",
    height: "80%",
  },
  text1: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    alignItems: "center",
    width: "90%",
    height: 350,
    marginVertical: -220,
    marginTop: 40,
  },
});

export default PetOwnerMenu;
