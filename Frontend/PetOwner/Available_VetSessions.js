import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useAuth } from "../config/AuthContext";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { formatDateToYYYYMMDD, formatTimeToHHMM } from "./../config/helper";
const config = require("./../config/config");

const Available_VetSessions = ({ navigation }) => {
  const baseURL = config.DB_HOST + ":" + config.DB_PORT;
  // console.log("baseURL: " + baseURL);
  const route = useRoute();
  const { searchVetID } = route.params;

  const { user, userID, userType } = useAuth();
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    console.log(
      "---------user 1:  " +
        user +
        " -- userType:  " +
        userType +
        " - searchVetID: " +
        searchVetID
    );

    const userObject = JSON.parse(user);
    console.log("userObject.userLevelId:  " + userObject.userLevelId);
    const userLevelId = userType == 2 ? userObject.userLevelId : searchVetID; //'65f4a034cb90355cdc1f8c20';
    console.log("---userID 2:  " + userLevelId);
    const userData = { vet_id: userLevelId };

    axios
      .post(baseURL + "/vetAvailability", userData)
      .then((response) => {
        // console.log("---userID 4:  " + JSON.stringify(response.data));
        setAppData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handlePress = () => {
    console.log("Button pressed");
  };
  return (
    <View style={styles.container}>
      <View style={styles.nav_bar}>
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <Image
            source={require("../../AppPics/Logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <View style={styles.nav_text_container}>
          <Text style={styles.nav_text}>AVAILABLE</Text>
          <Text style={styles.nav_text}>SESSIONS</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Petowner_Settings")}
        >
          <Image
            source={require("../../AppPics/Setting.png")}
            style={styles.settings}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.screen}>
        {appData &&
          appData.map((post) => (
            <View key={post._id}>
              <View style={styles.summary}>
                <View style={styles.abc_clinic}>
                  <View style={styles.pic1}>
                    <Image
                      source={require("../../AppPics/ABC_vet clinic.png")}
                      style={[styles.clinic1, , { marginBottom: 0 }]}
                    />
                  </View>
                  <View style={styles.content2}>
                    <Text style={styles.text1}>
                      {post.veternarian.veterinaryClinicName}
                    </Text>
                    <Text style={styles.text1_1}>
                      {post.veternarian.veterinaryClinicAddress}
                    </Text>
                    <Text style={styles.text1_1}>
                      {formatDateToYYYYMMDD(post.availableDate)}{" "}
                      {formatTimeToHHMM(post.timeFrom)}
                    </Text>
                    {/* <Text style={styles.text1_1}>{formatTimeToHHMM(post.timeFrom)}</Text> */}
                    <Text style={styles.text1_1}>{post.noofPatients}</Text>
                    <Text style={styles.text1_1}>
                      Doctor Fee: {post.doctorCharges}
                    </Text>
                    <Text style={styles.text1_1}>
                      Service Fee: {post.serviceCharges}
                    </Text>
                    <Text style={styles.text1_1}>
                      Last Appointment No: {post.lastAppNo}
                    </Text>
                    <View style={styles.container2}>
                      {userType == 2 && (
                        <TouchableOpacity
                          style={styles.book_button}
                          onPress={() =>
                            navigation.navigate("History", {
                              searchAvlID: post._id,
                            })
                          }
                        >
                          <Text style={styles.bookButtonText}>
                            APPOINTMENTS
                          </Text>
                        </TouchableOpacity>
                      )}
                      {userType == 1 && (
                        <TouchableOpacity
                          style={styles.book_button}
                          onPress={() =>
                            navigation.navigate("Payment_1", {
                              vetAvlID: post._id,
                            })
                          }
                        >
                          <Text style={styles.bookButtonText}>BOOK NOW</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
      </ScrollView>

      {userType == 1 && (
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
          <TouchableOpacity
            onPress={() => navigation.navigate("DocChannelling")}
          >
            <Image
              source={require("../../AppPics/Footer_appointment.png")}
              style={styles.menu_img}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Medicalrecords")}
          >
            <Image
              source={require("../../AppPics/Footer_medicalRecords.png")}
              style={styles.menu_img}
            />
          </TouchableOpacity>
        </View>
      )}
      {userType == 2 && (
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate("VetMenu")}>
            <Image
              source={require("../../AppPics/Footer_Menu.png")}
              style={styles.menu_img}
            />
          </TouchableOpacity>
          {/* Button to navigate to ReceivedMessages */}
          <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
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
      )}
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
    paddingHorizontal: 20,
  },
  nav_bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  logo: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    borderRadius: 90,
    marginRight: 10,
  },
  nav_text_container: {
    flexDirection: "column",
    alignItems: "center",
  },
  settings: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    borderRadius: 90,
    marginLeft: 10,
  },
  nav_text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  abc_clinic: {
    flexDirection: "row",
    height: "60%",
    width: "100%",
  },
  pic1: {
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    height: "100%",
    marginTop: 30,
  },
  content2: {
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: "165%",
    backgroundColor: "#E6B4EB",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  text1: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  text1_1: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
  },
  book_button: {
    backgroundColor: "#7986CB",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  bookButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  clinic1: {
    width: "100%",
    height: "100%",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    backgroundColor: "white",
    height: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  menu_img: {
    width: 40,
    height: 40,
    margin: 15,
  },
  screen: {
    margin: 1,
    // backgroundColor: "#E6B4EB",
    marginBottom: 67,
  },
  summary: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 1,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  prescription_img: {
    width: 50,
    height: 50,
    margin: 15,
  },
});
export default Available_VetSessions;
