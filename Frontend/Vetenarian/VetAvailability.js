import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import DatePicker from "react-native-date-picker";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";
import { useAuth } from "../config/AuthContext";
const config = require("./../config/config");

const VetAvailability = ({ navigation }) => {
  const baseURL = config.DB_HOST + ":" + config.DB_PORT;
  // console.log("baseURL: " + baseURL);

  const { user } = useAuth();
  const [availableDate, setAvailableDate] = useState(new Date());
  const [timeFrom, setTimeFrom] = useState(new Date());
  const [timeTo, setTimeTo] = useState(new Date());
  const [noofPatients, setNoOfPatients] = useState();
  const [doctorCharges, setDoctorCharges] = useState();
  const [serviceCharges, setServiceCharges] = useState();

  const handlePress = () => {
    console.log("Button pressed");
    const userData = {
      availableDate,
      timeFrom,
      timeTo,
      noofPatients,
      doctorCharges,
      serviceCharges,
      vet_id: (JSON.parse(user)).userLevelId,
    };
    // console.log("userData:  " + JSON.stringify(userData));
    axios
      .post(baseURL + "/availability", userData)
      .then((res) => {
        // console.log("---------------res.data:   " + JSON.stringify(res.data));
        if (res.data.status === "ok")        
    // console.log("---------ok------------:  ");
          navigation.navigate("Available_VetSessions");
      })
      .catch((e) => console.log(e));
  };

  return (
    <View style={styles.page}>
      <View style={styles.nav_bar}>
        <TouchableOpacity onPress={() => navigation.navigate("VetMenu")}>
          <Image
            source={require("../../AppPics/Logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.nav_text}>AVAILABILITY</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Vet_Settings")}>
          <Image
            source={require("../../AppPics/Setting.png")}
            style={styles.settings}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.details_container}>
          <View style={styles.details}>
            <Text style={styles.details_text}>Date</Text>
            <View style={styles.date_container}>
              <DatePicker
                style={styles.datePickerStyle}
                date={availableDate}
                mode="date"
                placeholder="select date"
                format="DD/MM/YYYY"
                minDate="01-01-1900"
                maxDate="01-01-2100"
                onDateChange={(date) => {
                  setAvailableDate(date);
                }}
                onChangeText={(text) => setAvailableDate(text)}
              />
            </View>
          </View>
          <View style={styles.details}>
            <Text style={styles.details_text}>Time</Text>
            <View style={styles.time_container}>
              <DatePicker
                style={styles.timePickerStyleTo}
                mode="time" // Set mode to "time" for time picker
                date={timeFrom} // Use the time state here
                onDateChange={setTimeFrom} // Update the time state on change
                is24hourSource="locale" // Optionally, use 24-hour or 12-hour format based on locale
                onChangeText={(text) => setTimeFrom(text)}
              />
              <View style={styles.container2}>
                <Text style={styles.to_text}>TO</Text>
              </View>
              <DatePicker
                style={styles.timePickerStyleTo}
                mode="time" // Set mode to "time" for time picker
                date={timeTo} // Use the time state here
                onDateChange={setTimeTo} // Update the time state on change
                is24hourSource="locale" // Optionally, use 24-hour or 12-hour format based on locale
                onChangeText={(text) => setTimeFrom(text)}
              />
            </View>
          </View>
          <View style={styles.details}>
            <Text style={styles.details_text}>No. of patients</Text>
            <View style={styles.chargesContainer}>
              <TextInput
                style={styles.charges}
                onChangeText={(text) => setNoOfPatients(text)}
              ></TextInput>
            </View>
          </View>
          <View style={styles.details}>
            <Text style={styles.details_text}>Doctor charges</Text>
            <View style={styles.chargesContainer}>
              <TextInput
                style={styles.charges}
                onChangeText={(text) => setDoctorCharges(text)}
              ></TextInput>
            </View>
          </View>
          <View style={styles.details}>
            <Text style={styles.details_text}>Service charges</Text>
            <View style={styles.chargesContainer}>
              <TextInput
                style={styles.charges}
                onChangeText={(text) => setServiceCharges(text)}
              ></TextInput>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
          <Text style={styles.button_text}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("VetMenu")}>
          <Image
            source={require("../../AppPics/Footer_Menu.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ReceivedMessages")}
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
    marginRight: 25,
  },
  nav_text: {
    fontSize: 35,
    fontWeight: "bold",
  },
  settings: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    borderRadius: 90,
    marginLeft: 20,
  },
  container: {
    backgroundColor: "#E6B4EB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: "90%",
    height: "60%",
    marginTop: -50,
  },
  details_container: {
    alignSelf: "flex-start",
    // marginTop: 0,
  },
  details: {
    flexDirection: "row",
    marginLeft: 35,
    margin: 10,
  },
  details_text: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 20,
  },
  chargesContainer: {
    height: 30,
    width: 165,
    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  date_container: {
    flex: 1,
    // marginRight: 0,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 0
  },
  datePickerStyle: {
    height: 30,
    width: 220,
    left: -10,
    backgroundColor: "white",
  },
  time_container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -45,
  },
  timePickerStyleFrom: {
    height: 30,
    width: 150,
    left: 10,
    backgroundColor: "white",
  },
  container2: {
    backgroundColor: "white",
    width: "30%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
    marginBottom: -10,
    borderRadius: 18,
  },
  to_text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  timePickerStyleTo: {
    height: 30,
    width: 150,
    left: 10,
    bottom: -20,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
  },
  dropdown: {
    // top: 0,
    height: 30,
    width: 170,
    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 10,
    height: 20,
  },
  inputSearchStyle: {
    height: 30,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#F2E5E5",
    width: "45%",
    height: "10%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  button_text: {
    fontSize: 28,
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
  },
});
export default VetAvailability;
