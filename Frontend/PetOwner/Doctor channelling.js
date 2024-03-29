//import necessary components from react native
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  DatePickerAndriod,
  Button,
  TextInput,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import SearchableDropdown from "react-native-searchable-dropdown";
import DatePicker from "react-native-date-picker"; //importing date-picker component
import axios from "axios"; //importing axios library for HTTP requests
const config = require("../config/config"); //importing configuration file

const DocChannelling = ({ navigation }) => {
  const baseURL = config.DB_HOST + ":" + config.DB_PORT; //base URL for the database connection

  const [searchDate, setSearchDate] = useState(new Date());
  const [docClinicItem, setDocClinicItem] = useState(null);
  const [isDateChanges, setIsDateChanges] = useState(false); //used to track if the date changes
  // const [valueDoc, setValueDoc] = useState(null);
  // const [isFocusDoc, setIsFocusDoc] = useState(false);
  // const [valueHosp, setValueHosp] = useState(null);
  // const [isFocusHosp, setIsFocusHosp] = useState(false);

  const handlePress = () => {
    // try {
    //printing searchDate and isDateChanges to console for debugging
    console.log("----------------searchDate:   " + searchDate);
    console.log("----------------------isDateChanges:   " + isDateChanges);
    //constructing userData object based on the state values
    const userData = {
      searchDate: isDateChanges ? searchDate : "",
      searchDoctor: docClinicItem,
      searchClinic: docClinicItem,
    };
    //   const response = axios.post(baseURL + "/searchAvailability", userData);
    //   console.log("----response:   "+JSON.stringify(response.data));
    //   if(response.data){
    //     if (response.data.status === "ok") {
    //       console.log("get Availabilities:", response.data.data);
    //       // Do something with the availabilities, e.g., navigate to another screen and pass them as props
    //       if (res.data.status === "ok")
    //         navigation.navigate("Available_VetSessions");
    //     } else {
    //       console.error("Error fetching availabilities:", response.data.msg);
    //       alert("Error fetching availabilities:", response.data.msg);
    //     }
    //   }
    //   else{alert("response unsuccess..")}
    // } catch (error) {
    //   console.error("Error:", error);
    // }

    // console.log("Button pressed");
    // const userData = {
    //   searchDate: searchDate,
    //   searchDoctor: docClinicItem,
    //   searchClinic: docClinicItem,
    // };
    // console.log("userData:  " + JSON.stringify(userData));

    //sending a POST request to search for availability using axios
    axios
      .post(baseURL + "/searchAvailability", userData)
      .then((res) => {
        console.log("----res.data.data------:   " + res.data.data); //outputting response data to the console to understand its contents and structure fro debugging purpose
        const vetData = JSON.parse(res.data.data);
        console.log("\n ---vet id -----" + JSON.stringify(vetData.veternarian));
        if (res.data.status === "ok") {
          //navigating to the "Available_VetSessions" screen if availablilities are found
          console.log("Available_VetSessions--------------");
          navigation.navigate("Available_VetSessions");
        } else {
          //handling error if status if not "ok"
          console.error("Error fetching availabilities:", response.data.msg);
          alert("Error fetching availabilities:", response.data.msg);
        }
      })
      .catch((e) => console.log(e));
  };
  
  const searchAvailability = async () => {
    try {
      // Format the date as required by your backend, e.g., ISO string
      // const formattedDate = date.toISOString().split('T')[0];

      //constructing userData object with search criteria
      const userData = {
        searchDate: searchDate, //date to search for availability
        searchDoctor: docClinicItem, //selected doctor search
        searchClinic: docClinicItem,
      };
      //sending a POST  request to search for availability
      const response = await axios.post(
        baseURL + "/searchAvailability", //API endpoint for searching availability
        userData //data to be sent in the request body
      );
      if (response.data.status === "ok") {
        console.log("get Availabilities:", response.data.data);
        // Do something with the availabilities, e.g., navigate to another screen and pass them as props
        if (res.data.status === "ok")
          navigation.navigate("Available_VetSessions");
      } else {
        console.error("Error fetching availabilities:", response.data.msg);
        alert("Error fetching availabilities:", response.data.msg);
      }
    } catch (error) {
      //loging any errors that occurs during the search process
      console.error("Error:", error);
    }
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
        <Text style={styles.text}>Doctor's Name</Text>
        <View style={styles.search_box}>
          <Image
            source={require("../../AppPics/Search.png")}
            style={styles.search_img}
          />
          <TextInput
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            placeholder="Search Doctor/ Clinic"
            onChangeText={(text) => setDocClinicItem(text)}
          ></TextInput>

          {/* <SearchableDropdown
            containerStyle={{ padding: 5 }}
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}            
            items={itemList}
            defaultIndex={0}
            // chip={true}
            // resetValue={false}
            textInputProps={{
              placeholder: "Search Doctor/ Clinic",
              underlineColorAndroid: "transparent",
              // style: {
              //   padding: 12,
              //   borderWidth: 1,
              //   borderColor: "#ccc",
              //   borderRadius: 5,
              // },
              onTextChange: (text) => alert(text),
            }}            
            onChange={(item) => {
              setDocClinicItem(item.value);
            }}
            listProps={{
              nestedScrollEnabled: true,
            }}
          /> */}

          {/* <SearchableDropdown
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
          /> */}
        </View>
        <Text style={styles.text}>Appointment Date</Text>
        <View style={styles.search_box}>
          <Image
            source={require("../../AppPics/Calender.png")}
            style={styles.calendar_img}
          />
          <View style={styles.date_container}>
            {/* adding datepicker component to select the date*/}
            <DatePicker
              style={styles.datePickerStyle}
              date={searchDate}
              mode="date"
              placeholder="select date"
              format="DD/MM/YYYY"
              minDate="01-01-1900"
              maxDate="01-01-2100"
              onDateChange={(date) => {
                //function called when the date changes
                setSearchDate(date);
                setIsDateChanges(true);
                console.log("setSearchDate-------------:    " + date);
              }}
            />
          </View>
        </View>
        {/*creating the search button*/}
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.button}>
            {/*adding a text on the button*/}
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
    marginLeft: 10,
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
