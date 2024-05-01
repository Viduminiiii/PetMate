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
import { Fontisto } from "@expo/vector-icons";
import axios from "axios";
import { formatDateToYYYYMMDD, formatTimeToHHMM } from "../config/helper";
const config = require("../config/config");

const Available_VetSessions = ({ navigation }) => {
  const baseURL = config.DB_HOST + ":" + config.DB_PORT;
  // console.log("baseURL: " + baseURL);
  const route = useRoute();
  const { searchAvlID } = route.params;

  const { user, userID, userType } = useAuth();
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    console.log(
      "---------user 1:  " +
        user +
        " -- userType:  " +
        userType +
        " - searchAvlID: " +
        searchAvlID
    );

    const userObject = JSON.parse(user);
    // console.log("userObject.userLevelId:  " + userObject.userLevelId);
    const userLevelId = userType == 1 ? userObject.userLevelId : searchAvlID;
    // if(searchAvlID == 1)
    // {
    //   alert("Prescription send to pharmacy.")
    // }
    console.log(
      "---userID 2:  " + userLevelId + "  searchAvlID:  " + searchAvlID
    );
    const userData = { searchID: userLevelId, userType: userType };
    console.log(
      "URL: ---------   " +
        baseURL +
        "/appointmentsData  " +
        JSON.stringify(userData)
    );

    axios
      .post(baseURL + "/appointmentsData", userData)
      .then((response) => {
        console.log("---userID 4:  " + JSON.stringify(response.data));
        
      // const userObject2 = JSON.parse(response.data);
      console.log("\n\nresponse.data:  " + response.data);
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
          <Text style={styles.nav_text}>PHARMACY</Text>
          <Text style={styles.nav_text}>FEEDBACK</Text>
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
            <View style={styles.summary} key={post._id}>
              <View style={styles.abc_clinic}>
                <View style={styles.pic1}>
                  <Fontisto name="date" size={55} color="black" />
                </View>
                <View style={styles.content2}>
                  <View style={styles.vetDetails}>
                    <View style={styles.dataRow}>
                      <Text style={styles.text1}>Appointment Date:</Text>
                      <Text style={styles.text1_1}>
                        {formatDateToYYYYMMDD(post.appointmentDate)}
                      </Text>
                    </View>
                    <View style={styles.dataRow}>
                      <Text style={styles.text1}>Appointment Time:</Text>
                      <Text style={styles.text1_1}>
                        {formatTimeToHHMM(post.appointmentTime)}
                      </Text>
                    </View>
                    <View style={styles.dataRow}>
                      <Text style={styles.text1}>Appointment No:</Text>
                      <Text style={styles.text1_1}>{post.appointmentNo}</Text>
                    </View>
                  </View>
                  {userType == 1 && (
                    <View style={styles.vetDetails}>
                      <View style={styles.dataRow}>
                        <Text style={styles.text1}>Clinic Name:</Text>
                        <Text style={styles.text1_1}>
                          {post.availability.veternarian.veterinaryClinicName}
                        </Text>
                      </View>
                      <View style={styles.dataRow}>
                        <Text style={styles.text1}>Clinic Address:</Text>
                        <Text style={styles.text1_1}>
                          {
                            post.availability.veternarian
                              .veterinaryClinicAddress
                          }
                        </Text>
                      </View>
                      <View style={styles.dataRow}>
                        <Text style={styles.text1}>
                          Appointments Start time:
                        </Text>
                        <Text style={styles.text1_1}>
                          {formatTimeToHHMM(post.availability.timeFrom)}
                        </Text>
                      </View>
                      <View style={styles.dataRow}>
                        <Text style={styles.text1}>Doctor Fee:</Text>
                        <Text style={styles.text1_1}>
                          {post.availability.doctorCharges}
                        </Text>
                      </View>
                      <View style={styles.dataRow}>
                        <Text style={styles.text1}>Service Fee:</Text>
                        <Text style={styles.text1_1}>
                          {post.availability.serviceCharges}
                        </Text>
                      </View>
                    </View>
                  )}
                  {userType == 2 && (
                    <View style={styles.vetDetails}>
                      <View style={styles.dataRow}>
                        <Text style={styles.text1}>Pet owner Name:</Text>
                        <Text style={styles.text1_1}>
                          {post.petOwner.fullname}
                        </Text>
                      </View>
                      <View style={styles.dataRow}>
                        <Text style={styles.text1}>Pet name:</Text>
                        <Text style={styles.text1_1}>
                          {post.petOwner.petname}
                        </Text>
                      </View>
                      <View style={styles.dataRow}>
                        <Text style={styles.text1}>Pet age:</Text>
                        <Text style={styles.text1_1}>{post.petOwner.age}</Text>
                      </View>
                    </View>
                  )}
                  <View style={styles.container2}>
                    <TouchableOpacity
                      style={styles.book_button}
                      onPress={() => {navigation.navigate("VetPrescription", {
                              appointID: post._id,
                            });
                      }}
                    >
                      <Text style={styles.bookButtonText}>
                        {userType == 2 ? "Create Prescription" : "View Prescription"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
      </ScrollView>

      {userType == 2 && (
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate("VetMenu")}>
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
          {/* <TouchableOpacity
            onPress={() => navigation.navigate("LocateVetClinics")}
          >
            <Image
              source={require("../../AppPics/Footer_VetClinic.png")}
              style={styles.menu_img}
            />
          </TouchableOpacity> */}
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
      {userType == 1 && (
        <View style={styles.footer}>
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
          <TouchableOpacity
            onPress={() => navigation.navigate("DocChannelling")}
          >
            <Image
              source={require("../../AppPics/Footer_appointment.png")}
              style={styles.menu_img}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("History", {searchAvlID:1})}
          >
            <Image
              source={require("../../AppPics/Footer_medicalRecords.png")}
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
    width: "25%",
    height: "100%",
    marginTop: 30,
  },
  content2: {
    justifyContent: "center",
    width: "100%",
    height: "165%",
    backgroundColor: "#E6B4EB",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  text1: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    paddingRight: 15,
  },
  text1_1: {
    color: "black",
    fontSize: 14,
    // fontWeight: "bold",
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  book_button: {
    backgroundColor: "#7986CB",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    width: "80%",
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
    // margin: 1,
    // backgroundColor: "#aaaaaa",
    marginBottom: 67,
    width: "100%",
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
    width: "100%",
  },
  vetDetails: {
    marginLeft: 10,
    // backgroundColor: "#ffffff",
    marginTop: 2,
  },
  dataRow: {
    flexDirection: "row",
  },
});
export default Available_VetSessions;
