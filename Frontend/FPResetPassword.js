import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";

const FPResetPassword = () => {
  const [password, setPassword] = useState();
  const [confirmpassword, setconfirmPassword] = useState();
  const handlePress = () => {

    if (!code) {
      Alert.alert("Missing Information", "Please fill in all mandatory fields.");
      return;
    }
    console.log("All fields filled, proceed with registration.");
    console.log("Button Pressed");
  };
  return (
    <View style={styles.main_container}>
      <Image source={require("../AppPics/Dog.png")} style={styles.image} />
      <Text style={styles.verification_text}>Reset Password</Text>
      <View style={styles.enter_the_verification_text_container}>
      <View style={styles.code_input_text_field}>
          <TextInput
            style={styles.code_text_input}
            placeholder="Enter your new password"
            onChangeText={(text) => setCode(text)}
          ></TextInput>
        </View>
  
        <View style={styles.code_input_text_field}>
          <TextInput
            style={styles.code_text_input}
            placeholder="Re-enter your new password"
            onChangeText={(text) => setCode(text)}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.verify_button} onPress={handlePress}>
          <Text style={styles.verification_button_text}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1, //fill the whole screen
    backgroundColor: "#CEEFA3",
    justifyContent: "flex-start", //start from the top
    alignItems: "center",
  },
  image: {
    resizeMode: "contain",
    width: "70%",
    height: "30%",
    alignSelf: "center", // Center the image horizontally
  },
  verification_text: {
    paddingTop: 10,
    fontSize: 40,
    fontWeight: "900",
  },
  enter_the_verification_text_container: {
    marginTop: 20,
  },
  enter_the_verification_text_1: {
    fontSize: 19,
  },
  enter_the_verification_text_2: {
    fontSize: 19,
    paddingLeft: 10,
  },
  enter_the_verification_text_3: {
    fontSize: 19,
    paddingLeft: 90,
  },
  code_input_text_field: {
    backgroundColor: "white",
    width: 250,
    height: 45,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 2,
    marginTop: 30,
    justifyContent: "center",
  },
  code_text_input: {
    fontSize: 15,
    flex: 1,
    paddingLeft: 20, // Padding placeholder to left inside the text field.
    textAlign: "left", // Align placeholder text to the left inside the text field.
    fontWeight: "900",
  },
  verify_button: {
    backgroundColor: "#3366ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 60,
    marginLeft: 50,
    height: 50,
    width: 150,
  },
  verification_button_text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  resend_the_code_button_text: {
    paddingTop: 30,
    marginLeft: 70,
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FPResetPassword;
