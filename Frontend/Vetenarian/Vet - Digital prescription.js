//import necessary components from react native
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useAuth } from "../config/AuthContext";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { formatDateToYYYYMMDD } from "../config/helper";
const config = require("../config/config");

//prescription component recieves a 'navigation' prop which allows to navigate between different screens in the app
const Prescription = ({ navigation }) => {
  const baseURL = config.DB_HOST + ":" + config.DB_PORT;
  // console.log("baseURL: " + baseURL);
  const route = useRoute();
  const { appointID } = route.params;

  const { user, userID, userType } = useAuth();
  const [appData, setAppData] = useState([]);

  const [petname, setPetname] = useState();
  const [age, setAge] = useState();
  const [petfullname, setPetfullname] = useState();
  const [vetfullname, setVetfullname] = useState();
  const [medication, setMedication] = useState();
  const [information, setInformation] = useState();
  const today = formatDateToYYYYMMDD(new Date());

  useEffect(() => {
    // alert("Vet")
    const userObject = JSON.parse(user);
    // console.log("userObject.userLevelId:  " + userObject.userLevelId);
    const userLevelId = userType == 1 ? userObject.userLevelId : appointID;
    // console.log("---userID 2:  " + userLevelId + "  appointID:  " + appointID);

    axios
      .get(baseURL + `/appointmentData/${appointID}`)
      .then((response) => {
        // console.log("---userID 4:  " + JSON.stringify(response.data));
        const appResults = JSON.parse(JSON.stringify(response.data));
        // console.log("appResults.name:   " + appResults.petOwner.fullname);
        console.log(
          "\n\n -----degital presc data:  " + JSON.stringify(response.data)
        );
        // console.log("\n\nappData.medications:  " + appResults.medications);

        setPetname(appResults?.petOwner.petname);
        setAge(appResults?.petOwner.age);
        setPetfullname(appResults?.petOwner.fullname);
        setVetfullname(appResults?.availability.veternarian.fullname);
        setMedication(appResults.medications);
        setInformation(appResults.instructions);

        // setAppData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handlePress = () => {
    console.log("Button pressed");

    if(userType == 2){
      //creating userData object
      const userData = {
        appointID,
        medication,
        information,
      };
  
      //log message indicating all fields are filled and registration is proceeding
      console.log("All fields filled, proceed with registration.");
      console.log("userData:  " + JSON.stringify(userData)); //logging the user data after converting it to a JSON string.
      //sending a POST request to register the user with provided data
      axios
        .post(baseURL + "/updateMedications", userData)
        .then((res) => {
          console.log("res.data.status:  " + res.data.status);
          console.log("res.data.data:  " + JSON.stringify(res.data.data));
        })
        .catch((e) => console.log(e));
    }
    else{
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {/* main container for the whole component*/}
      <View style={styles.nav_bar}>
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          {/*TouchableOpacity component naviagets to the Menu screen on press*/}
          <Image
            source={require("../../AppPics/Logo.png")}
            style={styles.logo}
          />
          {/*adding the logo picture*/}
        </TouchableOpacity>
        <Text style={styles.nav_text}>DIGITAL PRESCRIPTION</Text>
      </View>
      <View style={styles.details_box}>
        <View style={styles.petInfo}>
          <Text style={styles.heading}>Pet Information</Text>
          {/*adding a text*/}
          <View style={styles.info}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.petText_box}>{petname}</Text>
            <Text style={styles.name}>Age</Text>
            <Text style={styles.age_box}>{age}</Text>
          </View>
        </View>

        <View style={styles.ownerInfo}>
          <Text style={styles.heading}>Owner Information</Text>
          <View style={styles.info}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.ownerText_box}>{petfullname}</Text>
          </View>
        </View>

        <View style={styles.medInfo}>
          <Text style={styles.heading}>Medication Information</Text>
          <View style={styles.info_med}>
            <Text style={styles.name}>Medication</Text>
            {userType == 1 && <Text style={styles.medText_box}>{medication}</Text>}
            {userType == 2 && <TextInput
              multiline
              style={styles.medText_box}
              onChangeText={(text) => setMedication(text)}
            >
              {medication}
            </TextInput>}
            <View style={styles.info_box}>
              <Text style={styles.name}>Information</Text>
              {userType == 1 && <Text style={styles.infoText_box}>{information}</Text>}
              {userType == 2 && <TextInput
                multiline
                style={styles.infoText_box}
                onChangeText={(text) => setInformation(text)}
              >
                {information}
              </TextInput>}
            </View>
          </View>
        </View>

        <View style={styles.docInfo}>
          <View style={styles.info}>
            <Text style={styles.name}>Doctor's Name</Text>
            <TextInput style={styles.docText_box}>{vetfullname}</TextInput>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>Issued Date</Text>
            <Text style={styles.date_container}>{today}</Text>
          </View>
        </View>
        {/* <TouchableOpacity onPress={() => navigation.navigate("LocatePharmacy")}> */}
        {<TouchableOpacity onPress={handlePress}>
          <View style={styles.button}>
            <Text style={styles.send_btn}> {userType == 1 ? "OK" : Save}</Text>
          </View>
        </TouchableOpacity>}
      </View>
      <View style={styles.footer}>
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
        <TouchableOpacity onPress={() => navigation.navigate("History", {searchAvlID:1})}>
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
    height: "35%",
    marginTop: 23,
    borderRadius: 10,
  },
  age_box: {
    backgroundColor: "white",
    width: "15%",
    height: "35%",
    marginTop: 23,
    borderRadius: 10,
  },
  ownerInfo: {
    marginTop: -30,
  },
  ownerText_box: {
    backgroundColor: "white",
    width: "70%",
    height: "38%",
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
    height: "28%",
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
    height: "36%",
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
    height: "22%",
    width: "40%",
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
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
    top: 23,
    height: 25,
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
    marginTop: 22,
    backgroundColor: "white",
    height: 30,
    borderRadius: 20,
    textAlign: "center",
  },
});
export default Prescription;
