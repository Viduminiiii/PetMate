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
import {
  StripeProvider,
  useConfirmPayment,
  CardField,
} from "@stripe/stripe-react-native";
import axios from "axios";
const helper = require("../config/helper");
const config = require("../config/config");

const Payment_1 = ({ navigation }) => {
  const baseURL = config.DB_HOST + ":" + config.DB_PORT;
  // const pub_key = helper.fetchPublishableKey('pubKey');
  // const sec_key = helper.fetchPublishableKey('secKey');

  const { user } = useAuth();
  const [pub_key, setPub_key] = useState(null);
  const [doctorFee, setDoctorFee] = useState(null);
  const [serviceCharge, setServiceCharge] = useState(false);
  const [totalFee, setTotalFee] = useState(false);
  const [ready, setReady] = useState(false);

  const { confirmPayment, loading } = useConfirmPayment();

  useEffect(() => {
    const pubKey = getPublishableKey("pubKey");
    // const pubKey = helper.fetchPublishableKey("pubKey");
    console.log("public Key1:    " + (pubKey));
    if (pubKey) {
      console.log("public Key:    " + (pubKey));
    }
    if (doctorFee !== null && serviceCharge !== null) {
      const total = parseFloat(doctorFee) + parseFloat(serviceCharge);
      console.log(`Total Fee calculated: ${total}`);
      setTotalFee(total.toString());
    }
    // initialisePaymentSheet();
  }, [doctorFee, serviceCharge]);


  const getPublishableKey = async (type) => {
    console.log("----1----  " + type);
    try {
      await axios.get(baseURL + "/stripe-key", type)
      .then((result) => {
        console.log("----1   ");
        if (result) {
          const obj = JSON.parse(JSON.stringify(result.data))
          console.log("----2 ----obj  "+ obj.data);
          setPub_key(obj.data)
          // console.log(result);
          return JSON.stringify(result.data.data);
        }
      })
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPaymentIntentClientSecret = async () => {
    console.log("----1----  " + totalFee);
    try {
      params = {
        paymentMethodType: "card",
        orderAmount: totalFee,
        currency: 'lkr',
      };
      const response = await axios.post(baseURL + "/create-payment-intent",params);
      if(response)
      {
        console.log("----clientSecret:    "+JSON.stringify(response));
        const obj = JSON.parse(JSON.stringify(response.data));
        const clientSecret = obj.clientSecret;
        console.log("----clientSecret 2:    "+clientSecret);
        return clientSecret;
      }
    } catch (error) {
      console.error(error);
      // Handle the error as needed
      throw error; // Rethrow the error to propagate it further if necessary
    }
  };

  // const handlePress = () => {
  //   console.log("Button pressed");
  //   const userData = {
  //     doctorFee: doctorFee,
  //     serviceCharge: serviceCharge,
  //     totalFee: totalFee,
  //   };
  //   console.log("----------------------userData:   " + JSON.stringify(userData));
  //   navigation.navigate("PaymentGateway");
  // };

  async function buy() {    
    navigation.navigate("PaymentScreen", { orderAmount: totalFee });



    // console.log("----2----  ");
    // // Gather the customer's billing information (for example, email)
    // const billingDetails = {
    //   email: "vidu@example.com",
    // };
    // // Fetch the intent client secret from the backend.
    // const clientSecret = await fetchPaymentIntentClientSecret();
    // console.log("----clientSecret 3:    "+clientSecret);
    

    // // Confirm the payment with the card details
    // const { paymentIntent, error } = await confirmPayment(clientSecret, {
    //   paymentMethodType: "Card",
    //   paymentMethodData: {
    //     billingDetails,
    //   },
    // });

    // if (error) {
    //   console.log("Payment confirmation error", error);
    // } else if (paymentIntent) {
    //   console.log("Success from promise", paymentIntent);
    // }
  }

  return (
    <StripeProvider
      publishableKey={pub_key}
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.petmate" // required for Apple Pay
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
            <TextInput
              style={styles.Text_box}
              onChangeText={(text) => setDoctorFee(text)}
              keyboardType="numeric"
            ></TextInput>
          </View>
          <View style={styles.eachDetail}>
            <Text style={styles.name}>Service Charge</Text>
            <TextInput
              style={styles.Channel_Text_box}
              onChangeText={(text) => setServiceCharge(text)}
              keyboardType="numeric"
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
          <TouchableOpacity onPress={buy} disabled={loading}>
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