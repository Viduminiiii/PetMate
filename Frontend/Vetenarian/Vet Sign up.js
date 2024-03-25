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
import axios from "axios";
import config from "../config/config";

const VetSignUp = ({ navigation }) => {
  // Base URL for the backend API
  const baseURL = config.DB_HOST + ":" + config.DB_PORT;
  console.log("baseURL: " + baseURL);

  // State variables for user input fields and password visibility
  const [fullname, setFullname] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [veterinaryClinicName, setveterinaryClinicName] = useState();
  const [veterinaryLicenseNumber, setveterinaryLicenseNumber] = useState();
  const [veterinaryClinicAddress, setveterinaryClinicAddress] = useState();
  const [password, setPassword] = useState();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Function to handle sign up button press
  const handlePress = () => {
    console.log("Button pressed");
    // Construct user data object
    const userData = {
      fullname,
      username,
      email,
      veterinaryClinicName,
      veterinaryLicenseNumber,
      veterinaryClinicAddress,
      password,
    };

    // Check for missing information in the form
    if (
      !fullname ||
      !username ||
      !email ||
      !veterinaryClinicName ||
      !veterinaryLicenseNumber ||
      !veterinaryClinicAddress ||
      !password
    ) {
      Alert.alert(
        "Missing Information",
        "Please fill in all mandatory fields."
      );
      return;
    }

    // Validate full name
    if (!validateFullName(fullname)) {
      Alert.alert("Invalid Full Name", "Full name should not contain numbers");
      return;
    }

    // Validate clinic name
    if (!validateClinicName(veterinaryClinicName)) {
      Alert.alert(
        "Invalid Clinic Name",
        "Clinic Name should not contain numbers"
      );
      return;
    }

    // Validate email address
    if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address");
      return;
    }

    // If all validations pass, proceed with registration
    console.log("All fields filled, proceed with registration.");
    console.log("userData:  " + JSON.stringify(userData));
    axios
      .post(baseURL + "/registerVet", userData)
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

  // Function to validate clinic name (should not contain numbers)
  const validateClinicName = (veterinaryClinicName) => {
    const containsNumbers = /\d/.test(veterinaryClinicName);
    return !containsNumbers; // Return true if full name doesn't contain numbers
  };

  const validateEmail = (email) => {
    // Validate email using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {/* Navigation Bar */}
        <View style={styles.nav_bar}>
          <Text style={styles.nav_text}>VETERINARY REGISTRATION</Text>
        </View>
        {/* Veterinary Information */}
        <View style={styles.container1}>
          <Text style={styles.text}>Veterinary Information</Text>
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.textInput}
            placeholder="Full name"
            onChangeText={(text) => setFullname(text)}
          ></TextInput>
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
        {/* Clinic Information */}
        <View style={styles.infoText_container}>
          <Text style={styles.text}>Clinic Information</Text>
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.textInput}
            placeholder="Veterinary Clinic name"
            onChangeText={(text) => setveterinaryClinicName(text)}
          ></TextInput>
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.textInput}
            placeholder="Veterinary License Number"
            onChangeText={(text) => setveterinaryLicenseNumber(text)}
          ></TextInput>
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.textInput}
            placeholder="Veterinary Clinic Address"
            onChangeText={(text) => setveterinaryClinicAddress(text)}
          ></TextInput>
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.textInput}
            placeholder="Main city the clinic located"
            onChangeText={(text) => setveterinaryClinicAddress(text)}
          ></TextInput>
        </View>
        {/* Clinic Location */}
        <View style={styles.container4}>
          <Text style={styles.text}>Pin Your Clinic Location</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("GoogleMap")}>
          <Image
            source={require("../../AppPics/Google_map.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        {/* Password */}
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
            >
              <Image
                source={require("../../AppPics/Password.png")}
                style={styles.password_eyeimage}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Sign Up Button */}
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => handlePress()}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
        {/* Continue with Social Media */}
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
  // scrollViewContent: {
  //     color: 'red'
  // },
  container1: {
    marginLeft: -150,
    paddingTop: 20,
  },
  infoText_container: {
    marginLeft: -190,
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
    marginTop: 0,
    marginBottom: 100,
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
    flexDirection: "row",
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

export default VetSignUp;
