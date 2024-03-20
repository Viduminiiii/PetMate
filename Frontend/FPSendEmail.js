import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const FPSendEmail = ({ navigation }) => {
  const [email, setEmail] = useState();
  const handlePress = () => {
    console.log("Button Pressed");
    navigation.navigate("FPVerification");
  };
  return (
    <View style={styles.main_container}>
      <Image source={require("../AppPics/Dog.png")} style={styles.image} />
      <Text style={styles.forgot_password_text}>Forgot Password ?</Text>
      <View style={styles.enter_your_email_text_container}>
        <Text style={styles.enter_your_email_text_1}>
          Enter your email address below to reset your
        </Text>
        <Text style={styles.enter_your_email_text_2}>password</Text>
      </View>
      <View style={styles.email_input_text_field}>
        <TextInput
          style={styles.email_text_input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.submit_button} onPress={handlePress}>
        <Text style={styles.submit_button_text}>SUBMIT</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.back_to_login_button_text}>Back to Login</Text>
      </TouchableOpacity>
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
  forgot_password_text: {
    paddingTop: 10,
    fontSize: 30,
    fontWeight: "900",
  },
  enter_your_email_text_container: {
    marginTop: 15,
  },
  enter_your_email_text_1: {
    fontSize: 18,
  },
  enter_your_email_text_2: {
    fontSize: 18,
    paddingLeft: 135,
  },
  email_input_text_field: {
    backgroundColor: "white",
    width: "85%",
    height: 45,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 2,
    marginTop: 30,
    justifyContent: "center",
  },
  email_text_input: {
    flex: 1,
    paddingLeft: 20, // Padding placeholder to left inside the text field.
    textAlign: "left", // Align placeholder text to the left inside the text field.
    fontWeight: "900",
  },
  submit_button: {
    backgroundColor: "#3366ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 60,
    height: 50,
    width: 150,
  },
  submit_button_text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  back_to_login_button_text: {
    paddingTop: 30,
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FPSendEmail;
