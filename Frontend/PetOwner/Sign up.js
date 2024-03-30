//importing necessary components from react native
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import axios from "axios"; // importing axios for making HTTP requests
const config = require("./../config/config");

const SignUp = ({ navigation }) => {
  //base URL for API requests
  const baseURL = config.DB_HOST + ":" + config.DB_PORT;
  console.log("baseURL: " + baseURL);

  const [fullname, setFullname] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  //const [checkValidEmail, setValidEmail] = useState(false);
  const [petname, setPetName] = useState();
  const [age, setAge] = useState();
  const [password, setPassword] = useState();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePress = () => {
    console.log("Button pressed");
    //creating userData object
    const userData = {
      fullname,
      username,
      email,
      petname,
      age,
      password,
    };

    //validation checks for mandatory fields
    if (!fullname || !username || !email || !petname || !age || !password) {
      Alert.alert(
        "Missing Information",
        "Please fill in all mandatory fields."
      );
      return;
    }

    //validating the full name
    if (!validateFullName(fullname)) {
      Alert.alert("Invalid Full Name", "Full name should not contain numbers");
      return;
    }

    //validating the email
    if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address");
      return;
    }

    //validating the pet name
    if (!validatepetname(petname)) {
      Alert.alert("Invalid Pet Name", "Pet name should not contain numbers");
      return;
    }

    //validating the age
    if (!validateAge(age)) {
      Alert.alert("Invalid Age", "Please enter a valid positive age");
      return;
    }
    //log message indicating all fields are filled and registration is proceeding
    console.log("All fields filled, proceed with registration.");
    console.log("userData:  " + JSON.stringify(userData)); //logging the user data after converting it to a JSON string.
    //sending a POST request to register the user with provided data
    axios
      .post(baseURL + "/register", userData)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") navigation.navigate("Login"); //navigating to the Login screen if registration is successful
      })
      .catch((e) => console.log(e));
  };
  const validateFullName = (fullName) => {
    // Check if full name contains numbers
    const containsNumbers = /\d/.test(fullName);
    return !containsNumbers; // Return true if full name doesn't contain numbers
  };

  const validateEmail = (email) => {
    // Validate email using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatepetname = (petname) => {
    // Check if full name contains numbers
    const containsNumbers = /\d/.test(petname);
    return !containsNumbers; // Return true if full name doesn't contain numbers
  };

  const validateAge = (age) => {
    // Check if age is a positive number
    return !isNaN(age) && parseInt(age) > 0;
  };

  return (
    <View style={styles.container}>
      {/*main container for the whole component*/}
      <View style={styles.nav_bar}>
        {/*nav_bar container which contains the components related to create the navbar*/}
        <Text style={styles.nav_text}>PET OWNER REGISTRATION</Text>
      </View>
      <View style={styles.container1}>
        <Text style={styles.text}>Pet Owner Information</Text>
        {/*adding a text to display*/}
      </View>
      <View style={styles.container2}>
        <TextInput
          style={styles.textInput}
          placeholder="Full name"
          onChangeText={(text) => setFullname(text)} //function to update 'fullname' state when input changes
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
      <View style={styles.infoText_container}>
        <Text style={styles.text}>Pet information</Text>
      </View>
      <View style={styles.container2}>
        <TextInput
          style={styles.textInput}
          placeholder="Pet name"
          onChangeText={(text) => setPetName(text)}
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <TextInput
          style={styles.textInput}
          placeholder="Age"
          keyboardType="numeric" //allowing only numeric input for the keyboard
          onChangeText={(text) => setAge(text)}
        ></TextInput>
      </View>
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
          <MaterialCommunityIcons 
              name={!isPasswordVisible ? 'eye-off' : 'eye'} 
              size={24} 
              color="#aaa"
              style={styles.icon} 
          /> 
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => {
          //validateFullName();
          //validateEmail;
          //validateAge();
          handlePress();
        }}
      >
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <View style={styles.container4}>
        <Text style={styles.text}>Do you have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          {/*creating the login button*/}
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    marginLeft: -150,
    paddingTop: 20,
  },
  infoText_container: {
    marginLeft: -210,
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
  textInput: {
    width:"80%",
    fontSize: 15,
    marginLeft: 10,
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
  continueWithImage: {
    width: 50,
    height: 50,
    flexDirection: "row",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  image: {
    width: 50, // Adjust image width
    height: 50, // Adjust image height
  },
  space: {
    width: 60, // Adjust the space between images
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
  password_eyeimage: {
    resizeMode: "contain",
    width: 40,
    height: 35,
    marginLeft: 70,
  },
  container5: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default SignUp;
