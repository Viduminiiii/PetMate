import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const PharmacyPrescription = ({ navigation }) => {
  const handlePress = () => {
    console.log("Button pressed");
  };
  return (
    <View style={styles.maincontainer}>
      <View style={styles.nav_bar}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PharmacyPrescription")}
        >
          <Image
            source={require("../PetMate/AppPics/Logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.nav_text}>PHARMACY</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Pharmacy_Settings")}
        >
          <Image
            source={require("../PetMate/AppPics/Setting.png")}
            style={styles.settings}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.nav_bar2}>
        <Text style={styles.nav_text2}>PRESCRIPTIONS</Text>
      </View>
      <View style={styles.topic_text}>
        <Text style={styles.topic_text}>Select a Prescription</Text>
      </View>
      <View style={styles.detailContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AvailableMedicine")}
        >
          <View style={styles.topicContainer}></View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("AvailableMedicine")}
        >
          <View style={styles.topicContainer2}></View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("AvailableMedicine")}
        >
          <View style={styles.topicContainer3}></View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("AvailableMedicine")}
        >
          <View style={styles.topicContainer4}></View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("AvailableMedicine")}
        >
          <View style={styles.topicContainer5}></View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("AvailableMedicine")}
        >
          <View style={styles.topicContainer6}></View>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PharmacyPrescription")}
        >
          <Image
            source={require("../PetMate/AppPics/PharFooter_Prescription.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => handlePress('Home')}>
                    <Image source={require ('../PetMate/AppPics/Footer_Menu.png')} style={styles.menu_img}/>
                </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={() => navigation.navigate('AvailableMedicine')}>
                    <Image source={require ('../PetMate/AppPics/PharFooter_Medicine.png')} style={styles.menu_img}/>
                </TouchableOpacity> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  nav_bar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  nav_bar2: {
    //flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    borderRadius: 90,
    marginRight: 50,
  },
  nav_text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -15,
  },
  nav_text2: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -450,
  },
  settings: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    borderRadius: 90,
    marginLeft: 50,
  },
  maincontainer: {
    flex: 1, //fill the whole screen
    backgroundColor: "#CEEFA3",
    justifyContent: "space-between", // This ensures the footer is pushed to the bottom
    alignItems: "center",
    paddingTop: 30,
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
    width: 50,
    height: 55,
    margin: 15,
  },
  detailContainer: {
    //flexDirection: "row",
    backgroundColor: "#E6B4EB",
    position: "absolute",
    top: 170,
    //left: 20,
    width: 365,
    height: '66%',
    borderRadius: 20,
  },
  topic_text: {
    //position: "absolute",
    //justifyContent: 'center',
    top: -170,
    marginLeft: -90,
    fontSize: 18,
    fontWeight: "bold",
  },
  topicContainer: {
    backgroundColor: "white",
    top: 30,
    width: 340,
    height: 60,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 20,
  },
  topicContainer2: {
    backgroundColor: "white",
    top: 50,
    width: 340,
    height: 60,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 20,
  },
  topicContainer3: {
    backgroundColor: "white",
    top: 70,
    width: 340,
    height: 60,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 20,
  },
  topicContainer4: {
    backgroundColor: "white",
    top: 88,
    width: 340,
    height: 60,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 20,
  },
  topicContainer5: {
    backgroundColor: "white",
    top: 110,
    width: 340,
    height: 60,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 20,
  },
  topicContainer6: {
    backgroundColor: "white",
    top: 130,
    width: 340,
    height: 60,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 20,
  },
});
export default PharmacyPrescription;
