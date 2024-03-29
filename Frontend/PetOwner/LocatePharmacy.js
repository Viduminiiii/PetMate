//import necessary components from react native
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import axios from "axios"; //importing axios library for HTTP requests
const config = require("../config/config"); //importing configuration file
//locatePharmacy component recieves a 'navigation' prop which allows to navigate between different screens in the app

const LocatePharmacy = ({ navigation }) => {
  const baseURL = config.DB_HOST + ":" + config.DB_PORT; //base URL for the database connection

  const [searchPharmacy, setSearchPharmacy] = useState();
  const [appData, setAppData] = useState([]);

  const handlePress = () => {
    console.log("Button pressed");
    //constructing userData object based on the state values
    const userData = { searchPharmacy: searchPharmacy };
    console.log("searchPharmacy:   " + searchPharmacy);
    //sending a POST request to search for availability using axios
    axios
      .post(baseURL + "/searchPharmacy", userData)
      .then((res) => {
        console.log("----res.data.searchPharmacy------:   " + res.data); //outputting response data to the console to understand its contents and structure fro debugging purpose
        if (res.data) {
          setAppData(res.data);
        } else {
          //handling error if status if not "ok"
          console.error("Error fetching pharmacy:", response.data.msg);
          alert("Error fetching pharmacy:", response.data.msg);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <View style={styles.container}>
      {/*main container for the whole component*/}
      <View style={styles.nav_bar}>
        {/*TouchableOpacity component naviagets to the Menu screen on press*/}
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <Image
            source={require("../../AppPics/Logo.png")}
            style={styles.logo_img}
          />
        </TouchableOpacity>
        <Text style={styles.nav_text}>PHARMACY</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Petowner_Settings")}
        >
          <Image
            source={require("../../AppPics/Setting.png")}
            style={styles.settings_img}
          />
          {/*adding the settings logo pic*/}
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Find the nearest</Text>
      <View style={styles.loc_search_bar}>
        <Image
          source={require("../../AppPics/Search.png")}
          style={styles.search_img}
        />
        <TextInput
          style={styles.search_bar_text}
          placeholder="Search" //placeholder text for the search input field
          onChangeText={(text) => setSearchPharmacy(text)}
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.search_button} onPress={handlePress}>
        <Text style={styles.searchButtonText}>SEARCH</Text>
      </TouchableOpacity>

      <ScrollView style={styles.screen}>
        {appData &&
          appData.map((post) => (
            <View key={post._id}>
              <View style={styles.summary}>
                <View style={styles.button_1_2}>
                  <Image
                    source={require("../../AppPics/ABC_Pharmacy.jpg")}
                    style={styles.button_img_2}
                  />
                  <View style={styles.button_half_view_column}>
                    <Text style={styles.button_text}>
                      {post.pharmacyName}
                    </Text>
                    <View style={styles.button_half_view_row}>
                      <Image
                        source={require("../../AppPics/VetClinic_Location.png")}
                        style={styles.location_img}
                      />
                      <Text style={styles.location_text}>{post.mainCity}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
      </ScrollView>

      {/*creating the footer*/}
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
          {/*navigating to the LocateVetClinics screen by clicking on the icon*/}
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
    flex: 1,
    backgroundColor: "#CEEFA3",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  nav_bar: {
    flexDirection: "row", // This style is used to arrange the items of the container horizontally, from left to right.
    paddingTop: 20,
    alignItems: "center",
  },
  logo_img: {
    width: 60,
    height: 60,
    borderRadius: 90,
    marginRight: 30,
  },
  settings_img: {
    width: 60,
    height: 60,
    marginLeft: 30,
  },
  nav_text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    fontSize: 25,
    margin: 20,
    paddingRight: 150,
  },
  loc_search_bar: {
    alignItems: "center", // Aligns the content of the container vertically to the center.
    flexDirection: "row",
    backgroundColor: "white",
    width: 360,
    height: 60,
    borderRadius: 80,
  },
  search_img: {
    width: 40,
    height: 40,
    borderRadius: 15,
    marginLeft: 20,
  },
  search_bar_text: {
    fontSize: 22,
    marginLeft: 20,
  },
  google_map_img: {
    // position: 'absolute',
    width: 40,
    height: 40,
    position: "absolute",
    top: 10, // Distance from the top of the parent container
    right: 30, // Distance from the right of the parent container
  },
  inside_container: {
    backgroundColor: "#E6B4EB",
    marginTop: 20,
    marginBottom: -28,
    width: 400,
    height: 460,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  prescription_button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: 350,
    height: 50,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "black",
    margin: 20,
  },
  prescription_button_text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    marginLeft: 20,
    // marginBottom: 20,
    backgroundColor: "white",
    width: 350,
    height: 100,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 40,
  },
  button_1_2: {
    flexDirection: "row",
  },
  button_img_1: {
    width: 120,
    height: 90,
  },
  button_img_2: {
    width: 120,
    height: 100,
  },
  button_img_3: {
    width: 120,
    height: 90,
  },
  button_half_view_column: {
    marginTop: 10,
  },
  button_half_view_row: {
    flexDirection: "row",
  },
  button_text: {
    fontSize: 22,
    marginLeft: 40,
  },
  location_img: {
    marginTop: 10,
    marginLeft: 10,
    width: 37,
    height: 37,
  },
  location_text: {
    fontSize: 17,
    marginTop: 10,
    marginLeft: 20,
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    height: 65,
    justifyContent: "center",
    alignItems: "center", // Aligns the content of the container vertically to the center.
  },
  menu_img: {
    width: 40,
    height: 40,
    margin: 15,
  },
  footer_chat_img: {
    width: 40,
    height: 40,
  },
  footer_vet_clinic_img: {
    width: 40,
    height: 40,
  },
  footer_appointment_img: {
    width: 40,
    height: 40,
  },
  footer_pharmacy_img: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  search_button: {
    backgroundColor: "#E6B4EB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
    height: 40,
    width: 200,
  },
  searchButtonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  screen: {
    margin: 1,
    // backgroundColor: "#E6B4EB",
    marginBottom: 10,
    marginTop: 25
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
});

export default LocatePharmacy;