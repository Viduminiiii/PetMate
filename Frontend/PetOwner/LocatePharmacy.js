//import necessary components from react native
import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
//locatePharmacy component recieves a 'navigation' prop which allows to navigate between different screens in the app
const LocatePharmacy = ({ navigation }) => {
  const handlePress = () => {
    console.log("Button pressed");
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
        ></TextInput>
        <Image
          source={require("../../AppPics/Google_map.png")}
          style={styles.google_map_img}
        />
      </View>
      <View style={styles.inside_container}>
        <TouchableOpacity
          onPress={() => handlePress("Pharmacy")}
          style={styles.button}
        >
          <View style={styles.button_1_2}>
            <Image
              source={require("../../AppPics/ABC_Pharmacy.jpg")}
              style={styles.button_img_1}
            />
            <View style={styles.button_half_view_column}>
              <Text style={styles.button_text}>ABC Pharmacy</Text>
              <View style={styles.button_half_view_row}>
                <Image
                  source={require("../../AppPics/VetClinic_Location.png")}
                  style={styles.location_img}
                />
                <Text style={styles.location_text}>Colombo</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("Pharmacy")}
          style={styles.button}
        >
          <View style={styles.button_1_2}>
            <Image
              source={require("../../AppPics/CD_Pharmacy.jpg")}
              style={styles.button_img_2}
            />
            <View style={styles.button_half_view_column}>
              <Text style={styles.button_text}>CD Pharmacy</Text>
              <View style={styles.button_half_view_row}>
                <Image
                  source={require("../../AppPics/VetClinic_Location.png")}
                  style={styles.location_img}
                />
                <Text style={styles.location_text}>Colombo</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress("Pharmacy")}
          style={styles.button}
        >
          <View style={styles.button_1_2}>
            <Image
              source={require("../../AppPics/DEF_Pharmacy.jpg")}
              style={styles.button_img_3}
            />
            <View style={styles.button_half_view_column}>
              <Text style={styles.button_text}>DEF Pharmacy</Text>
              <View style={styles.button_half_view_row}>
                <Image
                  source={require("../../AppPics/VetClinic_Location.png")}
                  style={styles.location_img}
                />
                <Text style={styles.location_text}>Colombo</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
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
});

export default LocatePharmacy;
