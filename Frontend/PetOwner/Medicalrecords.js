//import necessary components from react native
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../config/AuthContext";
import { useRoute } from "@react-navigation/core";
import axios from "axios";
import { formatDateToYYYYMMDD, formatTimeToHHMM } from "../config/helper";
const config = require("../config/config");

//Medicalrecords component recieves a 'navigation' prop which allows to navigate between different screens in the app
const Medicalrecords = ({ navigation }) => {
  const baseURL = config.DB_HOST + ":" + config.DB_PORT;

  const { user, userID, userType } = useAuth();

  const [appointmentDate, setAppointmentDate] = useState();
  const [appointmentTime, setAppointmentTime] = useState();
  const [appointmentNo, setAppointmentNo] = useState();
  const [paidDate, setPaidDate] = useState();
  const [paidAmount, setPaidAmount] = useState();
  const [veterinaryClinicName, setVeterinaryClinicName] = useState();
  const [veterinaryClinicAddress, setVeterinaryClinicAddress] = useState();

  const route = useRoute();
  const appointmentID = route.params?.appointmentID;
  console.log("appointmentID----:  " + appointmentID);

  useEffect(() => {
    console.log("----useEffect----------");
    const fetchRecord = async () => {
      // const userObject = JSON.parse(user);
      axios
        .get(baseURL + `/appointmentData/${appointmentID}`)
        .then((res) => {
          console.log("\n----fetch res.data:  " + JSON.stringify(res.data));
          const appData = JSON.parse(JSON.stringify(res.data));
          console.log(
            "\n\nappData.veternarian.veterinaryClinicName:  " +
              appData.availability.veternarian.veterinaryClinicName
          );
          setAppointmentDate(appData.appointmentDate);
          setAppointmentTime(appData.appointmentTime);
          setAppointmentNo(appData.appointmentNo);
          setPaidDate(appData.paidDate);
          setPaidAmount(appData.paidAmount);
          setVeterinaryClinicName(
            appData.availability.veternarian.veterinaryClinicName
          );
          setVeterinaryClinicAddress(
            appData.availability.veternarian.veterinaryClinicAddress
          );
        })
        .catch((e) => console.log(e));
    };

    fetchRecord();
  }, []);

  const handlePress = () => {
    console.log("Button pressed");
  };
  return (
    <View style={styles.maincontainer}>
      {/*main container for the whole component*/}
      <View style={styles.nav_bar}>
        {/*nav_bar container which contains the components related to create the navbar*/}
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <Image
            source={require("../../AppPics/Logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.nav_text}>MEDICAL RECORDS</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Petowner_Settings")}
        >
          {/*navigating to the Petowner_Settings screen by clicking on the image*/}
          <Image
            source={require("../../AppPics/Setting.png")}
            style={styles.settings}
          />
          {/*adding an image*/}
        </TouchableOpacity>
      </View>

      <View style={styles.detailContainer2}>
        <View style={styles.topicContainer2}>
          <Text style={styles.topic_text}>Appointment Details</Text>
        </View>

        <View style={styles.detailContainer}>
          <View style={styles.eachDetail}>
            <Text style={styles.name}>Appointment Date</Text>
            <Text style={styles.Text_box}>
              {formatDateToYYYYMMDD(appointmentDate)}
            </Text>
          </View>
          <View style={styles.eachDetail}>
            <Text style={styles.name}>Appointment Time</Text>
            <Text style={styles.Text_box}>
              {formatTimeToHHMM(appointmentTime)}
            </Text>
          </View>
          <View style={styles.eachDetail}>
            <Text style={styles.name}>Appointment No</Text>
            <Text style={styles.Text_box}>{appointmentNo}</Text>
          </View>
          <View style={styles.eachDetail}>
            <Text style={styles.name}>Paid Date</Text>
            <Text style={styles.Text_box}>
              {formatDateToYYYYMMDD(paidDate)}
            </Text>
          </View>
          <View style={styles.eachDetail}>
            <Text style={styles.name}>Doctor Channelling Fee</Text>
            <Text style={styles.Text_box}>{paidAmount}</Text>
          </View>
          <View style={styles.eachDetail}>
            <Text style={styles.name}>Clinic Name</Text>
            <Text style={styles.Text_box}>{veterinaryClinicName}</Text>
          </View>
          <View style={styles.eachDetail}>
            <Text style={styles.name}>Clinic Address</Text>
            <Text style={styles.Text_box}>{veterinaryClinicAddress}</Text>
          </View>
        </View>
      </View>
      <View style={styles.detailContainer3}>
        <View style={styles.samplePrescription}>
          <TouchableOpacity onPress={() => navigation.navigate("Prescription")}>
            <Text style={styles.sampleText}>Digital prescription</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*creating the footer*/}
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
  nav_bar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain", //this ensures that the image fits within its container without strecting, maintaining its aspect ratio
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
    borderRadius: 90,
    marginLeft: 20,
  },
  maincontainer: {
    flex: 1, //fill the whole screen
    backgroundColor: "#CEEFA3",
    justifyContent: "space-between", // This ensures the footer is pushed to the bottom
    alignItems: "center",
    paddingTop: 30,
    width: "100%",
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
  detailContainer: {
    // backgroundColor: "#E6B4EB",
    position: "absolute",
    top: 100,
    //left: 20,
    width: "90%",
    height: "60%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  detailContainer2: {
    //flexDirection: "row",
    backgroundColor: "#E6B4EB",
    position: "absolute",
    top: 120,
    //left: 20,
    width: "90%",
    height: "45%",
    borderRadius: 20,
  },
  detailContainer3: {
    //flexDirection: "row",
    backgroundColor: "#E6B4EB",
    position: "absolute",
    top: 510,
    //left: 20,
    width: "90%",
    height: "20%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  topicContainer: {
    backgroundColor: "#3300FF",
    top: -85,
    width: "100%",
    height: 70,
    borderRadius: 20,
  },
  samplePrescription: {
    backgroundColor: "white",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    height: "30%",
    // top: -50,
    borderRadius: 20,
  },
  sampleText: {
    fontSize: 20,
    marginTop: 10,
  },
  topicContainer2: {
    backgroundColor: "#3300FF",
    top: -10,
    width: "100%",
    height: 70,
    borderRadius: 20,
  },
  topic_text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginTop: 18,
    marginLeft: 10,
  },
  Text_box: {
    marginLeft: "1%",
    width: "50%",
    borderRadius: 10,
    textAlign: "left",
    padding: 1,
    // fontWeight: "bold",
  },
  name: {
    marginLeft: "15%",
    width: "60%",
    fontSize: 16,
    padding: 10,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  eachDetail: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Medicalrecords;
