import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Login = ({ navigation }) => {
  const handlePress = () => {
    console.log("Button pressed");
  };
  return (
    <View style={styles.loginpage1}>
      <Image
        source={require("../PetMate/AppPics/Dog.png")}
        style={styles.image}
      />

      <View style={styles.username}>
        <TextInput style={styles.text}>Email or Username</TextInput>
      </View>

      <View style={styles.password}>
        <TextInput style={styles.text}>Password</TextInput>
        <TouchableOpacity
          onPress={() => navigation.navigate('VetMenu')}
          style={styles.button}
        >
          <Image
            source={require("../PetMate/AppPics/Password.png")}
            style={styles.password_eyeimage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.forgot_password} onPress={handlePress}>
          <Text style={styles.forgot_password}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container1}>
        <TouchableOpacity style={styles.login_button} onPress={handlePress}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.log4}>
        <Text style={styles.forgot_password}>or continue with</Text>
      </View>

      <View style={styles.signup_imageContainer}>
        <TouchableOpacity>
          <Image
            source={require("../PetMate/AppPics/FB.png")}
            style={styles.image2}
          />
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity>
          <Image
            source={require("../PetMate/AppPics/Google.png")}
            style={styles.image2}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.log5}>
        <Text style={styles.no_account}>
          Don't have an account?{" "}
          <TouchableOpacity onPress={() => navigation.navigate('UserCategory')}>
            <Text style={styles.signUpText}>SIGN UP</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  loginpage1: {
    flex: 1, //fill the whole screen
    backgroundColor: "#BAFAD0",
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
    width: "20%",
    height: "100%",
    marginLeft: 150,
  },
  username: {
    backgroundColor: "white",
    width: "70%",
    height: "5%",
    borderRadius: 20,
    marginTop: 25,
    justifyContent: "center",
  },
  password: {
    backgroundColor: "white",
    width: "70%",
    height: "5%",
    borderRadius: 20,
    marginTop: 25,
    flexDirection: "row",
  },
  login_button: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 55,
    borderRadius: 10,
    marginTop: 20,
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
    // marginTop: 10,
    textAlign: "left",
    marginLeft: 20,
    color: "rgba(0, 0, 0, 0.5)", // 50% transparent text
  },
  container: {
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 130,
  },
  forgot_password: {
    fontSize: 15,
  },
  container1: {
    justifyContent: "center",
    alignItems: "center",
  },
  signup_imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
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
    fontSize: 16,
    fontWeight: "bold",
  },
  no_account: {
    marginTop: 30,
  },
});
export default Login;
