import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

const PharmacySignUp = ({ navigation }) => {
  const [fullname, setFullname] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pharmacyName, setpharmacyName] = useState();
  const [pharmacyLicenseNumber, setpharmacyLicenseNumber] = useState();
  const [pharmacyAddress, setpharmacyAddress] = useState();
  const [password, setPassword] = useState();

  const handlePress = () => {
    console.log("Button pressed");
    const userData = {
      fullname,
      username,
      email,
      pharmacyName,
      pharmacyLicenseNumber,
      pharmacyAddress,
      password,
    };
    console.log("userData:  " + JSON.stringify(userData));
    axios
      .post("http://192.168.1.7:5001/registerPharmacy", userData)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") navigation.navigate("Login");
      })
      .catch((e) => console.log(e));
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
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
            onChangeText={(text) => setpharmacyLicenseNumber(text)}
          ></TextInput>
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.textInput}
            placeholder="Pharmacy Address"
            onChangeText={(text) => setpharmacyAddress(text)}
          ></TextInput>
        </View>
        <View style={styles.container4}>
          <Text style={styles.text}>Pin Your Pharmacy Location</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require("../../AppPics/Google_map.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={styles.container3}>
          <View style={styles.inputWithImage}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
            ></TextInput>
            <TouchableOpacity>
              <Image
                source={require("../../AppPics/Password.png")}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => handlePress()}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
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
  container6: {
    flexDirection: "row",
    marginTop: -90,
  },
});

export default PharmacySignUp;
