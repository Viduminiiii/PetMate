//importing necessary components from react native
// import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useAuth } from "../config/AuthContext";
import axios from "axios";
import { Switch } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { formatToLabel } from "../config/helper";
const config = require("../config/config");

//Petowner_Settings component recieves a 'navigation' prop which allows to navigate between different screens in the app
const Petowner_Settings = ({ navigation }) => {
  const baseURL = config.DB_HOST + ":" + config.DB_PORT;
  // console.log("baseURL: " + baseURL);

  const { user, userID, userType, logout } = useAuth();
  const [appData, setAppData] = useState([]);
  const [isEnabledReminder, setIsEnabledReminder] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  // Function to toggle the switch
  const toggleSwitchReminder = () =>
    setIsEnabledReminder((previousState) => !previousState);

  const toggleTextInput = () => {
    if (isEnabled) {
      console.log("  ----1---isEnabled: " + isEnabled);
      UpdateData();
    }
    setIsEnabled(!isEnabled); // Toggle the value of isEnabled
  };
  useEffect(() => {
    const fetchData = async () => {
      // const userObject = JSON.parse(user);
      // console.log("------userObject.userLevelId:  " + userObject.userLevelId);
      // console.log("-----------userID:  " + userID);
      axios
        .get(baseURL + `/getUserData/${userID}`)
        .then((response) => {
          // console.log("---userID 4:  " + JSON.stringify(response.data));
          setAppData(response.data);
        })
        .catch((error) => console.error(error));
    };

    fetchData();
    // alert(isEnabled);
  }, []);

  const handlePress = () => {
    console.log("Button pressed " + JSON.stringify(appData));
    logout();
    navigation.navigate("Login");
  };

  const handleInputChange = (variableName, newValue) => {
    // console.log("---handleInputChange");
    const updatedData = { ...appData, [variableName]: newValue };
    setAppData(updatedData);
  };

  const UpdateData = () => {
    console.log("Update Data");

    axios
      .patch(baseURL + `/petOwnerProfileUpdate/${userID}`, appData)
      .then((res) => {
        console.log("----res.data   " + JSON.stringify(res.data));
        console.log("----res.statusCode   " + JSON.stringify(res.status));
        if (res.status === 200) {
          console.log(
            "----res.data.message   " +
              JSON.stringify(res.data.message).replace('"', "")
          );
          alert(
            JSON.stringify(res.data.message).replace('"', "").replace('"', "")
          );
        } //navigating to the Login screen if registration is successful
      })
      .catch((e) => console.log(e));
  };

  return (
    <View style={styles.container}>
      {/*main container for the whole component*/}
      <View style={styles.nav_bar}>
        {/*nav_bar container which contains the components related to create the navbar*/}
        <TouchableOpacity
          style={{ width: "20%" }}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            source={require("../../AppPics/Logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.nav_text}>SETTINGS</Text>
        <TouchableOpacity
          style={{ width: "20%" }}
          onPress={() => toggleTextInput()}
        >
          {!isEnabled ? (
            <Text>
              <Feather name="edit" size={50} color="black" />
            </Text>
          ) : (
            <Text>
              <Feather name="save" size={50} color="black" />
            </Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.user}>
        <Image
          source={require("../../AppPics/User_icon.png")}
          style={styles.userImage}
        />
        {/*inserting an image*/}
      </View>

      <View style={styles.text1}>
        <Text style={styles.username}>{appData.username}</Text>
        <Text style={{ fontSize: 16, color: "gray", textAlign: "center" }}>
          username
        </Text>
      </View>

      {Object.keys(appData).map((variableName) => {
        // Conditional check outside of return statement
        if (variableName === "username") {
          return null; // Skip this iteration
        }

        return (
          <View style={styles.info} key={variableName}>
            <Text style={styles.infoLabels} key={variableName + "_label"}>
              {formatToLabel(variableName)}
            </Text>
            <TextInput
              style={[
                styles.infoValues,
                {
                  color: isEnabled ? "black" : "#484a49",
                  backgroundColor: isEnabled ? "white" : "#ecfad9",
                  borderRadius: 15,
                },
              ]}
              editable={isEnabled}
              onChangeText={(text) =>
                {
                  if (typeof variableName === "number" && !isNaN(variableName)) {
                    console.log("--" + variableName);
                  }
                  handleInputChange(
                    typeof variableName === "number" && !isNaN(variableName)
                      ? variableName.toString()
                      : variableName,
                    text
                  )
                }
              }
              value={appData[variableName]} // Properly use the value prop for TextInput
            />
          </View>
        );
      })}

      <View style={styles.notifications}>
        <View
          style={[
            styles.container_1,
            { backgroundColor: isEnabled ? "white" : "#ecfad9" },
          ]}
        >
          <Text style={styles.reminders}>Reminders</Text>
          <Switch
            disabled={!isEnabled}
            editable={!isEnabled}
            trackColor={{ false: "#767577", true: "#81b0ff" }} // Optional: Customize track color
            thumbColor={isEnabledReminder ? "#f5dd4b" : "#f4f3f4"} // Optional: Customize thumb color
            onValueChange={isEnabled ? toggleSwitchReminder : null} //function called when switch value changes
            value={isEnabledReminder} //value determining the state of the switch
            style={[{ marginRight: 10, marginTop: -25 }]}
          />
        </View>
      </View>

      {/* <View style={styles.notification_btns}>
        <View style={styles.container_1}>
          <TouchableOpacity
            style={styles.text_input3}
            onPress={() => navigation.navigate("Petowner_NotificationPage")}
          >
            <Text style={styles.notification}>Notifications</Text>
          </TouchableOpacity>
        </View>
      </View> */}

      <View style={styles.container_3}>
        <TouchableOpacity
          style={styles.signoutbutton}
          // onPress={() => navigation.navigate("Login")}
          onPress={() => handlePress()}
        >
          <Text style={styles.signout_buttonText}>SIGN OUT</Text>
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
    flex: 1,
    backgroundColor: "#CEEFA3",
    justifyContent: "space-between",
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
    marginLeft: 10,
  },
  nav_text: {
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 15,
    textAlign: "center",
    width: "50%",
  },
  editBtn: {
    marginTop: 0,
  },
  user: {
    padding: 10,
    marginTop: 10,
  },
  userImage: {
    width: 100,
    height: 100,
  },
  text1: {
    marginTop: 20,
    textAlign: "right",
    borderStyle: "solid",
    marginBottom: 20,
  },
  info: {
    flexDirection: "row",
    marginTop: 0,
    width: "90%",
  },
  infoLabels: {
    fontSize: 18,
    padding: 2,
    alignSelf: "flex-start",
    fontWeight: "bold",
    width: "30%",
  },
  infoValues: {
    fontSize: 18,
    padding: 2,
    alignSelf: "flex-start",
    // fontWeight: "bold",
    width: "70%",
  },
  disableInfoValues: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    margin: 10,
  },
  username: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },

  notifications: {
    marginTop: -20,
  },
  container_1: {
    flexDirection: "row",
    backgroundColor: "white",
    width: 300,
    height: 50,
    borderRadius: 20,
  },
  reminders: {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 30,
    // marginTop: 10,
  },

  email: {
    fontSize: 18,
  },
  text2: {
    marginTop: 10,
    fontSize: 20,
  },
  notification_btns: {
    marginTop: -30,
  },
  container_1: {
    backgroundColor: "white",
    width: 300,
    height: 50,
    borderRadius: 20,
    marginTop: 50,
    justifyContent: "center",
  },
  notification: {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 30,
  },
  container_2: {
    backgroundColor: "white",
    width: 300,
    height: 50,
    borderRadius: 20,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
  dark_mode: {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 30,
    marginTop: 12,
  },
  image_2: {
    resizeMode: "contain",
    width: 55,
    height: "90%",
    marginLeft: 120,
    marginTop: 3,
  },
  container_3: {
    justifyContent: "center",
    alignItems: "center",
  },
  signoutbutton: {
    backgroundColor: "#F2E5E5",
    paddingVertical: 15,
    paddingHorizontal: 55,
    borderRadius: 20,
    marginTop: 20,
  },
  signout_buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    height: 65,
    justifyContent: "center",
    alignItems: "center", //aligning items at center vertically
  },
  menu_img: {
    width: 40,
    height: 40,
    margin: 15,
  },
});
export default Petowner_Settings;
