//import necessary components from react native
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useAuth } from "../config/AuthContext"; //importing the useAuth hook from the AuthContext module located in the  "../config" directory

const Payment_1 = ({ navigation }) => {
  const { user } = useAuth(); //getting user information from the authentication context using the userAuth hook
  const [doctorFee, setDoctorFee] = useState(null); //storing the doctor's fee, initialized to null
  const [serviceCharge, setServiceCharge] = useState(false); //storing the service charge, initialized to false
  const [totalFee, setTotalFee] = useState(false); //storing the total fee,initialized to false

  //runs whenever the doctorFee and the serviceCharge are not null
  useEffect(() => {
    if (doctorFee !== null && serviceCharge !== null) {
      const total = parseFloat(doctorFee) + parseFloat(serviceCharge);
      //   console.log(`Total Fee calculated: ${total}`);
      setTotalFee(total.toString()); //Sets the totalFee state variable to the calculated total as a string
    }
  }, [doctorFee, serviceCharge]);

  const handlePress = () => {
    console.log("Button pressed");
    //constructs userData object with doctorFee, serviceCharge, and totalFee
    const userData = {
      doctorFee: doctorFee,
      serviceCharge: serviceCharge,
      totalFee: totalFee,
    };
    //logs the userData object after converting it to a string
    console.log(
      "----------------------userData:   " + JSON.stringify(userData)
    );
    navigation.navigate("PaymentGateway"); //navigates to the payment gateway screen
  };
  return (
    <View style={styles.page}>
      {/* main container which contains all the components*/}
      <View style={styles.nav_bar}>
        {/*nav_bar container which contains the components related to create the navbar*/}
        <Text style={styles.nav_text}>PAYMENT SUMMARY</Text>
      </View>
      <View style={styles.container1}>
        <Text style={styles.topic}>Payment Details</Text>
        {/*adding a text to display*/}
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.eachDetail}>
          <Text style={styles.name}>Doctor Fee</Text>
          <TextInput
            style={styles.Text_box}
            onChangeText={(text) => setDoctorFee(text)} //Function called when the text changes to update the doctorFee state
            keyboardType="numeric"
          ></TextInput>
        </View>
        <View style={styles.eachDetail}>
          <Text style={styles.name}>Service Charges</Text>
          <TextInput
            style={styles.Channel_Text_box}
            onChangeText={(text) => setServiceCharge(text)}
            keyboardType="numeric" //allowing only numeric input for the keyboard
          ></TextInput>
        </View>
        <View style={styles.eachDetail}>
          <Text style={styles.name}>Total Fee</Text>
          <TextInput
            style={styles.Text_box}
            value={totalFee ? totalFee.toString() : ""}
            editable={false}
          ></TextInput>
        </View>
      </View>

      <View style={styles.container2}>
        <TouchableOpacity onPress={() => handlePress}>
          <View style={styles.button}>
            <Text style={styles.proceed_btn}>Proceed</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        {/*creating the footer*/}
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <Image
            source={require("../../AppPics/Footer_Menu.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Image
            source={require("../../AppPics/Footer_Chat.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Vet Clinic")}>
          <Image
            source={require("../../AppPics/Footer_VetClinic.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("DocChannelling")}>
          <Image
            source={require("../../AppPics/Footer_appointment.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Medicalrecords")}>
          <Image
            source={require("../../AppPics/Footer_medicalRecords.png")}
            style={styles.menu_img}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav_bar: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 20,
  },
  nav_text: {
    fontSize: 35,
    fontWeight: "bold",
    // alignSelf: 'center'
  },
  page: {
    flex: 1, //fill the whole screen
    backgroundColor: "#CEEFA3",
    justifyContent: "flex-start", //start from the top
    alignItems: "center",
  },
  topic: {
    textAlign: "left",
    fontSize: 20,
    paddingTop: 40,
  },
  container1: {
    flex: 1,
    alignItems: "flex-start",
    marginRight: 210,
  },
  container2: {
    //flex: 1,
    //alignItems: "flex-start",
    marginRight: "0%",
    marginBottom: 105,
  },
  detailContainer: {
    //flexDirection: "row",
    backgroundColor: "#E6B4EB",
    position: "absolute",
    top: 170,
    //left: 20,
    width: 365,
    height: 300,
    borderRadius: 20,
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    height: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  menu_img: {
    width: 40,
    height: 40,
    margin: 15,
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    marginRight: 150,
  },
  Text_box: {
    backgroundColor: "white",
    width: "60%",
    height: "50%",
    marginTop: 23,
    borderRadius: 10,
  },
  Channel_Text_box: {
    backgroundColor: "white",
    width: "50%",
    height: "50%",
    marginTop: 23,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    padding: 10,
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginTop: 25,
  },
  eachDetail: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    height: 45,
    width: 140,
    backgroundColor: "#F2E5E5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    // alignSelf: "center",
    //marginTop: -5,
  },
  proceed_btn: {
    fontWeight: "bold",
    fontSize: 27,
  },
});
export default Payment_1;
