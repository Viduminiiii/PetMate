import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  DatePickerAndriod,
  Button,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import DatePicker from "react-native-date-picker";
import axios from "axios";

const DocChannelling = ({ navigation }) => {
  const handlePress = () => {
    console.log("Button pressed");
    const userData = {
      availableDate,
    };
    console.log("userData:  " + JSON.stringify(userData));
    axios
      .post(baseURL + "/searchAvailability", userData)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok")
          navigation.navigate("Available_VetSessions");
      })
      .catch((e) => console.log(e));
  };

  const [valueType, setValueType] = useState(null);
  const [isFocusType, setIsFocusType] = useState(false);
  const [valueDoc, setValueDoc] = useState(null);
  const [isFocusDoc, setIsFocusDoc] = useState(false);
  const [valueHosp, setValueHosp] = useState(null);
  const [isFocusHosp, setIsFocusHosp] = useState(false);
  const [date, setDate] = useState(new Date());

  // const searchAvailability = async () => {
  //     try {
  //         // Format the date as required by your backend, e.g., ISO string
  //         const formattedDate = date.toISOString().split('T')[0];

  //         const response = await axios.get(`http://10.31.5.59/searchAvailability?date=${formattedDate}`);
  //         if (response.data.status === 'ok') {
  //             console.log('Availabilities:', response.data.data);
  //             // Do something with the availabilities, e.g., navigate to another screen and pass them as props
  //             if (res.data.status === "ok") navigation.navigate("Available_VetSessions");
  //         } else {
  //             console.error('Error fetching availabilities:', response.data.data);
  //         }
  //     } catch (error) {
  //         console.error('Error:', error);
  //     }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.nav_bar}>
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <Image
            source={require("../../AppPics/Logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.nav_text}>DOCTOR CHANNELLING</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Petowner_Settings")}
        >
          <Image
            source={require("../../AppPics/Setting.png")}
            style={styles.settings}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <Text style={styles.schedule_text}>Schedule an appointment</Text>
      </View>
      <View style={styles.search_page}>
        <Text style={styles.text}>Type</Text>
        <View style={styles.search_box}>
          <Image
            source={require("../../AppPics/Search.png")}
            style={styles.search_img}
          />
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={[
              { label: "Doctor", value: "1" },
              { label: "Hospital", value: "2" },
            ]}
            labelField="label"
            valueField="value"
            placeholder={!isFocusType ? "Select type" : "..."}
            searchPlaceholder="Search..."
            value={valueType}
            onFocus={() => setIsFocusType(true)}
            onBlur={() => setIsFocusType(false)}
            onChange={(item) => {
              setValueType(item.value);
              setIsFocusType(false);
            }}
          />
        </View>
        <Text style={styles.text}>Doctor's Name</Text>
        <View style={styles.search_box}>
          <Image
            source={require("../../AppPics/Search.png")}
            style={styles.search_img}
          />
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={[
              { label: "Dr. John", value: "1" },
              { label: "Dr. Paul", value: "2" },
              { label: "Dr. Sean", value: "3" },
              { label: "Dr. Harry", value: "4" },
            ]}
            labelField="label"
            valueField="value"
            placeholder={!isFocusDoc ? "Select doctor" : "..."}
            searchPlaceholder="Search..."
            value={valueDoc}
            onFocus={() => setIsFocusDoc(true)}
            onBlur={() => setIsFocusDoc(false)}
            onChange={(item) => {
              setValueDoc(item.value);
              setIsFocusDoc(false);
            }}
          />
        </View>
        <Text style={styles.text}>Hospital's Name</Text>
        <View style={styles.search_box}>
          <Image
            source={require("../../AppPics/Search.png")}
            style={styles.search_img}
          />
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={[
              { label: "ABC hospital", value: "1" },
              { label: "DEF hospital", value: "2" },
              { label: "GHI hospital", value: "3" },
              { label: "JKL hospital", value: "4" },
              { label: "MNO hospital", value: "5" },
            ]}
            labelField="label"
            valueField="value"
            placeholder={!isFocusHosp ? "Select hospital" : "..."}
            searchPlaceholder="Search..."
            value={valueHosp}
            onFocus={() => setIsFocusHosp(true)}
            onBlur={() => setIsFocusHosp(false)}
            onChange={(item) => {
              setValueHosp(item.value);
              setIsFocusHosp(false);
            }}
          />
        </View>
        <Text style={styles.text}>Appointment Date</Text>
        <View style={styles.search_box}>
          <Image
            source={require("../../AppPics/Calender.png")}
            style={styles.calendar_img}
          />
          <View style={styles.date_container}>
            <DatePicker
              style={styles.datePickerStyle}
              date={date}
              mode="date"
              placeholder="select date"
              format="DD/MM/YYYY"
              minDate="01-01-1900"
              maxDate="01-01-2100"
              onDateChange={(date) => {
                setDate(date);
              }}
            />
          </View>
        </View>
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.button}>
            <Text style={styles.search_btn}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
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
  container: {
    flex: 1, //fill the whole screen
    backgroundColor: "#CEEFA3",
    justifyContent: "space-between", // This ensures the footer is pushed to the bottom
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
  container1: {
    paddingTop: 30,
    justifyContent: "center",
    alignContent: "center",
  },
  schedule_text: {
    fontWeight: "bold",
    fontSize: 30,
  },
  search_page: {
    flex: 1,
    backgroundColor: "#E6B4EB",
    width: "85%",
    borderRadius: 20,
    marginTop: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    padding: 20,
    alignSelf: "flex-start",
  },
  search_box: {
    width: "85%",
    height: "8%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row", // Use 'column' for vertical split
    padding: 10,
    marginTop: -10,
  },
  search_img: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  text1: {
    fontSize: 20,
    color: "rgba(0, 0, 0, 0.5)", // 50% transparent text
    marginLeft: 10,
  },
  arrow_img: {
    width: 30,
    height: 30,
    marginLeft: 90,
  },
  calendar_img: {
    width: 30,
    height: 30,
    top: -7,
    left: 2,
  },
  button: {
    height: 60,
    width: 180,
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  search_btn: {
    fontWeight: "bold",
    fontSize: 25,
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
  placeholderStyle: {
    fontSize: 20,
  },
  selectedTextStyle: {
    fontSize: 20,
  },
  iconStyle: {
    width: 10,
    height: 20,
  },
  inputSearchStyle: {
    height: 30,
    fontSize: 16,
  },
  dropdown: {
    height: 50,
    width: "85%",
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
  },
  datePickerStyle: {
    height: 50,
    width: 230,
    left: 5,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
  },
  date_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default DocChannelling;
