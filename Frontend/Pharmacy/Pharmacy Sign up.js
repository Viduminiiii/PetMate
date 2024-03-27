//importing necessary components from react native
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import axios from "axios"; //importing axios library for making HTTP requests

//PharmacySignUp component recieves a 'navigation' prop which allows to navigate between different screens in the app
const PharmacySignUp = ({ navigation }) => {
  const baseURL = config.DB_HOST + ":" + config.DB_PORT; //setting up the base URL for API requests
  console.log("baseURL: " + baseURL);

  const [fullname, setFullname] = useState(); //state variable for storing the input value of the full name field in the form
  const [username, setUsername] = useState();
  const [email, setEmail] = useState(); //state variable for storing the inpput value of the email filed in the form
  const [pharmacyName, setpharmacyName] = useState();
  const [pharmacyLicenseNumber, setpharmacyLicenseNumber] = useState();
  const [pharmacyAddress, setpharmacyAddress] = useState();
  const [mainCity, setmainCity] = useState();
  const [password, setPassword] = useState();
  const [location, setLocation] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  //function to handle sign up button pressed
  const handlePress = () => {
    // console.log("Button pressed");
    // console.log("JSON.stringify(location):      " + JSON.stringify(location));

    const objLoc = JSON.parse(JSON.stringify(location));
    console.log("objLoc:   " + JSON.stringify(objLoc));
    // console.log("Longitude:", longitude);
    // console.log("Latitude:", latitude);
    const objLocation = {
      type: "Point",
      coordinates: [objLoc[0].longitude, objLoc[0].latitude],
    };

    console.log("Button pressed");
    const userData = {
      fullname,
      username,
      email,
      pharmacyName,
      pharmacyLicenseNumber,
      pharmacyAddress,
      mainCity,
      password,
    };

    if (
      !fullname ||
      !username ||
      !email ||
      !pharmacyName ||
      !pharmacyLicenseNumber ||
      !pharmacyAddress ||
      !mainCity ||
      !password
    ) {
      Alert.alert(
        "Missing Information",
        "Please fill in all mandatory fields."
      );
      return;
    }
    //validating the input full name
    if (!validateFullName(fullname)) {
      Alert.alert("Invalid Full Name", "Full name should not contain numbers");
      return;
    }

    if (!validatepharmacyName(pharmacyName)) {
      Alert.alert(
        "Invalid Pharmacy Name",
        "Pharmacy Name should not contain numbers"
      );
      return;
    }
    //validating input email
    if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address");
      return;
    }
    if (!validateMainCity(mainCity)) {
      Alert.alert("Invalid City", "Please enter a valid City");
      return;
    }

    console.log("All fields filled, proceed with registration.");
    console.log("userData:  " + JSON.stringify(userData));
    axios
      .post(baseURL + "/registerPharmacy", userData)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") navigation.navigate("Login");
      })
      .catch((e) => console.log(e));
  };

  const validateFullName = (fullName) => {
    // Check if full name contains numbers
    const containsNumbers = /\d/.test(fullName);
    return !containsNumbers; // Return true if full name doesn't contain numbers
  };

  const validatepharmacyName = (pharmacyName) => {
    // Check if full name contains numbers
    const containsNumbers = /\d/.test(pharmacyName);
    return !containsNumbers; // Return true if full name doesn't contain numbers
  };

  const validateEmail = (email) => {
    // Validate email using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMainCity = (mainCity) => {
    // Check if city contains numbers
    const containsNumbers = /\d/.test(mainCity);
    return !containsNumbers; // Return true if City doesn't contain numbers
  };

  const navigateToGetLocation = () => {
    // navigation.navigate('GoogleMap');
    navigation.navigate("GoogleMap", {
      onDataReceived: (locationFromMap) => setLocation(locationFromMap),
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {/*main container for the whole component*/}
        <View style={styles.nav_bar}>
          <Text style={styles.nav_text}>PHARMACY REGISTRATION</Text>
        </View>
        <View style={styles.container1}>
          <Text style={styles.text}>Pharmacy Owner Information</Text>
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.textInput}
            placeholder="Full name"
            onChangeText={(text) => setFullname(text)}
          ></TextInput>
          {/*TextInput component is used to input full name by the user*/}
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
          ></TextInput>
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
        </View>
        <View style={styles.infoText_container}>
          <Text style={styles.text}>Pharmacy Information</Text>
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.textInput}
            placeholder="Pharmacy name"
            onChangeText={(text) => setpharmacyName(text)}
          ></TextInput>
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.textInput}
            placeholder="Pharmacy License Number"
            onChangeText={(text) => setpharmacyLicenseNumber(text)} //update the pharmacy license number state with the entered text
          ></TextInput>
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.textInput}
            placeholder="Pharmacy Address"
            onChangeText={(text) => setpharmacyAddress(text)}
          ></TextInput>
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.textInput}
            placeholder="Main city the pharmacy located"
            onChangeText={(text) => setmainCity(text)}
          ></TextInput>
        </View>
        <View style={styles.container4}>
          <Text style={styles.text}>Pin Your Pharmacy Location</Text>
        </View>
        <TouchableOpacity
          onPress={
            () => navigateToGetLocation()
            // setModalVisible(true)
            // navigation.navigate("GoogleMap")
          }
        >
          <Image
            source={require("../../AppPics/Google_map.png")}
            style={styles.image}
          />
          {/*inserting an image*/}
        </TouchableOpacity>
        <View style={styles.container3}>
          <View style={styles.inputWithImage}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={!isPasswordVisible}
              onChangeText={(text) => setPassword(text)}
            ></TextInput>
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              style={styles.button}
            >
              <Image
                source={require("../../AppPics/Password.png")}
                style={styles.password_eyeimage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => handlePress()}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>{" "}
          {/*creating the  sign up button*/}
        </TouchableOpacity>
        <View style={styles.container5}>
          <Text style={styles.text}>or continue with</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Image
              source={require("../../AppPics/FB.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <View style={styles.space} />
          <TouchableOpacity>
            <Image
              source={require("../../AppPics/Google.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container6}>
          <Text style={styles.text}>Do you have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            {/*TouchableOpacity component naviagets to the 'Login' screen on press*/}
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //fill the whole screen
    backgroundColor: "#CEEFA3",
    justifyContent: "flex-start", //start from the top
    alignItems: "center",
    paddingTop: 30,
  },
  container1: {
    marginLeft: -110,
    paddingTop: 20,
  },
  infoText_container: {
    marginLeft: -160,
    paddingTop: 20,
  },
  text: {
    fontSize: 20,
  },
  container2: {
    backgroundColor: "white",
    width: "80%",
    height: 45,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 2,
    marginTop: 25,
    justifyContent: "center",
  },
  textInput: {
    fontSize: 15,
    marginLeft: 10,
  },
  container3: {
    backgroundColor: "white",
    width: "50%",
    height: 45,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 2,
    marginTop: 25,
    justifyContent: "center",
  },
  inputWithImage: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageStyle: {
    width: 20,
    height: 20,
    marginLeft: 98,
  },
  signUpButton: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    height: 50,
    width: "35%",
  },
  signUpButtonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 110,
  },
  image: {
    width: 50, // Adjust image width
    height: 50, // Adjust image height
    marginTop: 15,
  },
  space: {
    width: 90, // Adjust the space between images
  },
  loginText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  container4: {
    paddingTop: 20,
    alignItems: "center",
  },
  nav_text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container5: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  password_eyeimage: {
    resizeMode: "contain",
    width: 40,
    height: 35,
    marginLeft: 70,
  },
  container6: {
    flexDirection: "row",
    marginTop: -90,
  },
});

export default PharmacySignUp;
