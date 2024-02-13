import React, { Component, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import DatePicker from "react-native-date-picker";

const VetPrescription = () => {
  const handlePress = () => {
    console.log("Button pressed");
  };

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <View style={styles.nav_bar}>
        <TouchableOpacity onPress={() => handlePress("Logo")}>
          <Image
            source={require("../PetMate/AppPics/Logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.nav_text}>DIGITAL PRESCRIPTION</Text>
      </View>
      <View style={styles.details_box}>
        <View style={styles.petInfo}>
          <Text style={styles.heading}>Pet Information</Text>
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
              <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={[
                  { label: "Male", value: "1" },
                  { label: "Female", value: "2" },
                ]}
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select" : "..."}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
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
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    right: -5,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    borderColor: "black",
                    alignItems: "flex-start",
                    borderWidth: 1,
                    borderBottomWidth: 1,
                  },
                  placeholderText: {
                    fontSize: 15,
                    color: "black",
                  },
                  dateText: {
                    fontSize: 15,
                  },
                }}
                onDateChange={(date) => {
                  setDate(date);
                }}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => handlePress("Send")}>
          <View style={styles.button}>
            <Text style={styles.search_btn}>Send</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => handlePress("Home")}>
          <Image
            source={require("../PetMate/AppPics/Footer_Menu.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Chat")}>
          <Image
            source={require("../PetMate/AppPics/Footer_Chat.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Medical records")}>
          <Image
            source={require("../PetMate/AppPics/Footer_medicalRecords.png")}
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
    backgroundColor: "#BAFAD0",
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
  arrow_img: {
    width: 20,
    height: 20,
    marginLeft: 90,
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
  search_btn: {
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
  },
});
export default VetPrescription;