import React, { useState } from "react"
import {
  Alert,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  Button
} from "react-native"
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native"
import axios from "axios";
// import { colors } from "./colors"
const config = require("../config/config");
import { useRoute } from "@react-navigation/native"

export default function Card({ navigation }) {
  const baseURL = config.DB_HOST + ":" + config.DB_PORT;
  
  const route = useRoute()
  const orderAmount = route.params?.orderAmount;
  console.log("orderAmount:  " + orderAmount);
  
  const [name, setName] = useState("")
  const { confirmPayment, loading } = useConfirmPayment()

  const fetchPaymentIntentClientSecret = async () => {
    console.log("----1----  " + orderAmount);
    try {
      params = {
        paymentMethodType: "card",
        orderAmount: orderAmount,
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

  // const handlePayPress = async () => {
  //   console.log("----2---- handlePayPress  " + orderAmount.value);
  //   // Gather the customer's billing information (for example, email)
    
  //   console.log("----3----  ");
  //   // Fetch the intent client secret from the backend.
  //   const clientSecret = await fetchPaymentIntentClientSecret();
  //   console.log("----clientSecret 3:    "+clientSecret);

  //   const billingDetails = {
  //     email: "vidu@example.com",
  //   };
  //   // Confirm the payment with the card details
  //   const { paymentIntent, error } = await confirmPayment(clientSecret, {
  //     paymentMethodType: "Card",
  //     paymentMethodData: {
  //       billingDetails,
  //     },
  //   });

  //   if (error) {
  //     console.log("Payment confirmation error", error);
  //   } else if (paymentIntent) {
  //     console.log("Success from promise", paymentIntent);
  //   }
  // }
  async function buy() {    
    console.log("----2----  " + orderAmount.value);
    // Gather the customer's billing information (for example, email)
    const billingDetails = {
      email: "vidu@example.com",
    };
    // Fetch the intent client secret from the backend.
    const clientSecret = await fetchPaymentIntentClientSecret();
    console.log("----buy clientSecret 3:    "+clientSecret);
    

    // Confirm the payment with the card details
    const { paymentIntent, error } = await confirmPayment(clientSecret, {
      paymentMethodType: "Card",
      paymentMethodData: {
        billingDetails,
      },
    });

    if (error) {
      console.log("Payment confirmation error", error);
    } else if (paymentIntent) {
      console.log("Success from promise", paymentIntent);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text>Enter card details:</Text>
      {/* <Text>4242424242424242 (Visa)</Text>
      <Text>5555555555554444 (Mastercard)</Text>
      <Text>4000002500003155 (Requires 3DSecure)</Text>
      <Text>
        Use any future expiration, any 3 digit CVC, and any postal code.
      </Text> */}
      <TextInput
        autoCapitalize="none"
        placeholder="Name"
        keyboardType="name-phone-pad"
        onChange={value => 
          {
          setName(value.nativeEvent.text);
        }
        }
        style={styles.input}
      />
      <CardField
        placeholder={{
          number: "4242 4242 4242 4242"
        }}
        onCardChange={cardDetails => {
          console.log("cardDetails ", cardDetails)
        }}
        onFocus={focusedField => {
          console.log("focusField ", focusedField)
        }}
        cardStyle={inputStyles}
        style={styles.cardField}
      />
      <Button onPress={buy} title="Pay" disabled={loading} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 20,
    paddingHorizontal: 16
  },
  cardField: {
    width: "100%",
    height: 50,
    marginVertical: 30
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  text: {
    marginLeft: 12
  },
  input: {
    height: 44,
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1.5
  }
})

const inputStyles = {
  borderWidth: 1,
  backgroundColor: "#FFFFFF",
  borderColor: "#000000",
  borderRadius: 8,
  fontSize: 14,
  placeholderColor: "#999999"
}