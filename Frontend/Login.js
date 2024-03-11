import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
const config = require("./config/config")

const Login = ({ navigation }) => {
  const baseURL = config.DB_HOST + ":" + config.DB_PORT;
  console.log("baseURL: " + baseURL);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePress = () => {
    // console.log("handlePress ----  " + username + " -  " + password);
    const userData = { username, password };

    console.log("userData:  " + JSON.stringify(userData));
    axios
      .post(baseURL + "/getOneUser", userData)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") navigation.navigate("Menu");
      })
      .catch((e) => console.log(e));

    // if (username === "pet" && password === "123") {
    //   navigation.navigate("Menu");
    // } else if (username === "vet" && password === "123") {
    //   navigation.navigate("VetMenu");
    // } else if (username === "pharmacy" && password === "123") {
    //   navigation.navigate("PharmacyPrescription");
    // }
  };
  const handlePressForgot = () => {
    console.log("Forgot Button pressed");
  };
  return (
    <View style={styles.loginpage1}>
      <Image source={require("../AppPics/Dog.png")} style={styles.image} />

      <View id="username" style={styles.username}>
        <TextInput
          style={styles.text}
          placeholder="Email or Username"
          onChangeText={(text) => setUsername(text)}
        ></TextInput>
      </View>

      <View id="password" style={styles.password}>
        <TextInput
          style={styles.text}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.button}
        >
          <Image
            source={require("../AppPics/Password.png")}
            style={styles.password_eyeimage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.forgot_password}
          onPress={handlePressForgot}
        >
          <Text style={styles.forgot_password}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container1}>
        <TouchableOpacity style={styles.login_button} onPress={handlePress}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.log4}>
        <Text style={styles.text2}>or continue with</Text>
      </View>

      <View style={styles.signup_imageContainer}>
        <TouchableOpacity>
          <Image source={require("../AppPics/FB.png")} style={styles.image2} />
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity>
          <Image
            source={require("../AppPics/Google.png")}
            style={styles.image2}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.log5}>
        <Text style={styles.no_account}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("UserCategory")}>
          <Text style={styles.signUpText}>SIGN UP</Text>
        </TouchableOpacity>
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
  password_eyeimage: {
    resizeMode: "contain",
    width: 40,
    height: 35,
    marginLeft: 150,
  },
  username: {
    backgroundColor: "white",
    width: "70%",
    height: "5%",
    borderRadius: 20,
    marginTop: 25,
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  password: {
    backgroundColor: "white",
    width: "70%",
    height: "5%",
    borderRadius: 20,
    marginTop: 25,
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 2,
  },
  login_button: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30,
    height: 50,
    width: 150,
  },
  loginButtonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  text1: {
    fontSize: 25,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    marginLeft: 20,
  },
  container: {
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 130,
  },
  container1: {
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    fontSize: 18,
    marginTop: 20,
  },
  signup_imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 5,
  },
  image2: {
    width: 50,
    height: 50,
    marginTop: 40,
  },
  space: {
    width: 60, // Adjust the space between images
  },
  log4: {
    marginTop: 25,
    textAlign: "right",
  },
  signUpText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  no_account: {
    fontSize: 18,
  },
  log5: {
    flexDirection: "row",
    marginTop: 30,
  },
});
export default Login;
