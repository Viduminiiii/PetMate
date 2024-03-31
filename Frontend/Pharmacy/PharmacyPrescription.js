//importing necessary components from react native
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useAuth } from "../config/AuthContext";
import axios from "axios";
const config = require("../config/config");

//PharmacyPrescription component recieves a 'navigation' prop which allows to navigate between different screens in the app
const PharmacyPrescription = ({ navigation }) => {
  const baseURL = config.DB_HOST + ":" + config.DB_PORT;

  const { user, userID, userType } = useAuth();
  const [appData, setAppData] = useState([]);
  const [petname, setPetname] = useState();
  const [age, setAge] = useState();
  const [fullname, setFullname] = useState();
  const [veterinaryClinicName, setVeterinaryClinicName] = useState();
  const [veterinaryClinicAddress, setVeterinaryClinicAddress] = useState();
  const [medications, setMedication] = useState();
  const [instructions, setInstructions] = useState();

  useEffect(() => {
    const userObject = JSON.parse(user);
    console.log("userObject.userLevelId:  " + userObject.userLevelId);
    const userPharmacyID = userObject.userLevelId;
    console.log("---userID 1:  " + userPharmacyID);
    const userData = { userPharmacyID: userPharmacyID };
    console.log("userData:  " + JSON.stringify(userData));
    axios
      // .get(`${baseURL}/prescriptionData/${userPharmacyID}`)
      .post(baseURL + "/prescriptionData", userData)
      .then((response) => {
        const userObject2 = JSON.parse(JSON.stringify(response.data));
        console.log("userObject2: " + userObject2.length);
        setAppData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handlePress = () => {
    console.log("Button pressed");
    const petOwnersList = appData.map((appointment) => ({
      ownerId: appointment.appointments.petOwner._id,
      ownerName: appointment.appointments.petOwner.fullname,
      petName: appointment.appointments.petOwner.petname,
    }));

    // Display the pet owners list
    petOwnersList.forEach((owner) => {
      console.log(
        `${owner.ownerName} (${owner.ownerId}) - Pet: ${owner.petName}`
      );
    });
  };
  return (
    <View style={styles.maincontainer}>
      {/*main container for the whole component*/}
      <View style={styles.nav_bar}>
        {/*nav_bar container which contains the components related to create the navbar*/}
        <TouchableOpacity
          onPress={() => navigation.navigate("PharmacyPrescription")}
        >
          <Image
            source={require("../../AppPics/Logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <View style={styles.nav_bar2}>
          <Text style={styles.nav_text}>PHARMACY</Text>
          <Text style={styles.nav_text2}>PRESCRIPTIONS</Text>
        </View>
        {/*adding a text to display*/}
        <TouchableOpacity
          onPress={() => navigation.navigate("Pharmacy_Settings")}
        >
          {/*navigating to the Pharmacy_Settings screen by clicking*/}
          <Image
            source={require("../../AppPics/Setting.png")}
            style={styles.settings}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.topic_text}>
        <Text style={styles.topic_text}>Select a Prescription</Text>
      </View>
      {/* <TouchableOpacity onPress={handlePress}>
        <Text>LIST DATA</Text>
      </TouchableOpacity> */}

      <ScrollView style={styles.detailContainer}>
        <View style={styles.prescriptionsBox}>
          {appData &&
            appData.map((post) => (
              <TouchableOpacity
                key={post._id}
                onPress={() =>
                  navigation.navigate("AvailableMedicine", {
                    prescID: post._id,
                    medication: post.appointments.medications,
                    instruction: post.appointments.instructions,
                  })
                }
              >
                <View style={styles.topicContainer}>
                  <View style={styles.summary}>
                    <View style={styles.button_half_view_column}>
                      <Text style={styles.name}>
                        <Text style={styles.label}>Pet name:</Text>{" "}
                        {post.appointments.petOwner.petname}
                      </Text>
                    </View>
                    <View style={styles.button_half_view_column}>
                      <Text style={styles.name}>
                        <Text style={styles.label}> Age:</Text>{" "}
                        {post.appointments.petOwner.age}
                      </Text>
                    </View>
                    <View style={styles.button_half_view_column}>
                      <Text style={styles.name}>
                        <Text style={styles.label}>Pet owner name :</Text>{" "}
                        {post.appointments.petOwner.fullname}
                      </Text>
                    </View>
                    <View style={styles.button_half_view_column}>
                      <Text style={styles.name}>
                        <Text style={styles.label}>Clinic Name: </Text>
                        {
                          post.appointments.availability.veternarian
                            .veterinaryClinicName
                        }
                      </Text>
                    </View>
                    <View style={styles.button_half_view_column}>
                      <Text style={styles.name}>
                        <Text style={styles.label}>Clinic Address: </Text>
                        {
                          post.appointments.availability.veternarian
                            .veterinaryClinicAddress
                        }
                      </Text>
                    </View>
                    {/* <View style={styles.button_half_view_column}>
                      <Text style={styles.name}>
                      <Text style={styles.label}>Medications: </Text>{post.appointments.medications}
                      </Text>
                    </View>
                    <View style={styles.button_half_view_column}>
                      <Text style={styles.name}>
                      <Text style={styles.label}>Instructions:</Text> {post.appointments.instructions}
                      </Text>
                    </View> */}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
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
      </ScrollView>

      {/*creating the footer*/}
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PharmacyPrescription")}
        >
          <Image
            source={require("../../AppPics/PharFooter_Prescription.png")}
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
    flexDirection: "row", //arranging items of the container horizontally
    justifyContent: "center",
    alignItems: "center",
  },
  nav_bar2: {
    marginTop: 20,
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
    flex: 1,
    padding: 20,
  },
  topic_text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  prescriptionsBox: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  topicContainer: {
    width: "100%",
    backgroundColor: "#E6B4EB",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  button_1_2: {
    // flexDirection: "row",
    backgroundColor: "#CEEEEE",
    marginTop: 20,
  },
  data_Img: {
    width: "30%",
    textAlign: "left",
    margin: 5,
    marginStart: 5,
    marginLeft: 5,
    backgroundColor: "#CEEFA3",
  },
  summary: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 1,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    width: "100%",
  },
  button_half_view_column: {
    alignItems: "flex-start",
    margin: 5,
    marginLeft: 10,
    width: "100%",
    // backgroundColor: "yellow",
  },
  name: {
    fontSize: 14,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
export default PharmacyPrescription;
