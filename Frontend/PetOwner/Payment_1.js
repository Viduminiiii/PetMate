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
import { useAuth } from "../config/AuthContext";
import { StripeProvider, CardField } from "@stripe/stripe-react-native";
import axios from "axios";
import { useRoute } from "@react-navigation/core";
const helper = require("../config/helper");
const config = require("../config/config");

const Payment_1 = ({ navigation }) => {
  const baseURL = config.DB_HOST + ":" + config.DB_PORT;
  // const pub_key = helper.fetchPublishableKey('pubKey');
  // const sec_key = helper.fetchPublishableKey('secKey');

  const route = useRoute();
  const vetAvlID = route.params?.vetAvlID;
  console.log("vetAvlID:  " + vetAvlID);

  const { user, userID, userType } = useAuth();
  const [pub_key, setPub_key] = useState(null);
  const [doctorFee, setDoctorFee] = useState(null);
  const [serviceCharge, setServiceCharge] = useState(false);
  const [totalFee, setTotalFee] = useState(false);
  const [availability, setAvailability] = useState(false);

  useEffect(() => {
    const userObject = JSON.parse(JSON.stringify(user));
    const pubKey = getPublishableKey("pubKey");

    const fetchRecord = async () => {
      // const userObject = JSON.parse(user);
      axios
        .get(baseURL + `/availabilityData/${vetAvlID}`)
        .then((res) => {
          console.log("res.data:   " + JSON.stringify(res.data));
          setAvailability(res.data);
          const objData = JSON.parse(JSON.stringify(res.data));
          const total = parseFloat(objData.doctorCharges) + parseFloat(objData.serviceCharges);
          console.log(`Total Fee calculated: ${total}`);
          setTotalFee(total);
        })
        .catch((e) => console.log(e));
    };

    fetchRecord();
  }, [doctorFee, serviceCharge]);

  const getPublishableKey = async (type) => {
    console.log("----1----  " + type);
    try {
      await axios.get(baseURL + "/stripe-key", type).then((result) => {
        console.log("----1   ");
        if (result) {
          const obj = JSON.parse(JSON.stringify(result.data));
          console.log("----2 ----obj  " + obj.data);
          setPub_key(obj.data);
          // console.log(result);
          return JSON.stringify(result.data.data);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  async function buy() {
    navigation.navigate("PaymentScreen", {
      vetAvlID: vetAvlID,
      orderAmount: totalFee,
      doctorFee: doctorFee,
      serviceCharge: serviceCharge,
    });
  }

  return (
    <StripeProvider
      publishableKey={pub_key}
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      // merchantIdentifier="merchant.com.petmate" // required for Apple Pay
    >
      <View style={styles.page}>
        <View style={styles.nav_bar}>
          <Text style={styles.nav_text}>PAYMENT SUMMARY</Text>
        </View>
        <View style={styles.container1}>
          <Text style={styles.topic}>Payment Details</Text>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.eachDetail}>
            <Text style={styles.name}>Doctor Fee</Text>
            <Text style={styles.Channel_Text_box}>
              {availability.doctorCharges}
            </Text>
          </View>
          <View style={styles.eachDetail}>
            <Text style={styles.name}>Service Charge</Text>
            <Text style={styles.Channel_Text_box}>
              {availability.serviceCharges}
            </Text>
          </View>
          <View style={styles.eachDetail}>
            <Text style={styles.name}>Total Fee</Text>
            <Text style={styles.Text_box}>{parseFloat(totalFee)}</Text>
          </View>
        </View>

        <View style={styles.container2}>
          <TouchableOpacity onPress={buy}>
            <View style={styles.button}>
              <Text style={styles.proceed_btn}>Proceed</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <CardField
            postalCodeEnabled={true}
            placeholders={{
              number: "4242 4242 4242 4242",
            }}
            cardStyle={{
              backgroundColor: "#FFFFFF",
              textColor: "#000000",
            }}
            style={{
              width: "100%",
              height: 50,
              marginVertical: 30,
            }}
            onCardChange={(cardDetails) => {
              console.log("cardDetails", cardDetails);
            }}
            onFocus={(focusedField) => {
              console.log("focusField", focusedField);
            }}
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
            <Image
              source={require("../../AppPics/Footer_Menu.png")}
              style={styles.menu_img}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
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
          <TouchableOpacity
            onPress={() => navigation.navigate("DocChannelling")}
          >
            <Image
              source={require("../../AppPics/Footer_appointment.png")}
              style={styles.menu_img}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Medicalrecords")}
          >
            <Image
              source={require("../../AppPics/Footer_medicalRecords.png")}
              style={styles.menu_img}
            />
          </TouchableOpacity>
        </View>
      </View>
    </StripeProvider>
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
    marginBottom: 5,
  },
  detailContainer: {
    //flexDirection: "row",
    backgroundColor: "#E6B4EB",
    position: "absolute",
    marginTop: 170,
    //left: 20,
    width: "90%",
    height: "40%",
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
    width: "50%",
    height: "50%",
    marginTop: 25,
    borderRadius: 10,
    textAlign: "right",
    padding: 8,
    fontWeight: "bold",
  },
  Channel_Text_box: {
    backgroundColor: "white",
    width: "50%",
    height: "50%",
    marginTop: 25,
    borderRadius: 10,
    textAlign: "right",
    padding: 8,
  },
  name: {
    width: "40%",
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
