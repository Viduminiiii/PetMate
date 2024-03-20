import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const FPVerification = () => {
  const handlePress = () => {
    console.log("Button Pressed");
  };
  return (
    <View style={styles.main_container}>
      <Image source={require("../AppPics/Dog.png")} style={styles.image} />
      <Text style={styles.verification_text}>Verification</Text>
      <View style={styles.enter_the_verification_text_container}>
        <Text style={styles.enter_the_verification_text_1}>
          Enter the verification code we
        </Text>
        <Text style={styles.enter_the_verification_text_2}>
          just send you on your email
        </Text>
        <Text style={styles.enter_the_verification_text_3}>address</Text>
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
});

export default FPVerification;
