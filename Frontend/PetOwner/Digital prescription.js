//import necessary components from react native
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown"; //importing dropdown component
import DatePicker from "react-native-date-picker"; //importing date-picker component

//prescription component recieves a 'navigation' prop which allows to navigate between different screens in the app
const Prescription = ({ navigation }) => {
  const handlePress = () => {
    console.log("Button pressed");
  };

  state = { user: "" };
  updateUser = (user) => {
    this.setState({ user: user });
  };

  const [value, setValue] = useState(null); //'value' state initialized with null to hold selected input from the UI
  const [isFocus, setIsFocus] = useState(false); //'isFocus' state initialized with false to track input focus in UI
  const [date, setDate] = useState(new Date()); //'date' state initialized with the current date to manage date selection in the UI

  return (
    <View style={styles.container}>
      {" "}
      {/* main container for the whole component*/}
      <View style={styles.nav_bar}>
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          {" "}
          {/*TouchableOpacity component naviagets to the Menu screen on press*/}
          <Image
            source={require("../../AppPics/Logo.png")}
            style={styles.logo}
          />{" "}
          {/*adding the logo picture*/}
        </TouchableOpacity>
        <Text style={styles.nav_text}>DIGITAL PRESCRIPTION</Text>
      </View>
      <View style={styles.details_box}>
        <View style={styles.petInfo}>
          <Text style={styles.heading}>Pet Information</Text>{" "}
          {/*adding a text*/}
          <View style={styles.info}>
            <Text style={styles.name}>Name</Text>
            <TextInput style={styles.petText_box}></TextInput>
            <Text style={styles.name}>Age</Text>
            <TextInput style={styles.age_box}></TextInput>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>Breed</Text>
            <TextInput style={styles.breed_box}></TextInput>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>Gender</Text>
            <View>
              {/*dropdown component for the gender selection*/}
              <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle} //adding styles to the search input
                iconStyle={styles.iconStyle}
                data={[
                  { label: "Male", value: "1" }, //option for 'Male'
                  { label: "Female", value: "2" },
                ]}
                maxHeight={200} //setting the max height for the dropdown
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select" : "..."}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)} //indicating that the dropdown component has been selected or clicked on by the user and is currently the active element in the UI
                onBlur={() => setIsFocus(false)} // indicates that the dropdown component is no longer selected by the user.
                onChange={(item) => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.ownerInfo}>
          <Text style={styles.heading}>Owner Information</Text>
          <View style={styles.info}>
            <Text style={styles.name}>Name</Text>
            <TextInput style={styles.ownerText_box}></TextInput>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>Telephone</Text>
            <View style={styles.ownerText_box}>
              <TextInput style={styles.text1}>+94</TextInput>
            </View>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>Email</Text>
            <TextInput style={styles.ownerText_box}></TextInput>
          </View>
        </View>

        <View style={styles.medInfo}>
          <Text style={styles.heading}>Medication Information</Text>
          <View style={styles.info_med}>
            <Text style={styles.name}>Medication</Text>
            <TextInput style={styles.medText_box}></TextInput>
            <View style={styles.info_box}>
              <Text style={styles.name}>Information</Text>
              <TextInput style={styles.infoText_box}></TextInput>
            </View>
          </View>
        </View>

        <View style={styles.docInfo}>
          <View style={styles.info}>
            <Text style={styles.name}>Doctor's Name</Text>
            <TextInput style={styles.docText_box}></TextInput>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>Doctor's ID</Text>
            <TextInput style={styles.docText_box}></TextInput>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>Issued Date</Text>

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
                  //function called when the date is changed
                  setDate(date); //updating the slected date
                }}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("LocatePharmacy")}>
          <View style={styles.button}>
            <Text style={styles.send_btn}>Send</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        {" "}
        {/*creating the footer*/}
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
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 15,
  },
  details_box: {
    flex: 1, //it allows the box to expand while leaving space for the footer
    backgroundColor: "#E6B4EB",
    width: "90%",
    marginVertical: 8, // Adjusted to marginVertical for spacing on top and bottom
    borderRadius: 20,
  },
  petInfo: {
    marginTop: -15,
  },
  heading: {
    fontSize: 23,
    padding: 20,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  info: {
    flexDirection: "row",
    marginTop: -30,
  },
  name: {
    fontSize: 18,
    padding: 20,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  petText_box: {
    backgroundColor: "white",
    width: "35%",
    height: "30%",
    marginTop: 23,
    borderRadius: 10,
  },
  breed_box: {
    backgroundColor: "white",
    width: "60%",
    height: "30%",
    marginTop: 23,
    borderRadius: 10,
  },
  age_box: {
    backgroundColor: "white",
    width: "15%",
    height: "30%",
    marginTop: 23,
    borderRadius: 10,
  },
  ownerInfo: {
    marginTop: -30,
  },
  ownerText_box: {
    backgroundColor: "white",
    width: "55%",
    height: "30%",
    marginTop: 23,
    borderRadius: 10,
  },
  text1: {
    fontSize: 13,
    color: "rgba(0, 0, 0, 0.5)", // 50% transparent text
    marginLeft: 10,
  },
  medInfo: {
    marginTop: -30,
  },
  info_med: {
    marginTop: -38,
  },
  medText_box: {
    backgroundColor: "white",
    width: "90%",
    height: "15%",
    marginTop: -15,
    borderRadius: 10,
    marginLeft: 15,
  },
  info_box: {
    marginTop: -15,
  },
  infoText_box: {
    backgroundColor: "white",
    width: "90%",
    height: "33%",
    marginTop: -15,
    borderRadius: 10,
    marginLeft: 15,
  },
  docInfo: {
    marginTop: -225,
  },
  docText_box: {
    backgroundColor: "white",
    width: "50%",
    height: "30%",
    marginTop: 23,
    borderRadius: 10,
  },
  button: {
    height: "20%",
    width: "40%",
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: -5,
  },
  send_btn: {
    fontWeight: "bold",
    fontSize: 15,
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
  dropdown: {
    top: 15,
    height: 20,
    width: 200,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  datePickerStyle: {
    height: 30,
    width: 220,
    left: -10,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
  },
  date_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
});
export default Prescription;
