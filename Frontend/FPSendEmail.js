import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const FPSendEmail = () => {
  const handlePress = () => {
    console.log("Button Pressed");
  };
  return (
    <View style={styles.loginpage1}>
      <Image source={require("../AppPics/Dog.png")} style={styles.image} />
      <Text style={styles.forgot_password_text}>Forgot Password ?</Text>
      <View style={styles.enter_your_email_text_container}>
        <Text style={styles.enter_your_email_text_1}>
          Enter your email address below to reset your
        </Text>
        <Text style={styles.enter_your_email_text_2}>password</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginpage1: {
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
});

export default FPSendEmail;
